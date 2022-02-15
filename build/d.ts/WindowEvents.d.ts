import { EventArgs } from "./EventArgs";
import { GenericEvent } from "./GenericEvent";
import { CastableStatic } from "./ObjectBase";

export interface WindowSizeChangedEventArgs extends EventArgs {
    width: number;
    height: number;
}
export interface WindowSizeChangedEventArgsStatic<T extends WindowSizeChangedEventArgs> extends CastableStatic<T> {
    new(width: number, height: number): T;
}
declare var WindowSizeChangedEventArgs: WindowSizeChangedEventArgsStatic<WindowSizeChangedEventArgs>;

export interface WindowEvents {
}
export interface WindowEventsStatic<T extends WindowEvents> extends CastableStatic<T> {
    sizeChangedEvent: GenericEvent<WindowSizeChangedEventArgs>;
}
declare var WindowEvents: WindowEventsStatic<WindowEvents>;
