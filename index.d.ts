
import Conf from "conf"

/**
 * Easily manage a configuration file for your application.
 * @example
 * ```
 * const ReadSettings = require("the-module");
 * new ReadSettings("myConfig.json");
 * ```
*/
declare class ReadSettings extends Conf {
    /**
    * The currently stored data.
    */
    data: object

    /**
    * @param dir The directory to store the settings file.
    * @param options Custom options to pass to {@link https://github.com/sindresorhus/conf conf}.
    */
    constructor(dir: string, options?: Conf.Options<any>)
}

export = ReadSettings
