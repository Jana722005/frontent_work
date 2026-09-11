const user = {
    name: "Ravi"
};

console.log(`using Optional Chaining : ${user.address?.city}`);

console.log(`using Null Coalescing : ${user.address?.city?? "city Not Available"}`);

