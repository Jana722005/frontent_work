
let numbers = (n) => {

    let a = 1

    for(let i = 1; i <= n; i++){

        a *= i
    }

    return a
}

console.log(numbers(5));
