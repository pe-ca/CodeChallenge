const reader = require("./../../lib/utils/reader");

describe("Suite de pruebas para reader.js", () =>{
    test("Comprobacion de existencia de metodo", ()=>{
        const result = typeof reader.readJsonFile;
        expect(result).toBe("function");
    });

    test("Regresa un objeto con la informacion leida", ()=>{
        const result = reader.readJsonFile("./test/testStudents.json");
        expect(typeof result).toBe("object");
    });

    test("Lanza un throw en caso de que no se envie un parametro correcto", ()=>{
        expect(() => {
            reader.readJsonFile("");
        }).toThrow();
    });
});