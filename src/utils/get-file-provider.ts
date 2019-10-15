import json5 from "json5"
import * as yaml from "js-yaml"
import * as toml from "@iarna/toml"
import * as xml from "xml-js"
import Conf from "conf"

/**
* The file providers.
* @private
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
* @private
*/
export default function getFileProviders(ext: string): Conf.Options<any> {
    return {
        serialize: providers[ext].stringify,
        deserialize: providers[ext].parse,
    }
}
