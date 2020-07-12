function reverseArray(arr) {
    let array;
    for (let item of arr) {
        array.unshift(item);
    }
    return array;
}

function reverseArrayInPlace(arr) {
    for (let i = 0; i < Math.floor(arr.length / 2); i++) {
        let temp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp;
    }
}
