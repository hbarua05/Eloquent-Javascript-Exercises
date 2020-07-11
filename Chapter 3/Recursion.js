function isEven(value) {
    let num = value;
    // Make the number positive first if negative
    if (num < 0) {
        num *= -1;
    }
    // Checks if value is 0
    if (num == 0) return true;
    // Checks if value is 1
    else if (num == 1) return false;
    // Checks if number 2 less than the given value is even
    else return isEven(num - 2);
}
