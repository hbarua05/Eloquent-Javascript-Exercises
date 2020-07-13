function arrayToList(arr) {
    let list = {};
    for (let item of arr) {
        // If object has no elements
        if (!("value" in list)) {
            list.value = item;
            list.rest = null;
        } else {
            // Creates a temporary pointer to list
            let temp = list;
            // Goes through list until end is found
            while (temp.rest != null) {
                temp = temp.rest;
            }
            // Links the end to another element
            temp.rest = { value: item, rest: null };
        }
    }
    return list;
}

function listToArray(list) {
    // Create temp pointer to list and create empty array
    let temp = list,
        arr = [];
    // Goes to every element in list
    while (temp.rest != null) {
        // Pushes the element value to list
        arr.push(temp.value);
        temp = temp.rest;
    }
    // Push the last element value to list
    arr.push(temp.value);
    return arr;
}

function prepend(value, rest) {
    return { value: value, rest: rest };
}

function nth(list, n) {
    let temp = list,
        counter = 0;
    // Goes through elements until counter == n or till end of list
    while (temp.rest != null && counter < n) {
        temp = temp.rest;
        counter++;
    }
    // Returns value only if counter matches n
    if (counter == n) {
        return temp.value;
    } else {
        return undefined;
    }
}

function nthRecursive(list, n) {
    let temp = list,
        counter = 0;
    // Checks if list is null
    if (!temp) {
        return undefined;
        // Returns value only if counter matches n
    } else if (counter == n) {
        return temp.value;
    } else {
        return nthRecursive(temp.rest, n - 1);
    }
}
