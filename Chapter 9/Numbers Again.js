// Regex looks for these in the following order:
// => First looks for an optional negative or positive sign
// => Then, looks for a valid digit without exponentiation:
//    ==> Looks for numbers like "1.3", "3.", "5" OR*/
//    ==> Looks for numbers like ".6"
// => Next, exponentiation which is optional is checked for, where:
//    ==> The letter e is checked for and is case insensitive
//    ==> an optional - or + sign is checked for
//    ==> lastly, an exponent is looked for

let number = /^[-+]?(?:(?:\d+[.]?\d*)|(?:\d*[.]\d+))(?:[eE][-+]?\d+)?$/;

// Provided in starting code
// Tests:
for (let str of [
    "1",
    "-1",
    "+15",
    "1.55",
    ".5",
    "5.",
    "1.3e2",
    "1E-4",
    "1e+12",
]) {
    if (!number.test(str)) {
        console.log(`Failed to match '${str}'`);
    }
}
for (let str of ["1a", "+-1", "1.2.3", "1+1", "1e4.5", ".5.", "1f5", "."]) {
    if (number.test(str)) {
        console.log(`Incorrectly accepted '${str}'`);
    }
}
