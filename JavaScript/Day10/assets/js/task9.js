const numbers = [10, 25, 30, 45, 50, 65];

let greaterThan30 = numbers.filter((number) => number > 30);
console.log("Numbers greater than 30:", greaterThan30);


let firstGreaterThan40 = numbers.find((number) => number > 40);
console.log("First number greater than 40:", firstGreaterThan40);


let check50 = numbers.includes(50);
console.log("Does 50 exist:", check50);



let doubledNumbers = numbers.map((number) => number * 2);
console.log("Doubled values:", doubledNumbers);

