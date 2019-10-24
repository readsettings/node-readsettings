import test from "ava"
import ReadSettings from "."
import * as path from "path"
import fs from "fs-extra"

const configName = "testConfig.json"

test("main", (t) => {
    t.throws(() => new ReadSettings("thereIsNoFileExtension"), {
        instanceOf: ReferenceError,
        message: "File extension not provided in filename!",
    })

    const conf = new ReadSettings(configName)
    t.deepEqual(conf.data, {})
    conf.data.a = "Hello!"
    t.deepEqual(conf.data, { a: "Hello!" })
    conf.set("a", 1)
    t.is(conf.path, path.resolve(configName))
})

fs.removeSync(configName)
