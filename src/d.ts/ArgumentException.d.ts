import { Exception, ExceptionStatic } from "./Exception";

export interface ArgumentException extends Exception {
}
export interface ArgumentExceptionStatic<T extends ArgumentException> extends ExceptionStatic<T> {
    new(): T;
    new(message?: string): T;
    new(message?: string, innerException?: Exception): T;
}
declare var ArgumentException: ArgumentExceptionStatic<ArgumentException>;
