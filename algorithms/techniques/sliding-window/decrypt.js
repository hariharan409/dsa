
/**
 * @param {number[]} code
 * @param {number} k
 * @return {number[]}
 */
var decrypt = function(code, k) {
    const codeLength = code.length;
    const result = new Array(codeLength).fill(0);
    if(k !== 0) {
        // if k > 0
        if(k > 0) {
            for(let i=0;i<codeLength;i++) {
                let total = 0;
                for(let j=1;j<=k;j++) {
                    total += code[(i + j) % codeLength];
                }
                result[i] = total;
            }
        }
        // if k < 0
        if(k < 0) {
            k = Math.abs(k);
            for(let i=0;i<codeLength;i++) {
                let total = 0;
                for(let j=1;j<=k;j++) {
                    total += code[(codeLength + (i - j)) % codeLength];
                }
                result[i] = total;
            }
        }

    }
    return result;
};

// another solution
function decryptCode(code, k) {
    let n = code.length;
    let result = new Array(n).fill(0);
    
    if (k === 0) return result;
    
    let direction = k > 0 ? 1 : -1;
    let absK = Math.abs(k);
    
    for (let i = 0; i < n; i++) {
        let sum = 0;
        for (let j = 1; j <= absK; j++) {
            let index = (i + direction * j + n) % n;
            sum += code[index];
        }
        result[i] = sum;
    }
    
    return result;
}

// Example test cases
console.log(decryptCode([5,7,1,4], 3)); // Output: [12,10,16,13]
console.log(decryptCode([1,2,3,4], 0)); // Output: [0,0,0,0]
console.log(decryptCode([2,4,9,3], -2)); // Output: [12,5,6,13]
