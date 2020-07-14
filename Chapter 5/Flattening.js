var arrays = [[1, 2, 3], [4, 5], [6]];

let ans = arrays.reduce((acc, val) => acc.concat(val), []);
console.log(ans);

/* The above code is the same as doing the following: 
let acc = [],
function flatten(arrays) {
    for (let subarray of arrays) {
        acc.concat(subarray)
    }
    return acc;
}
console.log(flatten(arrays))
*/
