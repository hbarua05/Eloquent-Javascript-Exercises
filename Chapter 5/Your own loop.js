function loop(value, test, update, body) {
    for (let start = value; test(start); start = update(start)) {
        body(start);
    }
}

/* This is the recursive version of the loop function
function loop(value, test, update, body) {
    if (test(value)) {
        body(value)
        let newvalue = update(value);
        loop(newvalue, test, update, body);
    }
}
*/
