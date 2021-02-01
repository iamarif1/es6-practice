class FatherName {
    constructor() {
        this.father = "Bibar";
    }
}

class Child extends FatherName {
    constructor(name){
        super();
        this.name = name;
    }
    getFullName(){
        return this.name + " " + this.father;
    }
}
const baby = new Child("Justin");
const baby2 = new Child("Tom");
console.log(baby.getFullName(), baby2.getFullName());