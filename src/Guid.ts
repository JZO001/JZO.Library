import { Guid as IGuid } from "./d.ts/Guid";

class Guid implements IGuid {

    private mGuid: string = Guid.CreateGuid();

    static Cast = (obj: any): Guid => obj as Guid;
    static CastArray = (obj: any): Array<Guid> => obj as Array<Guid>;
    static CreateNew = () => new Guid();
    static CreateNewAsString = () => new Guid().toString();

    toString = (): string => this.mGuid;

    private static S4 = (): string => (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);

    private static CreateGuid = (): string => (Guid.S4() + Guid.S4() + "-" + Guid.S4() + "-4" + Guid.S4().substr(0, 3) + "-" + Guid.S4() + "-" + Guid.S4() + Guid.S4() + Guid.S4()).toLowerCase();

}
Object.preventExtensions(Guid);

export { Guid };
