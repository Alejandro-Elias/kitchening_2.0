const {readFileSync, writeFileSync} = require("fs")

module.exports = {
    leerJSON : (json) => {
        return JSON.parse(readFileSync(`./src/data/${json}.json`, "utf-8"))
    },
    escribirJSON : (data, json) => {
        writeFileSync(`./src/data/${json}.json`, JSON.stringify(data), "utf-8")
        return null
    }
}