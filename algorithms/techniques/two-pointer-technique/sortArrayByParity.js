/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
    if(nums.length === 0) return nums;
    let leftPointer = 0;
    let rightPointer = nums.length - 1;

    while(leftPointer < rightPointer) {
        if(nums[leftPointer] % 2 === 0) {
            leftPointer++;
            continue;
        }
        if(nums[rightPointer] % 2 !== 0) {
            rightPointer--;
            continue;
        }
        let temp = nums[leftPointer];
        nums[leftPointer] = nums[rightPointer];
        nums[rightPointer] = temp;
        leftPointer++;
        rightPointer--;
    }
    return nums;
};

console.log(sortArrayByParity(nums = [3,1,2,4]));