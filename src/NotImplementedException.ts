import { Exception } from "./Exception";
import { NotImplementedException as INotImplementedException } from "./d.ts/NotImplementedException";

export class NotImplementedException extends Exception implements INotImplementedException {

    static Cast = (obj: any): NotImplementedException => obj as NotImplementedException;
    static CastArray = (obj: any): Array<NotImplementedException> => obj as Array<NotImplementedException>;

}
