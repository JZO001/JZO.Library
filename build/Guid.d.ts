import { Guid as IGuid } from "./d.ts/Guid";
declare class Guid implements IGuid {
    private mGuid;
    static Cast: (obj: any) => Guid;
    static CastArray: (obj: any) => Array<Guid>;
    static CreateNew: () => Guid;
    static CreateNewAsString: () => string;
    toString: () => string;
    private static S4;
    private static CreateGuid;
}
export { Guid };
