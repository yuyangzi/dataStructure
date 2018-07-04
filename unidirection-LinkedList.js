// 单向链表

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class UnidirectionLinkedList {
    constructor() {
        this.root = null;
    }

    addLast(value) { // similar Array.push
        const node = new Node(value);
        if (this.root) {
            let currentNode = this.root;
            while (currentNode && currentNode.next) {
                currentNode = currentNode.next;
            }
            currentNode.next = node;
        } else {
            this.root = node;
        }
    }

    removeLast() {
        let current = this.root;
        let target;
        if (current && current.next) {
            while (current && current.next && current.next.next) {
                current = current.next;
            }
            target = current.next;
            current.next = null;
        } else {
            this.root = null;
            target = current;
        }
        if (target) {
            return target.value;
        }
    }

    addFirst(value) {
        const node = new Node(value);
        node.next = this.root;
        this.root = node;
    }

    removeFirst(value) {
        const target = this.root;
        this.root = target ? target.next : null;
        return target.value;
    }

    remove(index = 0) {
        if (index === 0) {
            return this.removeFirst();
        }
        let current;
        let target = this.root;
        for (let i = 0; target; i++, current = target, target = target.next) {
            if (i === index) {
                if (!target.next) { // if it doesn't have next it means that it is the last
                    return this.removeLast();
                }
                current.next = target.next;
                this.size--;
                return target.value;
            }
        }
    }

    contains(value) {
        for (let current = this.root, index = 0; current; index++, current = current.next) {
            if (current.value === value) {
                return index;
            }
        }
    }
}