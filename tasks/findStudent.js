


const findStudent = (allStudents,studentName) => {
    const isStudent = allStudents.find((name) => name === studentName);
    return isStudent ? true : false;
}

const studentList = ["harish","gowtham","essaki","mani gandhi","aravind"];
console.log(findStudent(studentList,"harish"));

