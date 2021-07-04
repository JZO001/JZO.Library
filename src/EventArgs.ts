import { ObjectBase } from "./ObjectBase";
import { EventArgs as IEventArgs } from "./d.ts/EventArgs";

export class EventArgs extends ObjectBase implements IEventArgs {

    static Cast = (obj: any): EventArgs => obj as EventArgs;
    static CastArray = (obj: any): Array<EventArgs> => obj as Array<EventArgs>;

}
