import { Exception, ExceptionStatic } from "./Exception";

export interface NotImplementedException extends Exception {
}
export interface NotImplementedExceptionStatic<T extends NotImplementedException> extends ExceptionStatic<T> {
    new(): T;
    new(message?: string): T;
    new(message?: string, innerException?: Exception): T;
}
declare var NotImplementedException: NotImplementedExceptionStatic<NotImplementedException>;
