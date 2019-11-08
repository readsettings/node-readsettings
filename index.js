"use strict"

const Conf = require("conf")
const onChange = require("on-change")

const removeExtension = require("./utils/remove-extension")
const getExtension = require("./utils/get-extension")
const getFileProviders = require("./utils/get-file-provider")
const removeFilePart = require("./utils/remove-file-part")

module.exports = class ReadSettings extends Conf {
    /**
    * @param dir The directory to store the settings file.
    * @param options Custom options to pass to {@link https://github.com/sindresorhus/conf conf}
    */
    constructor(dir, options) {
        if (!getExtension(dir)) throw new ReferenceError("File extension not provided in filename!")

        super({
            configName: removeExtension(dir),
            fileExtension: getExtension(dir),
            ...getFileProviders(getExtension(dir)),
            cwd: removeFilePart(dir),
            ...options,
        })

        this.data = onChange(this.store || {}, () => this.store = this.data)
    }
}
