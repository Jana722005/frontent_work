let text = "javascript"

let target = "s"

for(let i = text.length; i>=0; i--){
    if(text[i] == target){
        console.log("Character Found : " + text[i]);
        break
    }
}