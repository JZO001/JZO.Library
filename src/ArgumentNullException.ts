import { ArgumentException } from "./ArgumentException";
import { ArgumentNullException as IArgumentNullException } from "./d.ts/ArgumentNullException";

export class ArgumentNullException extends ArgumentException implements IArgumentNullException {

    static Cast = (obj: any): ArgumentNullException => obj as ArgumentNullException;
    static CastArray = (obj: any): Array<ArgumentNullException> => obj as Array<ArgumentNullException>;

}
