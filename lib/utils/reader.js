const fs = require("fs")

class reader{
    static readJsonFile(path){
        try{
            return JSON.parse(fs.readFileSync(path))
        }
        catch(error){
            throw "Path no valido"
        }
    }
}

module.exports = reader