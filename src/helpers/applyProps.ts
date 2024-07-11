import {
    Container,
    Graphics,
} from 'pixi.js';
import {
    PixiToReactEventPropNames,
    ReactToPixiEventPropNames,
} from '../constants/EventPropNames.ts';
import { diffProps } from './diffProps.ts';
import { isDiffSet } from './isDiffSet.ts';
import { isReadOnlyProperty } from './isReadOnlyProperty.ts';
import { log } from './log.ts';

import type {
    FederatedPointerEvent,
    FederatedWheelEvent,
} from 'pixi.js';
import type { DiffSet } from '../typedefs/DiffSet.ts';
import type { Instance } from '../typedefs/Instance.ts';
import type { InstanceProps } from '../typedefs/InstanceProps.ts';
import type { MaybeInstance } from '../typedefs/MaybeInstance.ts';

const DEFAULT = '__default';
const DEFAULTS_CONTAINERS = new Map();

const PIXI_EVENT_PROP_NAME_ERROR_HAS_BEEN_SHOWN: Record<string, boolean> = {};

/**
 * Apply properties to Pixi.js instance.
 *
 * @param {MaybeInstance} instance An instance?
 * @param {InstanceProps | DiffSet} data New props.
 */
export function applyProps(instance: MaybeInstance, data: InstanceProps | DiffSet)
{
    const localState = instance.__pixireact;
    const {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        __pixireact,
        ...instanceProps
    } = instance;

    let typedData: DiffSet;

    if (isDiffSet(data))
    {
        typedData = data;
    }
    else
    {
        typedData = diffProps(data, instanceProps);
    }

    const { changes } = typedData;

    let changeIndex = 0;

    while (changeIndex < changes.length)
    {
        const change = changes[changeIndex];
        let hasError = false;
        let key = change[0] as keyof Instance;
        let value = change[1];
        const isEvent = change[2];

        const keys = change[3] as (keyof Instance)[];

        let currentInstance = instance;
        let targetProp = currentInstance[key];

        if ((key === 'draw') && (typeof value === 'function'))
        {
            if (instance instanceof Graphics)
            {
                value(instance);
            }
            else
            {
                hasError = true;
                log('warn', `The \`draw\` prop was used on a \`${instance.type}\` component, but it's only valid on \`graphics\` components.`);
            }
        }

        if (key in PixiToReactEventPropNames)
        {
            const typedKey = key as keyof typeof PixiToReactEventPropNames;

            hasError = true;

            if (!PIXI_EVENT_PROP_NAME_ERROR_HAS_BEEN_SHOWN[key])
            {
                PIXI_EVENT_PROP_NAME_ERROR_HAS_BEEN_SHOWN[key] = true;

                log('warn', `Event names must be pascal case; instead of \`${key}\`, you probably want \`${PixiToReactEventPropNames[typedKey]}\`.`);
            }
        }

        if (!hasError)
        {
            // Resolve dashed props
            if (keys.length)
            {
                targetProp = keys.reduce((accumulator, key) => accumulator[key], currentInstance);

                // If the target is atomic, it forces us to switch the root
                if (!(targetProp && targetProp.set))
                {
                    const [name, ...reverseEntries] = keys.reverse();

                    currentInstance = reverseEntries.reverse().reduce((accumulator, key) =>
                        accumulator[key], currentInstance);

                    key = name;
                }
            }

            // https://github.com/mrdoob/three.js/issues/21209
            // HMR/fast-refresh relies on the ability to cancel out props, but pixi.js
            // has no means to do this. Hence we curate a small collection of value-classes
            // with their respective constructor/set arguments
            // For removed props, try to set default values, if possible
            if (value === `${DEFAULT}remove`)
            {
                if (currentInstance instanceof Container)
                {
                    // create a blank slate of the instance and copy the particular parameter.
                    let ctor = DEFAULTS_CONTAINERS.get(currentInstance.constructor);

                    if (!ctor)
                    {
                        /** @type {Container} */
                        ctor = /** @type {*} */ (currentInstance.constructor);

                        // eslint-disable-next-line new-cap
                        ctor = new ctor();

                        DEFAULTS_CONTAINERS.set(currentInstance.constructor, ctor);
                    }

                    value = ctor[key];
                }
                else
                {
                    // instance does not have constructor, just set it to 0
                    value = 0;
                }
            }

            // Deal with events ...
            if (isEvent && localState)
            {
                const typedKey = key as keyof typeof ReactToPixiEventPropNames;
                const pixiKey = ReactToPixiEventPropNames[typedKey];

                if (value)
                {
                    currentInstance[pixiKey] = value as (event: FederatedPointerEvent | FederatedWheelEvent) => void;
                }
                else
                {
                    delete currentInstance[pixiKey];
                }
            }
            else if (!isReadOnlyProperty(currentInstance, key))
            {
                // @ts-expect-error The key is cast to any property of Container, including read-only properties. The check above prevents us from setting read-only properties, but TS doesn't understand it. 🤷🏻‍♂️
                currentInstance[key] = value;
            }
        }

        changeIndex += 1;
    }

    return instance;
}
