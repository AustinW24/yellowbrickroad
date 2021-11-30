function isBalanced(someString){
    if(someString[0] != "(") return false;
    if(!someString.length) return true;
    let stack = [];
    for(let i = 0; i < someString.length; i++){
        if(someString[i] == "("){
            stack.push(someString[i])
        } else if(someString[i] == ")"){
            stack.pop()
        }
    }
    if(!stack.length) {
        return true;
    } else {
        return false;
    }
}
console.log(isBalanced("(a(()b))"))
