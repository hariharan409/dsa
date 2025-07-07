/**
 * @param {string} s
 * @return {string[]}
 */
const findRepeatedDnaSequences = function(s) {
    let repeatedSeq = new Set();
    let tempList = new Set();
    let i = 0;

    while(i < s.length - 9) {
        let temp = s.slice(i, i+10);
        if(tempList.has(temp)) repeatedSeq.add(temp);
        tempList.add(temp);
        i++; 
    }
    return [...repeatedSeq];
};

console.log(findRepeatedDnaSequences(s = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"));

