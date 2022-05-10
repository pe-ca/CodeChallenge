const ss = require("../../lib/services/studentService")
const reader = require("./../../lib/utils/reader")

describe("suite de pruebas para studentService", () =>{
    test("Comprobacion de existencia de metodos", ()=>{
        const students = typeof ss.studentList
        const email = typeof ss.studentEmailWithCertification
        const credits = typeof ss.studentsWithCreditsOver500
        expect(students).toBe("function")
        expect(email).toBe("function")
        expect(credits).toBe("function")
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

    test("regresa una lista de nombres de los estudiantes con mas de 500 creditos", () =>{
        const credits = ["Warren","Lucinda"]
        const result = ss.studentsWithCreditsOver500("./test/testStudents.json")
        expect(result).toEqual(credits)
    })
})