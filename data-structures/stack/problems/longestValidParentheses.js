
/**
 * 
 * @param {String} s 
 */
const longestValidParentheses = (s) => {
    let maxLen = 0;
    let stack = [-1]; // Initialize with -1 as a base for the first valid substring

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            stack.push(i); // Push index of '('
        } else {
            stack.pop(); // Pop the last '(' index (or base)
            if (stack.length === 0) {
                stack.push(i); // New base for next potential valid substring
            } else {
                maxLen = Math.max(maxLen, i - stack[stack.length - 1]);
            }
        }
    }

    return maxLen;
}

console.log(longestValidParentheses(s = ")()())"));