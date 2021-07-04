import { Exception as IException } from "./d.ts/Exception";
import { ObjectBase } from "./ObjectBase";
export declare class Exception extends ObjectBase implements IException {
    message?: string;
    innerException?: IException;
    constructor(message?: string, innerException?: IException);
    static Cast: (obj: any) => Exception;
    static CastArray: (obj: any) => Array<Exception>;
    toString: () => string;
}
