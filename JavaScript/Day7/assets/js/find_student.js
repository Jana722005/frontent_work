let student = [
    {
        name : "jana",
        age : 21,
        course : "Full Stack",
        mark : 60
    },

    {
        name : "manoj",
        age : 21,
        course : "Full Stack",
        mark : 70
    },

    {
        name : "abhi",
        age : 21,
        course : "AIML",
        mark : 90
    }
]

let target = "manoj"

for(let i = 0; i < student.length; i++){
    if(student[i].name === target){
        console.log("Name : " + student[i].name);
        console.log("Mark : " + student[i].mark);
    }
}