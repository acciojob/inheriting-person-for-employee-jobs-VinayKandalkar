// complete this js code
function Person(name, age) {
	 this.name = name;
     this.age = age;
}

Person.prototype.greet = function () {
    console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`);
};

function Employee(name, age, jobTitle) {
	 // Inherit from the Person prototype
    Person.call(this, name, age);

    this.jobTitle = jobTitle;
}

// Inherit the Person prototype
Employee.prototype = Object.create(Person.prototype);

Employee.prototype.constructor = Employee; // Reset the constructor property

Employee.prototype.jobGreet = function () {
    console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`);
};

// Create instances
const person1 = new Person("Alice", 30);
const employee1 = new Employee("Bob", 25, "Developer");
 
person1.greet();        // Output: Hello, my name is Alice, I am 30 years old.
employee1.greet();      // Output: Hello, my name is Bob, I am 25 years old.
employee1.jobGreet();   // Output: Hello, my name is Bob, I am 25 years old, and my job title is Developer.
// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
