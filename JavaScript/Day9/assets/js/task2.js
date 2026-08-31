
let numbers = (n) => {

    let result = ""

    for(let i = 1; i <= n; i++){

        if(i % 2 === 0){
            result += i + " "
        }
    }

    return result
}

console.log(numbers(10));