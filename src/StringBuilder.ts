import { ArgumentException } from "./ArgumentException";
import { ArgumentNullException } from "./ArgumentNullException";
import { StringBuilder as IStringBuilder } from "./d.ts/StringBuilder";
import { ObjectBase } from "./ObjectBase";

export class StringBuilder extends ObjectBase implements IStringBuilder {

    private mStrings: Array<string> = [];
    private mNewLine: string = "<br />";

    static Cast = (obj: any): IStringBuilder => obj as IStringBuilder;
    static CastArray = (obj: any): Array<IStringBuilder> => obj as Array<IStringBuilder>;

    append = (value: string): IStringBuilder => {
        var str = StringBuilder.verify(value);
        if (str.length > 0) this.mStrings.push(str);
        return this;
    }

    appendLine = (value: string): IStringBuilder => {
        if (ObjectBase.IsUndefinedOrNull(value)) {
            value = "";
        }
        var str = StringBuilder.verify(value);
        this.mStrings.push(str.length > 0 ? str + this.mNewLine : this.mNewLine);
        return this;
    }

    clear = (): IStringBuilder => {
        this.mStrings = [];
        return this;
    }

    isEmpty = (): boolean => this.mStrings.length === 0;

    toString = () => this.mStrings.join("");

    length = () => {
        let len = 0;
        let str: string;
        for (str of this.mStrings) {
            len = len + str.length;
        }
        return len;
    }

    getNewLineString = (): string => this.mNewLine;

    setNewLineString = (value: string): IStringBuilder => {
        if (ObjectBase.IsUndefinedOrNull(value)) {
            throw new ArgumentNullException("Argument 'value' cannot be null.");
        }
        this.mNewLine = value;
        return this;
    };

    private static verify = (str: string): string => {
        if (!StringBuilder.defined(str)) return "";
        if (StringBuilder.getType(str) !== StringBuilder.getType(String(""))) return String(str);
        return str;
    }

    private static defined = (value: any): boolean => {
        return value !== null && typeof value !== undefined;
    };

    private static getType = (value: any) => {
        if (!StringBuilder.defined(value.constructor)) throw new ArgumentException("Unexpected object type");
        var type = String(value.constructor).match(/function\s+(\w+)/);
        return StringBuilder.defined(type) ? type[1] : undefined;
    }

}
