import { ArgumentNullException } from "./ArgumentNullException";
import { GenericEvent as IGenericEvent, EventHandler as IEventHandler } from "./d.ts/GenericEvent";
import { ObjectBase } from "./ObjectBase";
import { EventArgs } from "./EventArgs";
import { Guid } from "./Guid";

export class GenericEvent<T extends EventArgs> extends ObjectBase implements IGenericEvent<T> {

    private mEventHandlers: Array<IEventHandler<T>> = [];

    static Cast<T extends EventArgs>(obj: any) { return obj as GenericEvent<T>; }
    static CastArray<T extends EventArgs>(obj: any) { return obj as Array<GenericEvent<T>>; }

    addEventHandler = (eventHandler: IEventHandler<T>): IGenericEvent<T> => {
        if (eventHandler !== undefined && typeof eventHandler === "function" && eventHandler !== null) {
            if (ObjectBase.IsUndefinedOrNull(eventHandler.guid)) {
                eventHandler.guid = Guid.CreateNewAsString();
            }
            this.mEventHandlers.push(eventHandler);
        } else {
            throw new ArgumentNullException("Invalid event handler.");
        }
        return this;
    };

    removeEventHandler = (eventHandler: IEventHandler<T>): IGenericEvent<T> => {
        if (eventHandler !== undefined && typeof eventHandler === "function" && eventHandler !== null) {
            while (this.mEventHandlers.length > 0) {
                var found = false;
                for (let i = 0; i < this.mEventHandlers.length; i++) {
                    const fn: IEventHandler<T> = this.mEventHandlers[i];
                    if (fn === eventHandler) {
                        this.mEventHandlers.splice(i, 1);
                        found = true;
                        break;
                    } else if (fn.guid !== undefined && eventHandler.guid !== undefined) {
                        if (fn.guid !== null && eventHandler.guid !== null && fn.guid === eventHandler.guid) {
                            this.mEventHandlers.splice(i, 1);
                            found = true;
                            break;
                        }
                    }
                    /*
                    else if (fn.name === eventHandler.name && fn.length === eventHandler.length) {
                        this.mEventHandlers.splice(i, 1);
                        found = true;
                        break;
                    }
                    */
                }
                if (found) break;
            }
        } else {
            throw new ArgumentNullException("Invalid event handler.");
        }
        return this;
    };

    raiseEvent = (sender: any, eventArgs: T): IGenericEvent<T> => {
        this.mEventHandlers.slice().forEach(function (item: IEventHandler<T>) {
            try {
                item(sender, eventArgs);
            }
            catch (e) {
                console.log(e);
            }
        });
        return this;
    };

    get count(): number { return this.mEventHandlers.length };

};
