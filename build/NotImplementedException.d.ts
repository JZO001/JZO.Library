import { Exception } from "./Exception";
import { NotImplementedException as INotImplementedException } from "./d.ts/NotImplementedException";
export declare class NotImplementedException extends Exception implements INotImplementedException {
    static Cast: (obj: any) => NotImplementedException;
    static CastArray: (obj: any) => Array<NotImplementedException>;
}
