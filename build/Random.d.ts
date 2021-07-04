import { Random as IRandom } from "./d.ts/Random";
export declare class Random implements IRandom {
    static Cast: (obj: any) => Random;
    static CastArray: (obj: any) => Array<Random>;
    static Next: (minValue: number, maxValue: number) => number;
}
