// "c" then "a" then "r" or "t"
verify(/ca[rt]/, ["my car", "bad cats"], ["camper", "high art"]);
// "p" then "r"(optional) then "o" then "p"
verify(/pr?op/, ["pop culture", "mad props"], ["plop", "prrrop"]);
// "ferr" then either of "et" or "y" ir "ari"
verify(
    /ferr(?:et|y|ari)/,
    ["ferret", "ferry", "ferrari"],
    ["ferrum", "transfer A"]
);
// word chars followed by "ious" and then a word boundary
verify(
    /\w+ious\b/,
    ["how delicious", "spacious room"],
    ["ruinous", "consciousness"]
);
// space char followed by either of "." or "," or ":" or ";"
verify(/\s[.,:;]/, ["bad punctuation ."], ["escape the period"]);
// find 6 or more consecutive word chars
verify(/^\w{6,}$/, ["hottentottententen"], ["no", "hotten totten tenten"]);
/* word boundary then find one or more word chars that arent "e" or "E" or a whitespace char*/
verify(
    /\b[^eE\s]+\b/,
    ["red platypus", "wobbling nest"],
    ["earth bed", "learning ape", "BEET"]
);
// Given function for testing in the starter code
function verify(regexp, yes, no) {
    // Ignore unfinished exercises
    if (regexp.source == "...") return;
    for (let str of yes)
        if (!regexp.test(str)) {
            console.log(`Failure to match '${str}'`);
        }
    for (let str of no)
        if (regexp.test(str)) {
            console.log(`Unexpected match for '${str}'`);
        }
}
