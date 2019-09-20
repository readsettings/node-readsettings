import * as path from "path"
import * as fs from "fs"
import * as json5 from "json5"
import * as yaml from "js-yaml"
import * as toml from "@iarna/toml"

export class ReadSettings {
    public autosave = true
    private _dir: string
    private ext: string
    private _data: object

    private getExt(dir: string): string {
        return path.extname(dir).slice(1)
    }

    constructor(dir: string, { autosave = true } = {}) {
        this.autosave = autosave
        this._dir = dir
        this.ext = this.getExt(dir)

        if (!["json", "json5", "yml", "yaml", "toml"].includes(this.ext)) throw new TypeError("Invalid file type provided!")
        else if (!fs.existsSync(dir)) this._data = {}
        else {
            const data = fs.readFileSync(dir, "utf8")
            if (["json", "json5"].includes(this.ext)) this._data = json5.parse(data)
            else if (["yml", "yaml"].includes(this.ext)) this._data = yaml.safeLoad(data)
            else if (this.ext === "toml") this._data = toml.parse(data)
        }
    }

    private writeFile(data: string) {
        fs.writeFileSync(this._dir, data)
    }

    public save() {
        if (["json", "json5"].includes(this.ext)) this.writeFile(json5.stringify(this._data))
        else if (["yml", "yaml"].includes(this.ext)) this.writeFile(yaml.safeDump(this._data))
        else if (this.ext === "toml") this.writeFile(toml.stringify((this._data as toml.JsonMap)))
    }

    get dir() {
        return this._dir
    }

    set dir(val: string) {
        this._dir = val
        this.ext = this.getExt(val)
    }

    get data() {
        return this._data
    }

    set data(val) {
        this._data = val
        if (this.autosave) this.save()
    }
}