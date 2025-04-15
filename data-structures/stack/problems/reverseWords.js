
/**
 * 
 * @param {String} str 
 */
const reverseWords = (str) => {
    // approach 1
    // let strArr = str.split(" ");
    // let reverseArr = strArr.reverse();
    // let joinedStr = reverseArr.join(" ");
    // return joinedStr;

    // approach 2
    // let strArr = str.split(" ");
    // let firstPointer = 0;
    // let secondPointer = strArr.length - 1;
    // while(firstPointer < secondPointer) {
    //     let temp = strArr[firstPointer];
    //     strArr[firstPointer] = strArr[secondPointer];
    //     strArr[secondPointer] = temp;
    //     firstPointer++;
    //     secondPointer--;
    // }
    // let joinedStr = strArr.join(" ");
    // console.log(joinedStr);
}

reverseWords(str = "i love essaki saravanan muthu & mani gandhi"); 