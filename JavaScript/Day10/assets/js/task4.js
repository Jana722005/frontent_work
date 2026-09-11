// rest parameter which collect the n number of values

let number = (...numbers)=> {
    let result = numbers

    return result
}

console.log(number(10,20,30,40,50));


// spread syntax is used to expand the values using the rest parameter or other values

let a = [10,20,30,40]

let b = [50,60,70,80]

let c = [90,100]

const result = [...a,...b,...c]


console.log(result);
