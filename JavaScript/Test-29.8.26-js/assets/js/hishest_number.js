const arr = [45, 12, 89, 34, 67, 90, 23]

let a = arr[0]

for(let i = 1; i <= arr.length; i++){

    if(arr[i] > a){
        a = arr[i]
    }
}

console.log(a);
