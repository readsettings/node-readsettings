/**
* @license
*
* MIT License
*
* Copyright (c) 2019 Richie Bendall
*
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the 'Software'), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
*
* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
* SOFTWARE.
*/

import Conf from "conf"
import onChange from "on-change"

import removeExtension from "./utils/remove-extension"
import getExtension from "./utils/get-extension"
import getFileProviders from "./utils/get-file-provider"

/**
* Easily manage a configuration file for your application.
*/
export class ReadSettings extends Conf {

    /**
    * The currently stored data.
    */
    public data: object

    /**
    * @param dir The directory to store the settings file.
    * @param options Custom options to pass to {@link https://github.com/sindresorhus/conf conf}
    */
    constructor(dir: string, options?: Conf.Options<any>) {
        super({
            configName: removeExtension(dir),
            fileExtension: getExtension(dir),
            ...getFileProviders(getExtension(dir)),
            ...options,
        })

        this.data = this.store

        onChange(this.data, () => this.store = this.data)
    }
}
