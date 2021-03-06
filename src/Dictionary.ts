import { Dictionary as IDictionary } from "./d.ts/Dictionary";
import { ObjectBase } from "./ObjectBase";
import { ArgumentException } from "./ArgumentException";

export class Dictionary<K extends string | number | object, V> extends ObjectBase implements IDictionary<K, V> {

    private _map: Map<K, V> = new Map<K, V>();

    private static _undefinedKeyErrorMessage: string = "Key is either undefined, null or an empty string.";

    private static isEitherUndefinedNullOrStringEmpty(object: any): boolean {
        return (typeof object) === "undefined" || object === null || object.toString() === "";
    }

    private checkKeyAndPerformAction(action: { (key: K, value?: V): void | V | boolean }, key: K, value?: V): void | V | boolean {
        if (Dictionary.isEitherUndefinedNullOrStringEmpty(key)) {
            throw new Error(Dictionary._undefinedKeyErrorMessage);
        }
        return action(key, value);
    }

    static Cast<K extends string | number | object, V>(obj: any) { return obj as Dictionary<K, V> };
    static CastArray<K extends string | number | object, V>(obj: any) { return obj as Array<Dictionary<K, V>> };

    add = (key: K, value: V): void => {
        var addAction = (key: K, value?: V): void => {
            if (this._map.has(key)) {
                throw new ArgumentException("An element with the same key already exists in the dictionary: " + key.toString());
            }

            this._map.set(key, value);
        };
        this.checkKeyAndPerformAction(addAction, key, value);
    }

    clear = (): void => {
        this._map.clear();
    }

    containsKey = (key: K): boolean => {
        var containsKeyAction = (key: K): boolean => {
            return this._map.has(key);
        };

        return this.checkKeyAndPerformAction(containsKeyAction, key) as boolean;
    }

    get count(): number {
        return this._map.size;
    }

    get = (key: K): V => {
        var getValueAction = (key: K): V => {
            if (!this._map.has(key)) {
                throw new ArgumentException("Key not found: " + key.toString());
            }

            return this._map.get(key);
        }
        return this.checkKeyAndPerformAction(getValueAction, key) as V;
    }

    get keys(): K[] {
        return Array.from(this._map.keys());
    }

    remove = (key: K): boolean => {
        var removeAction = (key: K): boolean => {
            return this._map.delete(key);
        };
        return this.checkKeyAndPerformAction(removeAction, key) as boolean;
    }

    get values(): V[] {
        return Array.from(this._map.values());
    }

    update = (key: K, value: V): boolean => {
        var changeValueForKeyAction = (key: K, value?: V): boolean => {
            const result: boolean = this._map.has(key);
            this._map.set(key, value);
            return result;
        }
        return this.checkKeyAndPerformAction(changeValueForKeyAction, key, value) as boolean;
    }

}
