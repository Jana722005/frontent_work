let Data = new Promise((resolve,reject)=> {
    let DataValue = 120

    if(DataValue >= 100)
        setTimeout(resolve,1000,"Data Loaded")
    else
        setTimeout(reject,2000,"Data not Loaded")
})

Data.then((msg) => console.log(`using .then() : ${msg}`))
.catch((mgs) => console.log(mgs))

async function asyncstatus() {
    
    try{
        result = await Data
        console.log(`using async/await : ${result}`);
    }
    catch(error){
        console.log(`using async/await : ${error}`);
    }
}

asyncstatus()