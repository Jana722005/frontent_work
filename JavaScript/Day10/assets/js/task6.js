class student {

    constructor(name,age,mark) {

        this.name = name
        this.age = age
        this.mark = mark
    }

    display(){
        console.log(`name ${this.name}`);
        console.log(`age ${this.age}`);
        console.log(`mark ${this.mark}`);
    }
}

let student1 = new student("jana", 21, 75)

let student2 = new student("hari", 22, 82)

student1.display()
student2.display()

