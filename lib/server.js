const sc = require("./controllers/studentController");
const { request, response } = require("express");
const express = require("express");
const app = express();
app.use(express.json());
const port = 3000;

app.get ("/", (request, response) => {
    response.json({message: "Welcome to Students API"});
});

app.get("/v1/students", (request, response) => {
    const students = sc.getStudentList();
    response.json(students);
});

app.get("/v1/students/email/certification", (request, response) => {
    const students = sc.getStudentEmailWithCertification();
    response.json(students);
});

app.get("/v1/students/credits", (request, response) => {
    const students = sc.getStudentsWithCreditsOver500();
    response.json(students);
});

app.listen(port, () => {
    console.log(`Students API in localhost:${port}`);
});