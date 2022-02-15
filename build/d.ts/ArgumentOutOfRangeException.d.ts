import { ArgumentException, ArgumentExceptionStatic} from "./ArgumentException";
import { Exception } from "./Exception";

export interface ArgumentOutOfRangeException extends ArgumentException {
}
export interface ArgumentOutOfRangeExceptionStatic<T extends ArgumentOutOfRangeException> extends ArgumentExceptionStatic<T> {
    new(): T;
    new(message?: string): T;
    new(message?: string, innerException?: Exception): T;
}
declare var ArgumentOutOfRangeException: ArgumentOutOfRangeExceptionStatic<ArgumentOutOfRangeException>;
