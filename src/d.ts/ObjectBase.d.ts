export interface CastableStatic<T> {
    /**
     * Converts the specified object to the current object's type.
     */
    Cast(obj: any): T;
    CastArray(obj: any): Array<T>;
}

/**
 * Object base functionalities
 */
export interface ObjectBase {
    /**
     * Gets object hashcode
     */
    getHashCode(): string;
    /**
     * Compare this object to an other
     * @param obj Object to compare
     */
    equals(obj: any): boolean;
    /**
     * Gets object type
     */
    //getType(): string;
    /**
     * Sets the object type and return the instance
     * @param type Type name
     */
    //setType(type: string): ObjectBase;
    /**
     * Default toString implementation
     */
    toString(): string;
}

export interface ObjectBaseStatic extends CastableStatic<ObjectBase> {
    new(): ObjectBase;
    IsUndefinedOrNull(obj: any): boolean;
}
declare var ObjectBase: ObjectBaseStatic;
