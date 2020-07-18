class MultiplicatorUnitFailure extends Error {}

function primitiveMultiply(a, b) {
    if (Math.random() < 0.2) {
        return a * b;
    } else {
        throw new MultiplicatorUnitFailure("Klunk");
    }
}

function reliableMultiply(a, b) {
    // Your code here.
    try {
        return primitiveMultiply(a, b);
    } catch (e) {
        /* If error due to MultiplicatorUnitFailure,
        then a recursive call is done. 
        So, it calls itself until primitiveMultiply returns a number
        */
        if (e instanceof MultiplicatorUnitFailure) {
            return reliableMultiply(a, b);
        } else {
            // If error not caused by what we thought, that error is passed through.
            throw e;
        }
    }
}
