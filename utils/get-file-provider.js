const json5 = require("json5")
const yaml = require("js-yaml")
const toml = require("@iarna/toml")
const xml = require("xml-js")

/**
* The file providers.
*/
const providers = {
    json: {
        parse: JSON.parse,
        stringify: JSON.stringify,
    },
    json5: {
        parse: json5.parse,
        stringify: json5.stringify,
    },
    yml: {
        parse: yaml.safeLoad,
        stringify: yaml.safeDump,
    },
    yaml: {
        parse: yaml.safeLoad,
        stringify: yaml.safeDump,
    },
    toml: {
        parse: toml.parse,
        stringify: toml.stringify,
    },
    xml: {
        parse: xml.xml2js,
        stringify: xml.js2xml,
    },
}

/**
* Get the parse and stringify functions when given a supported extension.
* @param ext The extension to retreive the functions for.
*/
module.exports = (ext) => ({
    serialize: providers[ext].stringify,
    deserialize: providers[ext].parse,
})
