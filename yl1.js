class Student {
    constructor(name, finished) {
        this.name = name;
        this.finished = false;
    }
}

const student = new Student("John")

console.log(student.name)
console.log(student.finished)