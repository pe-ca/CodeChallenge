const ss = require("../../lib/services/studentService")
const reader = require("./../../lib/utils/reader")

describe("suite de pruebas para studentService", () =>{
    test("Comprobacion de existencia de metodos", ()=>{
        const students = typeof ss.studentList
        const email = typeof ss.studentEmailWithCertification
        expect(students).toBe("function")
        expect(email).toBe("function")
    })

    test("regresa un objeto con un listado de todos los estudiantes", () =>{
        const studentList = reader.readJsonFile("./test/testStudents.json")
        const result = ss.studentList("./test/testStudents.json")
        expect(result).toEqual(studentList)
    })

    test("regresa una listade correos de los estudiantes con certificacion: true", () =>{
        const emailList = ["Todd@visualpartnership.xyz","Sexton@visualpartnership.xyz"]
        const result = ss.studentEmailWithCertification("./test/testStudents.json")
        expect(result).toEqual(emailList)
    })
})