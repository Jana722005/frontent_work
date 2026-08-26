let employee = [
    {
        name : "jana",
        age : 21,
        salary : 15000
    },

    {
        name : "manoj",
        age : 21,
        salary : 35000
    },

    {
        name : "abhi",
        age : 21,
        salary : 45000
    }
]

let target = 40000

for(let i = 0; i < employee.length; i++){
    if(employee[i].salary > target){
        console.log(employee[i]);
    }
}