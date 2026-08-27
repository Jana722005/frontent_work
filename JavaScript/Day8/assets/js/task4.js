
let student = () => {

    let obj = [
        {
            name : "jana",
            mark : 60
        },

        {
            name : "manoj",
            mark : 75
        },

        {
            name : "abhi",
            mark : 85
        }
    ]


    for(let i = 0; i < obj.length; i++){

        if(obj[i].mark > 80){

            console.log(obj[i].name);
            
        }
    }
}

student()