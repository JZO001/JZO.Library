import { ObjectBase, CastableStatic } from "./ObjectBase";

export interface Exception extends ObjectBase {
    message?: string;
    innerException?: Exception;
}
export interface ExceptionStatic<T extends Exception> extends CastableStatic<T> {
    new(): T;
    new(message?: string): T;
    new(message?: string, innerException?: Exception): T;
}
declare var Exception: ExceptionStatic<Exception>;
