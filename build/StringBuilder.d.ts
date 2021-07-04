import { StringBuilder as IStringBuilder } from "./d.ts/StringBuilder";
import { ObjectBase } from "./ObjectBase";
export declare class StringBuilder extends ObjectBase implements IStringBuilder {
    private mStrings;
    private mNewLine;
    static Cast: (obj: any) => IStringBuilder;
    static CastArray: (obj: any) => Array<IStringBuilder>;
    append: (value: string) => IStringBuilder;
    appendLine: (value: string) => IStringBuilder;
    clear: () => IStringBuilder;
    isEmpty: () => boolean;
    toString: () => string;
    length: () => number;
    getNewLineString: () => string;
    setNewLineString: (value: string) => IStringBuilder;
    private static verify;
    private static defined;
    private static getType;
}
