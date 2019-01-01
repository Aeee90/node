const person = {
    name : 'Lee'
}

const bob = Object.create(person);
bob.name = "bob";

function car(){
    this.name ="현die";
}

const auto = new car();

console.log(person.isPrototypeOf(bob));
console.log(auto instanceof car);
