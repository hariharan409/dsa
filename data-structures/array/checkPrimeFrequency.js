
const isPrime = (n) => {
    if(n <= 1) return false;

    for(let i=2;i<Math.sqrt(n);i++) {
        if (n % i === 0) return false;
    }

    return true;
}

/**
 * @param {number[]} nums
 * @return {boolean}
 */
const checkPrimeFrequency = function(nums) {
    let frequencyMap = {};
    for(const num of nums) {
        frequencyMap[num] = (frequencyMap[num] || 0) + 1;
    } 

    for(const freq in frequencyMap) {
        if(frequencyMap[freq] > 1) {
            const result = isPrime(frequencyMap[freq]);
            if(result) return true;
        }
    }

    return false;
};

console.log(checkPrimeFrequency(nums = [1,2,3,4,5,4]));