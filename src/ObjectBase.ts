import { ObjectBase as IObjectBase } from "./d.ts/ObjectBase"
import { Guid } from "./Guid";

export class ObjectBase implements IObjectBase {

    private mHashCode: string = "";

    static Cast = (obj: any): IObjectBase => obj;
    static CastArray = (obj: any): IObjectBase[] => obj;
    static IsUndefinedOrNull = (obj: any): boolean => obj === undefined || obj === null;

    getHashCode = (): string => {
        if (this.mHashCode === "") {
            this.mHashCode = Guid.CreateNewAsString();
        }
        return this.mHashCode;
    }

    equals = (obj: any): boolean => this === obj;

}
