
/**
 * 
 * @param {Number[]} subArray 
 * @param {Number} k 
 */
const findLongestSubArray = (subArray,k) => {
    if (subArray.length < k) {
        throw new Error("Subarray size k cannot be larger than the input array length.");
    }

    let maxSum = 0;
    let currentSum = 0;

    // Calculate the sum of the first 'k' elements
    for (let i = 0; i < k; i++) {
        currentSum += subArray[i];
    }

    maxSum  = currentSum;

    // Use sliding window technique for the rest of the array
    for (let i = k; i < subArray.length; i++) {
        // Subtract the element that is sliding out of the window.
        // Add the element that is sliding into the window.
        currentSum = currentSum - subArray[i - k] + subArray[i];
        maxSum = Math.max(maxSum, currentSum);
    }
    
    return maxSum;
}

console.log(findLongestSubArray(subArray = [1,5,7,6,-1,5,3],k=3));