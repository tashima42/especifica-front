class ClassRoom {
  constructor(block, capacity, number, floor) {
    this.block = block
    this.capacity = capacity
    this.number = number
    this.floor = floor
  }

  // make getters and setters
  getBlock() {
    return this.block
  }

  getCapacity() {
    return this.capacity
  }
  
  getNumber() {
    return this.number
  }

  getFloor() {
    return this.floor
  }
}

export { ClassRoom }
