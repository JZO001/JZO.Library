import { CastableStatic, ObjectBase } from "./ObjectBase";

export interface Dictionary<K extends string | number | object, V> extends ObjectBase {
    //[Key: string]: V;

    add(key: K, value: V): void;
    clear(): void;
    containsKey(key: K): boolean;
    count: number;
    get(key: K): V;
    keys: K[];
    remove(key: K): boolean;
    values: V[];
    update(key: K, value: V): boolean;

}
export interface DictionaryStatic<T extends Dictionary<string | number | object, any>> extends CastableStatic<T> {
    new(): Dictionary<string | number | object, any>;
}
declare var Dictionary: DictionaryStatic<Dictionary<string | number | object, any>>;
