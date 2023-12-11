const fs = require("fs")

module.exports = {
    leerJSON : (json) => {
        return JSON.parse(fs.readFileSync(`./src/data/${json}.json`, "utf-8"))
    }
}