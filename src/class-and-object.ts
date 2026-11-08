export {}

class employee {
    name:string;
    basicSalary:number;

    constructor(name:string, basicSalary:number) {
        this.name = name;
        this.basicSalary = basicSalary;
    }
}

const employee1 = new employee("Maruf", 2500);
const employee2 = new employee("Islam", 26700);


console.log(employee1 instanceof employee);
console.log(employee2 instanceof employee); 


