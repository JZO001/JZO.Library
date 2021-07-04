import { ArgumentException } from "./ArgumentException";
import { ArgumentOutOfRangeException as IArgumentOutOfRangeException } from "./d.ts/ArgumentOutOfRangeException";
export declare class ArgumentOutOfRangeException extends ArgumentException implements IArgumentOutOfRangeException {
    static Cast: (obj: any) => ArgumentOutOfRangeException;
    static CastArray: (obj: any) => Array<ArgumentOutOfRangeException>;
}
