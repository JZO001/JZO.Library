import { Exception as IException } from "./d.ts/Exception";
import { ObjectBase } from "./ObjectBase";

export class Exception extends ObjectBase implements IException {

    message?: string;
    innerException?: IException;

    constructor(message?: string, innerException?: IException) {
        super();
        this.message = message;
        this.innerException = innerException;
    }

    static Cast = (obj: any): Exception => obj as Exception;
    static CastArray = (obj: any): Array<Exception> => obj as Array<Exception>;

    toString = (): string => {
        let result = this.message;
        if (ObjectBase.IsUndefinedOrNull(result)) {
            result = this.constructor.constructor.name;
        } else {
            result = this.constructor.constructor.name + ": " + result;
        }
        let innerEx = this.innerException ?? null;
        if (!ObjectBase.IsUndefinedOrNull(innerEx)) {
            result = result + " ---> " + innerEx.toString() + "\r\n";
        }
        return result;
    }

}
