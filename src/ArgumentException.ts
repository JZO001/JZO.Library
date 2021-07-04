import { Exception } from "./Exception";
import { ArgumentException as IArgumentException } from "./d.ts/ArgumentException";

export class ArgumentException extends Exception implements IArgumentException {

    static Cast = (obj: any): ArgumentException => obj as ArgumentException;
    static CastArray = (obj: any): Array<ArgumentException> => obj as Array<ArgumentException>;

}
