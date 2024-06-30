class Class {
  constructor(classCode, students, professor, code) {
    this.classCode =  classCode
    this.students = students
    this.professor = professor
    this.code = code
  }
  getClassCode() {
    return this.classCode
  }

  getStudents() {
    return this.students
  }
  
  getProfessor() {
    return this.professor
  }

  getCode() {
    return this.code
  }
}

export { Class }
