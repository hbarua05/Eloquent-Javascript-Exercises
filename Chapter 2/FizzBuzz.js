for (var i = 1; i <= 100; i++) {
    result = "";
    if (i % 3 == 0) result += "Fizz"; //Checks if divisible by 3//
    if (i % 5 == 0) result += "Buzz"; //Checks if divisible by 5//
    // If divisible by 3 || 5 prints word//
    if (result != "") console.log(result);
    else console.log(i); //Else prints out the number//
}
