class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
/* STACK IS ONE OF THE DATA STRUCTURE WHICH FOLLOWS LAST IN FIRST OUT (LIFO). */
class Stack {
    constructor(value) {
        const newNode = new Node(value);
        this.top = newNode;
        this.length = 1;
    }

    push(value) {
        const newNode = new Node(value);
        if(this.length === 0) {
            this.top = newNode;
        } else {
            newNode.next = this.top;
            this.top = newNode;
        }
        this.length++;
        return this;
    }

    pop() {
        if(this.length === 0) {
            return;
        }
        let temp = this.top;
        this.top = this.top.next;
        temp.next = null;
        this.length--;
        return temp;
    }
}