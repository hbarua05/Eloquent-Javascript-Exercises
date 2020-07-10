var size = 8; //Size of the board //
var board = "";
//Here i = row number and j = column number //
for (var i = 1; i <= size; i++) {
    for (var j = 1; j <= size; j++) {
        // When row number is odd //
        if (i % 2 != 0) {
            // If column is odd //
            if (j % 2 != 0) {
                board += " ";
                // If column is even //
            } else {
                board += "#";
            }
            // When row number is even //
        } else {
            // If column if odd //
            if (j % 2 != 0) {
                board += "#";
                // If column if even //
            } else {
                board += " ";
            }
        }
    }
    // Adding newline after every row //
    board += "\n";
}
console.log(board);
