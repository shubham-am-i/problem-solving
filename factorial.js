const fact = (number) => (number < 1 ? 1 : number * fact(number - 1))

console.log(fact(5))
