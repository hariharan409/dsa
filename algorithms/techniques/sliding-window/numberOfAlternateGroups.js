/**
 * @param {number[]} colors
 * @return {number}
 */
var numberOfAlternatingGroups = function(colors) {
    let alternateGroup = 0;
    let n = colors.length;

    for(let i=0;i<n;i++) {
        let prev = colors[(i - 1 + n) % n]; // Circular previous index
        let next = colors[(i + 1) % n];     // Circular next index
        let curr = colors[i];

        if(curr !== prev && curr !== next) {
            alternateGroup++;
        }

    }
    return alternateGroup;
};