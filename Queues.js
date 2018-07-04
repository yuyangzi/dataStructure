const LinkedList = require('./bothway-LinkedList');


class Queue {
    constructor() {
        this.input = [];
        this.output = [];
    }

    add(element) {
        this.input.push(element);
    }

    remove() {
        if (!this.output.length) {
            while (this.input.length) {
                this.output.push(this.input.pop());
            }
        }
        return this.output.pop();
    }
}

class LinkedListQueue {
    constructor() {
        this.input = new LinkedList();
    }
    add(element) {
        this.input.addFirst(element);
    }
    remove() {
        return this.input.removeLast();
    }
    get size() {
        return this.input.size;
    }
}