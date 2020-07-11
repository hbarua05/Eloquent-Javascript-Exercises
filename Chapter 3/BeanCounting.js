function countBs(word) {
    // Finds the number of capital B's
    return countChar(word, "B");
}

function countChar(word, letter) {
    let len = word.length,
        counter = 0;
    // For loop checks every letter of the word
    for (let i = 0; i < len; i++) {
        // If matching letter then counter increased
        if (word[i] === letter) counter++;
    }
    return counter;
}
