const reader = require("./../utils/reader")

class studentService{
    static #readPath(path){
        return reader.readJsonFile(path)
    }

    static studentList(path){
        return this.#readPath(path)
    }

    static studentEmailWithCertification(path){
        const list = this.#readPath(path)
        return list.filter(item => item.haveCertification === true).map(item => item.email)
    }
}

module.exports = studentService