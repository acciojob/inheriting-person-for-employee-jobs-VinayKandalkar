// complete this js code
// Define the Person constructor and prototype
function Person(name, age) {
    this.name = name;
    this.age = age;
}
 
Person.prototype.greet = function () {
    console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`);
};
 
// Define the Employee constructor, inherit from Person
function Employee(name, age, jobTitle) {
    Person.call(this, name, age);
    this.jobTitle = jobTitle;
}
 
// Inherit the Person prototype
Employee.prototype = Object.create(Person.prototype);
 
// Reset the constructor property to Employee
Employee.prototype.constructor = Employee;
 
Employee.prototype.jobGreet = function () {
    console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`);
};
 
// Create instances
const person1 = new Person("Alice", 30);
const employee1 = new Employee("Bob", 25, "Developer");
 
person1.greet();        // Output: Hello, my name is Alice, I am 30 years old.
employee1.greet();      // Output: Hello, my name is Bob, I am 25 years old.
employee1.jobGreet();   // Output: Hello, my name is Bob, I am 25 years old, and my job title is Developer.