// function isBalanced(someString){
//     if(someString[0] != "(") return false;
//     if(!someString.length) return true;
//     let stack = [];
//     for(let i = 0; i < someString.length; i++){
//         if(someString[i] == "("){
//             stack.push(someString[i])
//         } else if(someString[i] == ")"){
//             stack.pop()
//         }
//     }
//     if(!stack.length) {
//         return true;
//     } else {
//         return false;
//     }
// }
const isUnique = (str) => {
let set = new Set();
for(let i = 0; i < str.length; i++){
    if(set.has(str[i])){
        return false;
    } else {
        set.add(str[i])
    }
}
return true;
}
const longestSubString = (string) => {
    //create a maxCounter && currentMaxCounter
    let max = 0;

    for(let i = 0; i < string.length; i++){
        for(let k = i+1; k < string.length;k++){
            let subString = string.substring(i, k)
            if(isUnique(subString)){
                max = Math.max(max, subString.length)
            }
        }
    }
    return max;
}


console.log(longestSubString("bbabcbcadbb"))
