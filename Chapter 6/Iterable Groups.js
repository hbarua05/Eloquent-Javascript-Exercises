class Group {
    // Every group has an entries array
    constructor() {
        this.entries = [];
    }

    /* A static method which allows to make Group object
    from an iterable object.*/
    static from(iterObj) {
        // First create a Group object
        let group = new Group();
        /* For every element in the iterObj add it to the 
        Group Object and return it*/
        for (let element of iterObj) {
            group.add(element);
        }
        return group;
    }

    add(num) {
        /* Check if num exists in the entries array, if not,
        push the num to the entries */
        if (!this.has(num)) this.entries.push(num);
    }

    delete(num) {
        if (this.has(num)) this.entries.splice(this.entries.indexOf(num), 1);
    }

    has(num) {
        // If num doesnt exist, indexOf will return -1
        return !(this.entries.indexOf(num) === -1);
    }

    // This is done in order for the Group object to be iterable
    [Symbol.iterator]() {
        // Return an iterator object
        return new GroupIterator(this);
    }
}

// The blueprint for the iterator object
class GroupIterator {
    // obj is the Group object and is the parameter
    constructor(obj) {
        // The entries of the Group object saved in array instance variable
        this.array = obj.entries;
        // The current position in the entries array is saved in n instance variable
        this.n = 0;
    }

    next() {
        length = this.array.length;
        /* If current position smaller than length of entries array then value will be current value
        and done will be false */
        if (this.n < length) {
            let object = { value: this.array[this.n], done: false };
            this.n++;
            return object;
        }
        /* Once all the elements in the entries array has been traversed, value will be undefined
        and done will be true */
        return { value: undefined, done: true };
    }
}
