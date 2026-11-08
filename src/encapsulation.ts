export {}
// Encapsulation - protect a state and change it throw method
// # sign is denoted as private modifier in JS 
// Access modifier in TS - 4 types
// 1- ? Public -default , even if we dont mention explicitly
// 2- ? Private
// 3- ? Protected
// 4- ? readonly
// get method - used to get the class data (mostly private data) from outside of the class 
// set method - used to reassign/modify a class data (mostly private data) from outside of the class 
// syntactic sugar


class employee {
    constructor(
        public name:string, 
        private _basicSalary:number) {}

    get basicSalary():number {
        return this._basicSalary;
    }

    get bonusSalary():number {
        return this._basicSalary+2000;
    }

    set basicSalary(newSalary:number) {
        if (newSalary && newSalary>0){
            this._basicSalary=newSalary;
        }
        else{
            throw new Error("Invalid input or negative number");
            
        }
    }


}

const employee1 = new employee("Maruf", 2500);
const employee2 = new employee("Islam", 26700);


console.log(employee1 instanceof employee);
console.log(employee2 instanceof employee); 

console.log(employee2.bonusSalary)