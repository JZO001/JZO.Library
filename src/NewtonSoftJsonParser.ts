export class NewtonSoftJSONParser {

    static resolveJSONReferences<TResult>(json: any): TResult {
        if (typeof json === 'string')
            json = JSON.parse(json);

        var byid: any = {}, // all objects by id
            refs: Array<any> = []; // references to objects that could not be resolved
        json = (function recurse(obj, prop?: any, parent?: any) {
            if (typeof obj !== 'object' || !obj) // a primitive value
                return obj;
            if (Object.prototype.toString.call(obj) === '[object Array]') {
                for (var i = 0; i < obj.length; i++)
                    // check also if the array element is not a primitive value
                    if (typeof obj[i] !== 'object' || !obj[i]) // a primitive value
                        continue;
                    else if ("$ref" in obj[i])
                        obj[i] = recurse(obj[i], i, obj);
                    else
                        obj[i] = recurse(obj[i], prop, obj);
                return obj;
            }
            if ("$ref" in obj) { // a reference
                var ref: string = obj.$ref;
                if (ref in byid)
                    return byid[ref] as any;
                // else we have to make it lazy:
                refs.push([parent, prop, ref]);
                return;
            } else if ("$id" in obj) {
                var id: string = obj.$id;
                delete obj.$id;
                if ("$values" in obj) // an array
                    obj = obj.$values.map(recurse);
                else // a plain object
                    for (var _prop in obj)
                        obj[_prop] = recurse(obj[_prop], _prop, obj);
                byid[id] = obj;
            }
            return obj;
        })(json); // run it!

        for (var i = 0; i < refs.length; i++) { // resolve previously unknown references
            var ref = refs[i];
            ref[0][ref[1]] = byid[ref[2]];
            // Notice that this throws if you put in a reference at top-level
        }

        return json;
    }

}
