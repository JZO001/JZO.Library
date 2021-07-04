import { Dictionary as IDictionary } from "./d.ts/Dictionary";
import { ObjectBase } from "./ObjectBase";
import { ArgumentException } from "./ArgumentException";

// based on: http://fabiolandoni.ch/dictionary-in-typescript-based-on-arrays-of-generic-types/

export class Dictionary<K extends string | number | object, V> extends ObjectBase implements IDictionary<K, V> {

    private _keys: K[] = [];
    private _values: V[] = [];

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
            if (this.containsKey(key)) {
                throw new ArgumentException("An element with the same key already exists in the dictionary: " + key.toString());
            }

            this._keys.push(key);
            this._values.push(value as V);
        };
        this.checkKeyAndPerformAction(addAction, key, value);
    }

    clear = (): void => {
        this._keys = [];
        this._values = [];
    }

    containsKey = (key: K): boolean => {
        var containsKeyAction = (key: K): boolean => {
            if (this._keys.indexOf(key) === -1) {
                return false;
            }
            return true;
        };

        return this.checkKeyAndPerformAction(containsKeyAction, key) as boolean;
    }

    get count(): number {
        return this._values.length;
    }

    get = (key: K): V => {
        var getValueAction = (key: K): V => {
            if (!this.containsKey(key)) {
                throw new ArgumentException("Key not found: " + key.toString());
            }

            var index = this._keys.indexOf(key);
            return this._values[index];
        }
        return this.checkKeyAndPerformAction(getValueAction, key) as V;
    }

    get keys(): K[] {
        return this._keys;
    }

    remove = (key: K): boolean => {
        var removeAction = (key: K): boolean => {
            if (!this.containsKey(key)) {
                return false;
            }

            var index = this._keys.indexOf(key);
            this._keys.splice(index, 1);
            this._values.splice(index, 1);

            return true;
        };
        return this.checkKeyAndPerformAction(removeAction, key) as boolean;
    }

    get values(): V[] {
        return this._values;
    }

    update = (key: K, value: V): boolean => {
        var changeValueForKeyAction = (key: K, value?: V): void => {
            if (this.containsKey(key)) {
                var index = this._keys.indexOf(key);
                this._values[index] = value as V;
            } else {
                this._keys.push(key);
                this._values.push(value as V);
            }
        }
        return this.checkKeyAndPerformAction(changeValueForKeyAction, key, value) as boolean;
    }

}
