const reader = require("./../utils/reader")

class studentService{
    static #readPath(path){
        return reader.readJsonFile(path)
    }

    static studentList(path){
        return this.#readPath(path)
    }
}

module.exports = studentService