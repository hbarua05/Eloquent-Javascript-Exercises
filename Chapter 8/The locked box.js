const box = {
    locked: true,
    unlock() {
        this.locked = false;
    },
    lock() {
        this.locked = true;
    },
    _content: [],
    get content() {
        if (this.locked) throw new Error("Locked!");
        return this._content;
    },
};

function withBoxUnlocked(body) {
    // Checks if box is unlocked
    if (box.locked) {
        // Unlocks box first
        box.unlock();
        // Executes body function
        try {
            return body();
            // Makes sure to lock the box back
        } finally {
            box.lock();
        }
        // If box was already unlocked
    } else {
        // Executes body function
        return body();
        // The box is not locked back
    }
}
