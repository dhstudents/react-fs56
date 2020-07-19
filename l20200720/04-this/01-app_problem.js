class Person {
    constructor(id , name , age) {
        this.id = id
        this.name = name
        this.age = age
    }

    details() {
        return `ID: ${this.id} NAME: ${this.name}`
    }
}

const p = new Person(100, 'Koko Boten', 40)
let str = p.details();
let f_detaile = p.details;

str = f_detaile()


console.log(str)

