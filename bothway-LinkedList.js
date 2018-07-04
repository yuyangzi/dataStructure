// 双向链表

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.previous = null;
    }
}

class LinkedList {
    constructor() {
        this.first = null; // head/root element
        this.last = null; // last element of the list
        this.size = 0; // total number of elements in the list
    }

    addFirst(value) {
        const node = new Node(value);
        node.next = this.first;
        if (this.first) {
            this.first.previous = node;
        } else {
            this.last = node;
        }
        this.first = node; // update head
        this.size++;
        return node;
    }

    removeFirst() {
        const first = this.first;
        if (first) {
            this.first = first.next;
            if (this.first) {
                this.first.previous = null;
            }
            this.size--;
            return first.value;
        } else {
            this.last = null;
        }
    }

    addLast(value) {
        const node = new Node(value);
        if (this.first) {
            node.previous = this.last;
            this.last.next = node;
            this.last = node;
        } else {
            this.first = node;
            this.last = node;
        }
        this.size++;
        return node;
    }

    removeLast() {
        let current = this.first;
        let target;
        if(current && current.next) {
            target = this.last;
            current = target.previous;
            this.last = current;
            current.next = null;
        } else {
            this.first = null;
            this.last = null;
            target = current;
        }
        if(target) {
            this.size--;
            return target.value;
        }
    }

    add(value, index = 0) {
        if(index === 0) {
            return this.addFirst(value);
        }
        for (let current = this.first, i = 0; i <= this.size;  i++, current = (current && current.next)) {
            if(i === index) {
                if(i === this.size) { // if it doesn't have next it means that it is the last
                    return this.addLast(value);
                }
                const newNode = new Node(value);
                newNode.previous = current.previous;
                newNode.next = current;
                current.previous.next = newNode;
                if(current.next) { current.next.previous = newNode; }
                this.size++;
                return newNode;
            }
        }
    }
}