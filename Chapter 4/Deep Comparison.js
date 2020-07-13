function deepEqual(val1, val2) {
    // Checks for both objects and so that none are null
    if (
        typeof val1 == "object" &&
        typeof val2 == "object" &&
        (val1 != null) & (val2 != null)
    ) {
        // Gets keys of each object as an array
        let keys1 = Object.keys(val1),
            keys2 = Object.keys(val2);
        // Checks for the same number of keys in both objects
        if (keys1.length == keys2.length) {
            // Checks if both objects are empty
            if (keys1.length == 0) return true;
            // Iterating through every key
            for (let i = 0; i < keys2.length; i++) {
                // Checks if the keys are equal in both objects
                if (keys1[i] == keys2[i]) {
                    // A recursive call on the values of each key in the objects
                    return deepEqual(val1[keys1[i]], val2[keys2[i]]);
                } else {
                    return false;
                }
            }
        } else return false;
        // If not objects. check if both are strictly equal
        // THIS IS THE BASE CASE
    } else {
        return val1 === val2;
    }
}
