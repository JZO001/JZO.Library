import { ArgumentException } from "./ArgumentException";
import { ArgumentNullException as IArgumentNullException } from "./d.ts/ArgumentNullException";
export declare class ArgumentNullException extends ArgumentException implements IArgumentNullException {
    static Cast: (obj: any) => ArgumentNullException;
    static CastArray: (obj: any) => Array<ArgumentNullException>;
}
