class Student{
    constructor(name, roll){
        this.name = name;
        this.roll = roll;
        this.school = "Programming Hero"
    }
}
const student1 = new Student("Shuvo", 23);
const student2 = new Student("Mahi", 18);
console.log(student1.name, student2.name);
