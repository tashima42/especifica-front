class Block {
  classrooms
  constructor(name, classrooms) {
    this.name = name
    this.classrooms = classrooms
  }

  getClassrooms() {
    return this.classrooms
  }

  addClassrooms(classroom) {
    this.classrooms.push(classroom)
  }
}

export { Block }
