var globalVar = "I am global";
let globalLet = "I am also global";
const globalConst = "I am also global";

console.log(globalVar);
console.log(globalLet);
console.log(globalConst);


function myFunction() {

    var functionVar = "I am inside the function";
    let functionLet = "I am also inside the function";
    const functionConst = "I am also inside the function";

    console.log(functionVar);
    console.log(functionLet);
    console.log(functionConst);


    if (true) {

        var blockVar = "var inside block";
        let blockLet = "let inside block";
        const blockConst = "const inside block";

        console.log(blockVar);
        console.log(blockLet);
        console.log(blockConst);
    }

    console.log(blockVar); 
    console.log(blockLet); // these two display element can't run because  let and const are block variable and it can't be access outer block
    console.log(blockConst); 
}

myFunction();

console.log(globalVar);
console.log(globalLet);
console.log(globalConst);


console.log(functionVar); // these three variable also won't run because these are all function variable and can't be accesed outside of the function
console.log(functionLet);
console.log(functionConst);

console.log(blockVar); // it also won't run 