import { GenericEvent as IGenericEvent, EventHandler as IEventHandler } from "./d.ts/GenericEvent";
import { ObjectBase } from "./ObjectBase";
import { EventArgs } from "./EventArgs";
export declare class GenericEvent<T extends EventArgs> extends ObjectBase implements IGenericEvent<T> {
    private mEventHandlers;
    static Cast<T extends EventArgs>(obj: any): GenericEvent<T>;
    static CastArray<T extends EventArgs>(obj: any): GenericEvent<EventArgs>[];
    addEventHandler: (eventHandler: IEventHandler<T>) => IGenericEvent<T>;
    removeEventHandler: (eventHandler: IEventHandler<T>) => IGenericEvent<T>;
    raiseEvent: (sender: any, eventArgs: T) => IGenericEvent<T>;
    get count(): number;
}
