export {}
// A maneger is an employee with additional responsibilty
// Inheritance - will create a master parent class and some slave child class so that child classes can inherit the property and methods of parent class.
// extends - refers parent class of that child class
// super() - to inherit from child we have to call super()nhiuhoh9o
// we have pass the parameter in the same sequence as defined in the constructor method


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

    describe ():string{
        return (`${this.name} earns ${this._basicSalary}k+ salary`)
    }
}

class manager extends employee {
    public teamMemberCount: number;

    constructor(name:string, _basicSalary:number, teamMemberCount: number) {
        super(name, _basicSalary);
        this.teamMemberCount = teamMemberCount;
    }
}

const employee1 = new employee("Maruf", 2500);
console.log(employee1.describe());


const manager1 = new manager("MAruf Islam", 25080, 40)
console.log(manager1.teamMemberCount)