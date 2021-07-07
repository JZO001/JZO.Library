import { CastableStatic } from "./ObjectBase";

export interface Guid {
    toString(): string;
}
export interface GuidStatic<T extends Guid> extends CastableStatic<T> {
    new(): Guid;
    CreateNew(): Guid;
    CreateNewAsString(): string;
}
declare var Guid: GuidStatic<Guid>;
