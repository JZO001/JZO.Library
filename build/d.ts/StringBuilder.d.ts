import { ObjectBase, CastableStatic } from "./ObjectBase";

/**
 * StringBuilder implementation
 */
export interface StringBuilder extends ObjectBase {
    /**
     * Append string
     * @param value String value
     */
    append(value: string): StringBuilder;
    /**
     * Append string and a new line
     * @param value String value
     */
    appendLine(value: string): StringBuilder;
    /**
     * Clear content
     */
    clear(): StringBuilder;
    /**
     * True, if this instance is empty, otherwise False.
     */
    isEmpty(): boolean;
    /**
     * Length of the content
     */
    length(): number;
    /**
     * Get the string which represents the new line
     */
    getNewLineString(): string;
    /**
     * Set the string which represents the new line
     */
    setNewLineString(value: string): StringBuilder;
}
export interface StringBuilderStatic<T extends StringBuilder> extends CastableStatic<T> {
    new(): T;
}
declare var StringBuilder: StringBuilderStatic<StringBuilder>;
