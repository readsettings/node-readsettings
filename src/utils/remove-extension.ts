import * as path from "path"
import getExtension from "./get-extension"

/**
* Get the name of a file without the extension.
* @param filename The filename to parse the name for.
* @private
*/
export default function removeExtension(filename: string): string {
    return path.basename(filename, getExtension(filename))
}
