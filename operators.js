// operators in JS are special symbols dat performs operation on 1 or more files i our js file system

// 1.Arithmethic operations
// addition
let sum = 5 + 3;
console.log(sum);

// subtraction
let difference = 10 - sum;
console.log(difference);

// multiplication
let product = sum * difference;
console.log(product);

// division
let quotient = product / 4;
console.log(quotient);

// modulus
let remainder = quotient % 3;
console.log(remainder);


//2.Assignmen Operators:These operators assign value to variables
// assignment
let x = 5;
console.log(x);

// addition assigment
let y = 5;
y += 1;
console.log(y)

// subtraction assignment
let z = 10;
z -= y;
console.log(z)

// 3.Comparison OperatorsThese operators compare values ad return a boolean value
// Equal
console.log(5 == "5")

// strictly equal
console.log(5 === "5")

// not equal
console.log(5 != "5")
let n = 3
let c = 33
console.log(n != c)

// strictly not equal
console.log(5 !== "5")
console.log(5 !== 5)

// Greater than
console.log(10 > 4)
console.log(4 > 10)

// Less than
console.log(2 < 5)
console.log(4 < 1)

// Greater tha or Equal to
console.log(4 >= 5)

// 4.Logical Operators
//And:&&  (return true if both operands are true)
console.log(5 > 3 && 3 > 9)

//Or:|| (returns true if one operand is true)
console.log(5 > 3 || 3 > 5)

//Not:! (reverses the boolean value of the operand)
console.log(!5 > 3 || 3 > 5)