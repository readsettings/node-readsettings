const path = require("path")

/**
* Get the name of a file without the extension.
* @param filename The filename to parse the name for.
*/
module.exports = (filename) => path.basename(filename, path.extname(filename))
