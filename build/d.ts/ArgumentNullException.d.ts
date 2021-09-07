import { ArgumentException, ArgumentExceptionStatic } from "./ArgumentException";
import { Exception } from "./Exception";

export interface ArgumentNullException extends ArgumentException {
}
export interface ArgumentNullExceptionStatic<T extends ArgumentNullException> extends ArgumentExceptionStatic<T> {
    new(): T;
    new(message?: string): T;
    new(message?: string, innerException?: Exception): T;
}
declare var ArgumentNullException: ArgumentNullExceptionStatic<ArgumentNullException>;
