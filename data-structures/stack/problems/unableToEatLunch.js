// 1700. Number of Students Unable to Eat Lunch
/**
 * 
 * @param {Number[]} students 
 * @param {Number[]} sandwiches 
 */
const unableToEatLunch = (students,sandwiches) => {
    let unableToEatCount=0;
    
    while(unableToEatCount < students.length) {
        if(students[0] === sandwiches[0]) {
            students.shift();
            sandwiches.shift();
            unableToEatCount=0;
        } else {
            let firstStudent = students.shift();
            students.push(firstStudent);
            unableToEatCount++;
        }
    }
    return students.length;
}



console.log(unableToEatLunch(students = [1,1,1,0,0,1], sandwiches = [1,0,0,0,1,1]));