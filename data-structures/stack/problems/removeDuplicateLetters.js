
/**
 * 
 * @param {String} s 
 */
const removeDuplicateLetters = (s) => {
    let sSet = new Set(s);
    return [...sSet].sort().join('');
}

console.log(removeDuplicateLetters(s = "bcabc"));