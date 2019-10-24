const path = require("path")

/**
* Get the file extension when given a filename.
* @param filename The filename to get the extension for.
*/
module.exports = (filename) => path.extname(filename).slice(1)
