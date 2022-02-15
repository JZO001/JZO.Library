import { ObjectBase, CastableStatic } from "./ObjectBase";

/**
 * Event arguments base class
 */
export interface EventArgs extends ObjectBase {
}
export interface EventArgsStatic<T extends EventArgs> extends CastableStatic<T> {
    new(): T;
}
declare var EventArgs: EventArgsStatic<EventArgs>;
