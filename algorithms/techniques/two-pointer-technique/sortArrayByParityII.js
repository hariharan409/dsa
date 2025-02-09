/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParityII = function(nums) {
    let evenIndex = 0;
    let oddIndex = 1;
    let result = new Array(nums.length);

    for(let num of nums) {
        if(num % 2 === 0) {
            result[evenIndex] = num;
            evenIndex += 2;
        } else {
            result[oddIndex] = num;
            oddIndex += 2;
        }
    }
    return result;
};