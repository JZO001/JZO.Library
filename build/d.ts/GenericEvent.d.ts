import { ObjectBase, CastableStatic } from "./ObjectBase";
import { EventArgs } from "./EventArgs";

/**
 * A method that will handle the client-side events of a web control's client-side equivalent.
 */
export interface EventHandler<T extends EventArgs> extends Function {
    /**
     * A method that will handle the client-side events of a web control's client-side equivalent.
     * @param sender An object representing the event source. Identifies the control that raised the event.
     * @param e An EventArgs object that contains event data.
     */
    (sender: object, e: T): void;
    guid?: string;
}
//export interface EventHandlerStatic<T extends EventArgs> {
//}
declare var EventHandler: EventHandler<EventArgs>;

/*
 * Default event with IEventArg
 */
export interface GenericEvent<E extends EventArgs> extends ObjectBase {
    /**
     * Add an event handler which receives sender and eventargs for parameters
     * @param eventHandler The function
     */
    addEventHandler(eventHandler: EventHandler<E>): GenericEvent<E>;
    /**
     * Remove an event handler which receives sender and eventargs for parameters
     * @param eventHandler The function
     */
    removeEventHandler(eventHandler: EventHandler<E>): GenericEvent<E>;
    /**
     * Fire event for the delegates
     * @param sender The event source object
     * @param e The event arguments
     */
    raiseEvent(sender: object, e: E): GenericEvent<E>;
    /**
     * Gets the number of attached event handlers
     */
    count: number;
}
export interface GenericEventStatic<T extends GenericEvent<EventArgs>> extends CastableStatic<T> {
    new(): GenericEvent<EventArgs>;
}
declare var GenericEvent: GenericEventStatic<GenericEvent<EventArgs>>;
