import { EventArgs } from "./EventArgs";
import { GenericEvent } from "./GenericEvent";
import { WindowEvents as IWindowEvents, WindowSizeChangedEventArgs as IWindowSizeChangedEventArgs } from "./d.ts/WindowEvents";
export declare class WindowSizeChangedEventArgs extends EventArgs implements IWindowSizeChangedEventArgs {
    width: number;
    height: number;
    constructor(width: number, height: number);
    static Cast: (obj: any) => WindowSizeChangedEventArgs;
    static CastArray: (obj: any) => Array<WindowSizeChangedEventArgs>;
}
declare class WindowEvents implements IWindowEvents {
    static sizeChangedEvent: GenericEvent<WindowSizeChangedEventArgs>;
    static staticConstructor(): void;
    static _internalWindowsSizeHandler(): void;
}
export { WindowEvents };
