const ss = require("../../lib/services/studentService")
const reader = require("./../../lib/utils/reader")

describe("suite de pruebas para studentService", () =>{
    test("Comprobacion de existencia de metodos", ()=>{
        const result = typeof ss.studentList
        expect(result).toBe("function")
    })

    test("regresa un objeto con un listado de todos los estudiantes", () =>{
        const studentList = reader.readJsonFile("./test/testStudents.json")
        const result = ss.studentList("./test/testStudents.json")
        expect(result).toEqual(studentList)
    })
})