const ss = require("./../services/studentService");

class studentController{
    static getStudentList(){
        return ss.studentList("./students.json");
    }

    static getStudentEmailWithCertification(){
        return ss.studentEmailWithCertification("./students.json");
    }

    static getStudentsWithCreditsOver500(){
        return ss.studentsWithCreditsOver500("./students.json");
    }
}

module.exports = studentController;