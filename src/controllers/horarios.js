import { ClassRoom } from "./classroom"
import { Class } from "./class"

class ClassMap {
  classMap = {
    "segunda": {
      "m1": {
        "p": [
          {
            classroom: new ClassRoom("p", 40, "001", "0"),
            class: new Class("AS65A", 40, "João da Silva", "N15")
          },
          {
            classroom: new ClassRoom("p", 30, "002", "0"),
            class: new Class("IF65L", 30, "Jorge Amado", "N11")
          },
          {
            classroom: new ClassRoom("p", 40, "003", "0"),
            class: new Class("AS65A", 40, "João da Silva", "N15")
          },
          {
            classroom: new ClassRoom("p", 30, "004", "0"),
            class: new Class("IF65L", 30, "Jorge Amado", "N11")
          },
        ],
        "a": [
          {
            classroom: new ClassRoom("a", 30, "105", "1"),
            class: new Class("AG9349", 25, "João da Silva", "A01")
          },
          {
            classroom: new ClassRoom("p", 40, "106", "0"),
            class: new Class("AS65A", 40, "João da Silva", "N15")
          },
          {
            classroom: new ClassRoom("p", 30, "107", "0"),
            class: new Class("IF65L", 30, "Jorge Amado", "N11")
          },
        ],
      },
      "m2": {
        "p": [
          {
            classroom: new ClassRoom("p", 40, "201"),
            class: new Class("ADSKLFJ", 40, "João da Silva", "N15")
          },
          {
            classroom: new ClassRoom("p", 30, "202", "0"),
            class: new Class("KGBKV", 30, "Jorge Amado", "N11")
          },
          {
            classroom: new ClassRoom("p", 40, "203", "0"),
            class: new Class("ADSKLFJ", 40, "João da Silva", "N15")
          },
          {
            classroom: new ClassRoom("p", 30, "004", "0"),
            class: new Class("KGBKV", 30, "Jorge Amado", "N11")
          },
          {
            classroom: new ClassRoom("p", 40, "019", "0"),
            class: new Class("ADSKLFJ", 40, "João da Silva", "N15")
          },
          {
            classroom: new ClassRoom("p", 30, "207", "0"),
            class: new Class("KGBKV", 30, "Jorge Amado", "N11")
          },
        ], "a": []
      },
      "m3": { "p": [], "a": [] },
      "m4": { "p": [], "a": [] },
      "m5": { "p": [], "a": [] },
      "m6": { "p": [], "a": [] },
      "t1": { "p": [], "a": [] },
      "t2": { "p": [], "a": [] },
      "t3": { "p": [], "a": [] },
      "t4": { "p": [], "a": [] },
      "t5": { "p": [], "a": [] },
      "t6": { "p": [], "a": [] },
      "n1": { "p": [], "a": [] },
      "n2": { "p": [], "a": [] },
      "n3": { "p": [], "a": [] },
      "n4": { "p": [], "a": [] },
      "n5": { "p": [], "a": [] },
    },
    "terca": {
      "m1": { "p": [
          {
            classroom: new ClassRoom("p", 30, "002", "0"),
            class: new Class("KGBKV", 30, "Jorge Amado", "N11")
          },
      ], "a": [] },
      "m2": { "p": [], "a": [] },
      "m3": { "p": [], "a": [] },
      "m4": { "p": [], "a": [] },
      "m5": { "p": [], "a": [] },
      "m6": { "p": [], "a": [] },
      "t1": { "p": [], "a": [] },
      "t2": { "p": [], "a": [] },
      "t3": { "p": [], "a": [] },
      "t4": { "p": [], "a": [] },
      "t5": { "p": [], "a": [] },
      "t6": { "p": [], "a": [] },
      "n1": { "p": [], "a": [] },
      "n2": { "p": [], "a": [] },
      "n3": { "p": [], "a": [] },
      "n4": { "p": [], "a": [] },
      "n5": { "p": [], "a": [] },
    },
    "quarta": {
      "m1": { "p": [], "a": [] },
      "m2": { "p": [], "a": [] },
      "m3": { "p": [], "a": [] },
      "m4": { "p": [], "a": [] },
      "m5": { "p": [], "a": [] },
      "m6": { "p": [], "a": [] },
      "t1": { "p": [], "a": [] },
      "t2": { "p": [], "a": [] },
      "t3": { "p": [], "a": [] },
      "t4": { "p": [], "a": [] },
      "t5": { "p": [], "a": [] },
      "t6": { "p": [], "a": [] },
      "n1": { "p": [], "a": [] },
      "n2": { "p": [], "a": [] },
      "n3": { "p": [], "a": [] },
      "n4": { "p": [], "a": [] },
      "n5": { "p": [], "a": [] },
    },
    "quinta": {
      "m1": { "p": [], "a": [] },
      "m2": { "p": [], "a": [] },
      "m3": { "p": [], "a": [] },
      "m4": { "p": [], "a": [] },
      "m5": { "p": [], "a": [] },
      "m6": { "p": [], "a": [] },
      "t1": { "p": [], "a": [] },
      "t2": { "p": [], "a": [] },
      "t3": { "p": [], "a": [] },
      "t4": { "p": [], "a": [] },
      "t5": { "p": [], "a": [] },
      "t6": { "p": [], "a": [] },
      "n1": { "p": [], "a": [] },
      "n2": { "p": [], "a": [] },
      "n3": { "p": [], "a": [] },
      "n4": { "p": [], "a": [] },
      "n5": { "p": [], "a": [] },
    },
    "sexta": {
      "m1": { "p": [], "a": [] },
      "m2": { "p": [], "a": [] },
      "m3": { "p": [], "a": [] },
      "m4": { "p": [], "a": [] },
      "m5": { "p": [], "a": [] },
      "m6": { "p": [], "a": [] },
      "t1": { "p": [], "a": [] },
      "t2": { "p": [], "a": [] },
      "t3": { "p": [], "a": [] },
      "t4": { "p": [], "a": [] },
      "t5": { "p": [], "a": [] },
      "t6": { "p": [], "a": [] },
      "n1": { "p": [], "a": [] },
      "n2": { "p": [], "a": [] },
      "n3": { "p": [], "a": [] },
      "n4": { "p": [], "a": [] },
      "n5": { "p": [], "a": [] },
    },
    "sabado": {
      "m1": { "p": [], "a": [] },
      "m2": { "p": [], "a": [] },
      "m3": { "p": [], "a": [] },
      "m4": { "p": [], "a": [] },
      "m5": { "p": [], "a": [] },
      "m6": { "p": [], "a": [] },
      "t1": { "p": [], "a": [] },
      "t2": { "p": [], "a": [] },
      "t3": { "p": [], "a": [] },
      "t4": { "p": [], "a": [] },
      "t5": { "p": [], "a": [] },
      "t6": { "p": [], "a": [] },
      "n1": { "p": [], "a": [] },
      "n2": { "p": [], "a": [] },
      "n3": { "p": [], "a": [] },
      "n4": { "p": [], "a": [] },
      "n5": { "p": [], "a": [] },
    }
  }

  getFilteredClasses(day, period, block) {
    console.log(day, period, block)
    console.log("classes: ", this.classMap[day][period][block])
    const classes = this.classMap[day][period][block] !== undefined ? this.classMap[day][period][block] : []
    console.log("c ", classes)
    return classes
  }
}

export { ClassMap }
