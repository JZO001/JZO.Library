import { ObjectBase } from "./ObjectBase";
import { Random as IRandom } from "./d.ts/Random";

export class Random implements IRandom {

    static Cast = (obj: any): Random => obj as Random;
    static CastArray = (obj: any): Array<Random> => obj as Array<Random>;
    static Next = (minValue: number, maxValue: number): number => {
        var min = 0;
        var max = Number.MAX_SAFE_INTEGER;
        if (!ObjectBase.IsUndefinedOrNull(minValue) && typeof minValue === "number") {
            min = minValue;
        }
        if (!ObjectBase.IsUndefinedOrNull(maxValue) && typeof maxValue === "number") {
            max = maxValue;
        }
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

}
