// The every function with a for loop
function every(array, test) {
    for (let element of array) {
        if (!test(element)) return false;
    }
    return true;
}

// The every function with some function
function every(array, test) {
    return !array.some((element) => !test(element));
}
/* Explanation: 
The "some" function doesnt do anything with false unless it has reached the end. But since we want to return false as soon as we find one, we change the false to true with the inner "!" to make sure the "some" function returns and then change the true back to false with the outer "!"*/
