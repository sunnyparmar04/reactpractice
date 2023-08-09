class person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    GetInfo() {
        console.log("my name is", this.name);
        console.log("my age is", this.age);
    }
    Walk() {
        console.log("i can walk");
    }
}
module.exports = person;