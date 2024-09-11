class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

/* QUEUE IS FOLLOWING FIRST IN FIRST OUT (FIFO) */
/* EXAMPLE IS NUMBER OF PERSON STANDING ON A QUEUE */
class Queue {
    constructor(value) {
        let newNode = new Node(value);
        this.first = newNode;
        this.last = newNode;
        this.length = 1;
    }

    // ENQUEUE
    enqueue(value) {
        const newNode = newNode(value);
        if(this.length === 0) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        this.length++;
    }

    // DEQUEUE
    dequeue() {
        if(this.length === 0) {
            return;
        }
        let temp = this.first;
        if(this.length === 1) {
            this.first = null;
            this.last = null;
        } else {
            this.first = this.first.next;
            temp.next = null;
        }
        this.length--;
        return temp;
    }
}

let newPerson = new Queue(10);
console.log(newPerson.first);
newPerson.dequeue();