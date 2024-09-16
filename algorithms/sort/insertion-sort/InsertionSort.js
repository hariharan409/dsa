

const insertionSort = (array) => {
    // ALWAYS START FROM 2ND ITEM
    for(let i=1;i<array.length;i++) {
        let temp = array[i];
        for(var j=i-1;array[j] > temp && j>-1;j--) {
            array[j+1] = array[j];
        }
        array[j+1] = temp;
    }
    return array;
}

console.log(insertionSort([3,5,4,1,2]));