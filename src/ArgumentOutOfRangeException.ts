import { ArgumentException } from "./ArgumentException";
import { ArgumentOutOfRangeException as IArgumentOutOfRangeException } from "./d.ts/ArgumentOutOfRangeException";

export class ArgumentOutOfRangeException extends ArgumentException implements IArgumentOutOfRangeException {

    static Cast = (obj: any): ArgumentOutOfRangeException => obj as ArgumentOutOfRangeException;
    static CastArray = (obj: any): Array<ArgumentOutOfRangeException> => obj as Array<ArgumentOutOfRangeException>;

}
