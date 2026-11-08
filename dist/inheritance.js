// A maneger is an employee with additional responsibilty
// Inheritance - will create a master parent class and some slave child class so that child classes can inherit the property and methods of parent class.
// extends - refers parent class of that child class
// super() - to inherit from child we have to call super() 
// we have pass the parameter in the same sequence as defined in the constructor method
class employee {
    name;
    _basicSalary;
    constructor(name, _basicSalary) {
        this.name = name;
        this._basicSalary = _basicSalary;
    }
    get basicSalary() {
        return this._basicSalary;
    }
    get bonusSalary() {
        return this._basicSalary + 2000;
    }
    set basicSalary(newSalary) {
        if (newSalary && newSalary > 0) {
            this._basicSalary = newSalary;
        }
        else {
            throw new Error("Invalid input or negative number");
        }
    }
    describe() {
        return (`${this.name} earns ${this._basicSalary}k+ salary`);
    }
}
class manager extends employee {
    teamMemberCount;
    constructor(name, _basicSalary, teamMemberCount) {
        super(name, _basicSalary);
        this.teamMemberCount = teamMemberCount;
    }
}
const employee1 = new employee("Maruf", 2500);
console.log(employee1.describe());
const manager1 = new manager("MAruf Islam", 25080, 40);
console.log(manager1.teamMemberCount);
export {};
