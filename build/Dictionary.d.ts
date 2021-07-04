import { Dictionary as IDictionary } from "./d.ts/Dictionary";
import { ObjectBase } from "./ObjectBase";
export declare class Dictionary<K extends string | number | object, V> extends ObjectBase implements IDictionary<K, V> {
    private _keys;
    private _values;
    private static _undefinedKeyErrorMessage;
    private static isEitherUndefinedNullOrStringEmpty;
    private checkKeyAndPerformAction;
    static Cast<K extends string | number | object, V>(obj: any): Dictionary<K, V>;
    static CastArray<K extends string | number | object, V>(obj: any): Dictionary<K, V>[];
    add: (key: K, value: V) => void;
    clear: () => void;
    containsKey: (key: K) => boolean;
    get count(): number;
    get: (key: K) => V;
    get keys(): K[];
    remove: (key: K) => boolean;
    get values(): V[];
    update: (key: K, value: V) => boolean;
}
