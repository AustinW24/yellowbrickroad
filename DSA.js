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
function binarySearchArray(array, target) {
    var mid = Math.floor(array.length/2);
    console.log(array[mid])
    if(array[mid] === target) {
        return true;
    }
    if(array[mid] > target){
        binarySearchArray(array.slice(0, mid))
    }
    if (array[mid] < target){
        binarySearchArray(array.slice(mid))
    }
    return false;
}
console.log(binarySearchArray([3, 12, 14, 15, 20, 22, 30], 12))
                            // table =   [1,2,5,5,6,6]
