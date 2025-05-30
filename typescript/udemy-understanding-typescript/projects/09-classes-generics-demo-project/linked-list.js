"use strict";
class ListNode {
    value;
    next;
    constructor(value) {
        this.value = value;
    }
}
class LinkedList {
    root;
    tail;
    length = 0;
    add(value) {
        const node = new ListNode(value);
        if (!this.root || !this.tail) {
            this.root = node;
            this.tail = node;
        }
        else {
            this.tail.next = node;
            this.tail = node;
        }
        this.length++;
    }
    getMumberOfElements() {
        return this.length;
    }
    printList() {
        let current = this.root;
        while (current) {
            console.log(current.value);
            current = current.next;
        }
    }
}
const numberList = new LinkedList();
numberList.add(10);
numberList.add(5);
numberList.add(-3);
console.log(numberList.getMumberOfElements());
numberList.printList();
const nameList = new LinkedList();
