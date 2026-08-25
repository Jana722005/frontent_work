let number = 12345
let reverse = 0

for(let i = 1; i<=5; i++){

    let digit = number % 10

    reverse = reverse * 10 + digit

    number = Math.floor(number/10)
}

console.log(reverse);