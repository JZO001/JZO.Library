import { EventArgs } from "./EventArgs";
import { GenericEvent } from "./GenericEvent";
import { WindowEvents as IWindowEvents, WindowSizeChangedEventArgs as IWindowSizeChangedEventArgs } from "./d.ts/WindowEvents";

export class WindowSizeChangedEventArgs extends EventArgs implements IWindowSizeChangedEventArgs {

    width: number = 0;
    height: number = 0;

    constructor(width: number, height: number) {
        super();
        this.width = width;
        this.height = height;
    }

    static Cast = (obj: any): WindowSizeChangedEventArgs => obj as WindowSizeChangedEventArgs;
    static CastArray = (obj: any): Array<WindowSizeChangedEventArgs> => obj as Array<WindowSizeChangedEventArgs>;

}

class WindowEvents implements IWindowEvents {

    static sizeChangedEvent = new GenericEvent<WindowSizeChangedEventArgs>();

    static staticConstructor() {
        if (typeof window !== 'undefined') window.addEventListener('resize', WindowEvents._internalWindowsSizeHandler);
    }

    static _internalWindowsSizeHandler() {
        WindowEvents.sizeChangedEvent.raiseEvent(WindowEvents, new WindowSizeChangedEventArgs(window.innerWidth, window.innerHeight));
    }

}
WindowEvents.staticConstructor();

export { WindowEvents };
