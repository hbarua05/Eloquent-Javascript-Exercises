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
}
