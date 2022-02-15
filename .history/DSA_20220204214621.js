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
// const isUnique = (str) => {
// let set = new Set();
// for(let i = 0; i < str.length; i++){
//     if(set.has(str[i])){
//         return false;
//     } else {
//         set.add(str[i])
//     }
// }
// return true;
// }
// const longestSubString = (string) => {
//     //create a maxCounter && currentMaxCounter
//     let max = 0;

//     for(let i = 0; i < string.length; i++){
//         for(let k = i+1; k < string.length;k++){
//             let subString = string.substring(i, k)
//             if(isUnique(subString)){
//                 max = Math.max(max, subString.length)
//             }
//         }
//     }
//     return max;
// }

// function spreadCenter(str, left, right){
//     let i = 0;
//     while(str[left-i] && str[left-i] == str[right+i]){
//         i++
//     }
//      i--;
//      return str.slice(left-i, right+i+1)
//  }



//  var longestPalindrome = function(s) {
//     if(s.split("").reverse().join() === s) return s;
//      let longest = "";
//      for(let i = 0; i < s.length; i++){
//      let oddPalindrome = spreadCenter(s, i, i);
//      let evenPalindrome = spreadCenter(s, i-1, i);
//      if(oddPalindrome.length > longest.length){
//          longest = oddPalindrome
//      }
//      if(evenPalindrome.length > longest.length){
//          longest = evenPalindrome
//      }
//  }
//  return longest;
//  };


//find the max sum of every other number in array
// const houseRobber = (nums) => {
//     let table = Array(nums.length).fill(0)

//     for(let i = 0; i < nums.length; i++){
//         if(i === 0){
//             table[i] = nums[i];
//             continue;
//         }
//         if(i === 1){
//             table[i] = Math.max(nums[i], nums[i-1])
//             continue;
//         }
//         table[i] = Math.max(nums[i] + table[i-2], table[i-1])
//     }
//     return table.pop()
// };
// table =   [1,2,5,5,6,6]



// function binarySearch (low, high, int) {
//     console.log(low, high)
//     if(low === int || high === int) return true;

//     let mid = Math.floor((high-low) / 2 + low)
//     if(mid < int){
//         low = mid;
//         binarySearch(low, high, int)
//     } else if (mid > int) {
//         high = mid;
//         binarySearch(low, high, int)
//     } else {
//         return false;
//     }
// }
// function binarySearchArray(array, target) {
//     var mid = Math.floor(array.length/2);
//     console.log(array[mid])
//     if(array[mid] == target) return true;
//     if(array[mid] > target){
//         binarySearchArray(array.slice(0, mid), target)
//     }
//     if (array[mid] < target){
//         binarySearchArray(array.slice(mid), target)
//     }
//     return false;
// }

// function getDivisorsCnt(n){
//     let counter = 0;
//     if(n === 0) return 0;
//     if(n === 1) return 1;
//     for(let i = 0; i <= n; i++){

//         if(n % i === 0){
//             console.log(i)
//           counter+=1
//         }
//       }
//     return counter;
//   }
// const quickSort = (array) => {
// if(array.length <= 1) return array;
// let pivot = array[0];
// let left = []
// let right= []
// for(let i = 1; i < array.length; i++){
//     let currentNum = array[i];
//     if(pivot >= currentNum){
//         left.push(currentNum)
//     }
//     if(pivot <= currentNum){
//         right.push(currentNum)
//     }
// }
// return quickSort(left).concat(pivot, quickSort(right))
// }

// let array = ["proclamation", "product", "problem"]
// const longestPreFix = (array) =>{
//     if(!array <= 1){
//         return array;
//     }
//     if(array.length > 2){
//         console.log("true");
//     }
//     return false;
// let longestPreFix = "";
// let longestWord = "";


// for(let i = 0; i < array.length; i++){
//     let curr = array[i];
//     longestWord += curr;
// }
// return longestWord
// };

// s = "foobar", t = "barfoot", return 't'
// s = "ide", t = "idea", return 'a'
// s = "coding", t "ingcod", return ''

// function addedLetters(s, t) {
//     let copy = t;
//     if (s.length === t.length) return " ";
//     //iterate through s, if t.includes(s[i]), replace that letter in t with nothing
//     //return t
//     for(let i = 0; i < s.length; i++){
//         if(copy.includes(s[i])){
//             copy.replace(s[i], "")
//         }
//     }
//     return copy;
// }

// let func = () => {
//     let s = "foobar";
//     let t = "barefoot";
//     return addedLetters(s, t)
// }
//return words that are not common between the two strings
// sentence1 = "the quick", sentence2 = "brown fox", return ["the", "quick", "brown", "fox"]
// sentence1 = "the tortoise beat the haire", sentence2 = "the tortoise lost to the haire", return ["beat", "to", "lost"]
// sentence1 = "copper coffee pot", sentence2 = "hot coffee pot", return ["copper", "hot"]

var longest = (a, b) => {
        return a.length > b.length ? a : b;
    };


function commonWord(aString, bString) {
    if(!aString.length) {
        return bString
    } else if(!bString.length) {
        return aString
    }
    let a = aString.split(" ")
    let b = bString.split(" ")
    let maxChars = Math.max(a.length, b.length)
    let result = [];

    for(let i = 0; i < maxChars.length; i++){
        let aWord = a[i];
        let bWord = b[i];
        console.log(a)
        if(b.includes(aWord)){
            a.replace(aWord, "");
            b.replace(aWord, "");
            console.log(a)
        }
        if(a.includes(bWord)){
            a.replace(bWord, "");
            b.replace(bWord, "");
            console.log(b)
        }
    }


    //iterate up to longest str count, each iter, str1[iter] == str2[iter] ?
}

console.log(commonWord("the tortoise beat the haire","the tortoise lost to the haire" ))
