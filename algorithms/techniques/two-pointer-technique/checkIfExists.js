/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function(arr) {
    let seen = new Set();
    
    for (let num of arr) {
        // Check if double or half (if divisible by 2) of current number exists in the set
        if (seen.has(num * 2) || (num % 2 === 0 && seen.has(num / 2))) {
            return true;
        }
        // Add current number to the set
        seen.add(num);
    }
    
    return false;
};