
const bubbleSort = (array) => {
    for(let i=array.length - 1;i>0;i--) {
        for(let j=0;j<i;j++) {
            if(array[j] > array[j+1]) {
                let temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
            }
        }
    }
    return array;
}

let sortedArray = bubbleSort([3,5,4,1,2]);
console.log(sortedArray);