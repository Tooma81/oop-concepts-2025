class Student {
    #name;
    #id;
    #status
    constructor(name, id) {
        this.#name = name;
        this.#id = id;
        this.#status = "Active";
    }
    
    getId() {
        return this.#id
    }
    
    setName(name) {
        this.#name = name
    }

    getName() {
        return this.#name
    }

    setStatus(status) {
        if (status !== "Active" && status !== "Expelled" && status !== "Finished" && status !== "Inactive") {
            throw new Error("Invalid status!")
        }
        this.#status = status
    }

    getStatus() {
        return this.#status
    }
}

const Tudeng = new Student("Ludvig", 1234)

console.log(Tudeng.getName())  //Ludvig
console.log(Tudeng.getId())  //1234
console.log(Tudeng.getStatus())  //Active

//Tudeng.setStatus("None")  //Error: Invalid Status!

Tudeng.setStatus("Finished")
Tudeng.setName("Lonni")

console.log(Tudeng.getStatus())  //Finished
console.log(Tudeng.getName())  //Lonni