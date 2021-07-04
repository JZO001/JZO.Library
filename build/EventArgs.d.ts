import { ObjectBase } from "./ObjectBase";
import { EventArgs as IEventArgs } from "./d.ts/EventArgs";
export declare class EventArgs extends ObjectBase implements IEventArgs {
    static Cast: (obj: any) => EventArgs;
    static CastArray: (obj: any) => Array<EventArgs>;
}
