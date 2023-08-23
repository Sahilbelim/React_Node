class student {
    constructor(name, age, course) {
        this.name = name,
            this.age = age;
        this.course = course;
    }
    show() {
        console.log("name is ", this.name, " age is ", this.age, "course is  ", this.course);

    }
   
}
module.exports = student;