import * as path from "path"

/**
* Get the file extension when given a filename.
* @param filename The filename to get the extension for.
* @private
*/
export default function getExtension(filename: string): string {
    return path.extname(filename)
}
