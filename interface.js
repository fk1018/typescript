let user = { firstName: 'Fred', lastName: 'Khoury' };
function greeter(person) {
    return `Hello, ${person.firstName} ${person.lastName}`;
}
document.body.innerHTML = greeter(user);
