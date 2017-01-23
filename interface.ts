/**
 * Interface in TypeScript
 * You can use an interface to apply varaible types to values as long as their interal structures are the same as the interface
 */
interface Person {
    firstName: string;
    lastName: string;
}

let user = {firstName:'Fred',lastName:'Khoury'}

function greeter(person: Person){
    return `Hello, ${person.firstName} ${person.lastName}`
}

document.body.innerHTML = greeter(user)