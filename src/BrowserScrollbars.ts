class BrowserScrollbars {

    private static _width: number = 0;
    private static _height: number = 0;

    static staticContructor() {
        if (typeof document !== 'undefined') {
            BrowserScrollbars._height = BrowserScrollbars.getScrollBarHeight();
            BrowserScrollbars._width = BrowserScrollbars.getScrollBarWidth();
            console.log("BrowserScrollbars, scroll width: " + BrowserScrollbars._width.toString() + ", height: " + BrowserScrollbars._height.toString());
        } else {
            console.log("BrowserScrollbars, no document found");
        }
    }

    static get width(): number { return BrowserScrollbars._width; }
    static get height(): number { return BrowserScrollbars._height; }

    private static getScrollBarWidth(): number {
        const inner = document.createElement('p');
        inner.style.width = "100%";
        inner.style.height = "200px";

        const outer = document.createElement('div');
        outer.style.position = "absolute";
        outer.style.top = "0px";
        outer.style.left = "0px";
        outer.style.visibility = "hidden";
        outer.style.width = "200px";
        outer.style.height = "150px";
        outer.style.overflow = "hidden";
        outer.appendChild(inner);

        document.body.appendChild(outer);
        const w1 = inner.offsetWidth;
        outer.style.overflow = 'scroll';
        let w2 = inner.offsetWidth;
        if (w1 === w2) w2 = outer.clientWidth;

        document.body.removeChild(outer);

        return w1 - w2;
    }

    private static getScrollBarHeight(): number {
        const inner = document.createElement('p');
        inner.style.width = "10px";
        inner.style.height = "100%";

        const outer = document.createElement('div');
        outer.style.position = "absolute";
        outer.style.top = "0px";
        outer.style.left = "0px";
        outer.style.visibility = "hidden";
        outer.style.width = "200px";
        outer.style.height = "150px";
        outer.style.overflow = "hidden";
        outer.appendChild(inner);

        document.body.appendChild(outer);
        const w1 = inner.offsetHeight;
        outer.style.overflow = 'scroll';
        let w2 = inner.offsetHeight;
        if (w1 === w2) w2 = outer.offsetHeight;

        document.body.removeChild(outer);

        return w1 - w2;
    }

}
BrowserScrollbars.staticContructor();

export { BrowserScrollbars };
