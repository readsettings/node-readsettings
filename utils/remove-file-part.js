const path = require("path")

/**
* Get the name of a directory without the file part.
* @param dirname The directory to remove the file part from.
*/
module.exports = (dirname) => path.parse(path.resolve(dirname)).dir
