import { Exception } from "./Exception";
import { ArgumentException as IArgumentException } from "./d.ts/ArgumentException";
export declare class ArgumentException extends Exception implements IArgumentException {
    static Cast: (obj: any) => ArgumentException;
    static CastArray: (obj: any) => Array<ArgumentException>;
}
