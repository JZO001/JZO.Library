import { ObjectBase as IObjectBase } from "./d.ts/ObjectBase";
export declare class ObjectBase implements IObjectBase {
    private mHashCode;
    static Cast: (obj: any) => IObjectBase;
    static CastArray: (obj: any) => IObjectBase[];
    static IsUndefinedOrNull: (obj: any) => boolean;
    getHashCode: () => string;
    equals: (obj: any) => boolean;
}
