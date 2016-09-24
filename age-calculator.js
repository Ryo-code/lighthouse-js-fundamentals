function ageCalculator(name, yearOfBirth, currentYear) {
  var age = currentYear - yearOfBirth
  return name + " is " + age + " years old."
}

console.log(ageCalculator("Ryo", 1987, 2016));
console.log(ageCalculator("Miranda", 1983, 2016));
console.log(ageCalculator("Ferdinand", 1988, 2016));
