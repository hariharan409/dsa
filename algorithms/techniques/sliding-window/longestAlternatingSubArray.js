/**
 * @param {number[]} nums
 * @param {number} threshold
 * @return {number}
 */
var longestAlternatingSubarray = function(nums, threshold) {
    let longestSubArr = 0;
    let tempCount = 0;
    let i = 0;

    while (i < nums.length) {
        if (nums[i] % 2 === 0 && nums[i] <= threshold) {
            tempCount = 1; // Start a new valid subarray
            let j = i + 1;
            
            while (j < nums.length && nums[j] <= threshold && (nums[j] % 2 !== nums[j - 1] % 2)) {
                tempCount++;
                j++;
            }
            
            longestSubArr = Math.max(longestSubArr, tempCount);
        }
        i++;
    }
    
    return longestSubArr;
};