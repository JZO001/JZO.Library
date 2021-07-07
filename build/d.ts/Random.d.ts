import { CastableStatic } from "./ObjectBase";

export interface Random {
}
export interface RandomStatic<T extends Random> extends CastableStatic<T> {
    Next(): number;
    Next(minValue: number, maxValue: number): number;
}
declare var Random: RandomStatic<Random>;
