
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// sliding window technique
var minimumDifference = function(nums, k) {
    if(nums.length === 1) return 0;
    nums.sort((a,b) => a - b);
    let minDiff = Infinity;
    
    for(let i=0;i<=nums.length - k;i++) {
        minDiff = Math.min(minDiff,nums[i+k-1] - nums[i]);
    }
    return minDiff;
};

console.log(minimumDifference(nums = [87063,61094,44530,21297,95857,93551,9918], k = 6));