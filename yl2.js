class Person {
    constructor(firstname, lastname, age) {
        this.firstname = "";
        this.lastname = "";
        this.age = 0;
    }
}

class Student {
    constructor(firstname, lastname, age) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
    }
}

const person1 = new Person("Mari", "Maasikas", 21)
const person2 = new Person("Jüri", "Kivi", 19)
const person3 = new Person("Toomas", "Tamm", 23)

console.log(person1, person2, person3)

const student1 = new Student("Mari", "Maasikas", 21)
const student2 = new Student("Jüri", "Kivi", 19)
const student3 = new Student("Toomas", "Tamm", 23)

console.log(student1, student2, student3)