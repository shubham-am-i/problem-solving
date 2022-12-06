const Person = function (firstname, birthYear) {
  // 1. New {} is created
  // 2. function is called, this = {}
  // 3. {} linked to prototype
  // 4. function automatically return {}
  this.firstname = firstname
  this.birthYear = birthYear
}

const shubham = new Person('shubham', 1994)
console.log(Person.prototype)
