/**
 * Classes
 * create student class with constructor and ublic fields. classes and interfaces play well together.
 */
class Student {
    constructor(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = `${firstName} ${middleInitial} ${lastName}`;
    }
}
function greeter(person) {
    return `Hello ${person.firstName} ${person.lastName}`;
}
let user = new Student('Fred', 'F', 'Khoury');
document.body.innerHTML = greeter(user);
