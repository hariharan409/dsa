
/**
 * 
 * @param {String} word 
 */
const sentenceCapitalization = (word) => {
    let wordList = word.toLowerCase().split(" ");
    for(let i=0;i<wordList.length;i++) {
        wordList[i] = wordList[i][0].toUpperCase() + wordList[i].slice(1);
    }
    return wordList.join(" ");
}

console.log(sentenceCapitalization("hi hari"));