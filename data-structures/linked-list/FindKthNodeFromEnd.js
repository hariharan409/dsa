class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
 
class LinkedList {
    constructor(value) {
        const newNode = new Node(value);
        this.head = newNode;
        this.tail = this.head;
    }

    printList() {
        let temp = this.head;
        while (temp !== null) {
            console.log(temp.value);
            temp = temp.next;
        }
    }

    getHead() {
        if (this.head === null) {
            console.log("Head: null");
        } else {
            console.log("Head: " + this.head.value);
        }
    }

    getTail() {
        if (this.tail === null) {
            console.log("Tail: null");
        } else {
            console.log("Tail: " + this.tail.value);
        }
    }

    makeEmpty() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
 
    push(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }
    /* To find the Kth node from the end in a linked list, you can use the two-pointer (or fast and slow pointer) technique. Here's the approach:

    Initialize Two Pointers: Start by initializing two pointers, both pointing to the head of the linked list.

    Move the First Pointer: Move the first pointer K nodes ahead in the list.

    Move Both Pointers: Once the first pointer is K nodes ahead, start moving both pointers one node at a time.

    Stop When the First Pointer Reaches the End: When the first pointer reaches the end of the linked list, the second pointer will be pointing at the Kth node from the end.

    This approach works in O(N) time complexity with O(1) space complexity, where N is the number of nodes in the linked list. */
    findKthFromEnd(k) {
        let firstPointer = null;
        let secondPointer = this.head;
        if(k <= 0) {
            return null;
        }
        for(let i=0;i<k;i++) {
            firstPointer = firstPointer ? firstPointer.next : this.head;
        }
        while(firstPointer !== null && firstPointer.next !== null) {
            firstPointer = firstPointer.next;
            secondPointer = secondPointer ? secondPointer.next : this.head;
        }
        return secondPointer;
    }

}



let myLinkedList = new LinkedList(1);
myLinkedList.push(2);
myLinkedList.push(3);
myLinkedList.push(4);
myLinkedList.push(5);

console.log("Original list:");
myLinkedList.printList();

const k = 1;
const kthNodeFromEnd = myLinkedList.findKthFromEnd(k);

console.log(`\n${k}th node from the end:`);
if (kthNodeFromEnd) {
    console.log(kthNodeFromEnd.value);
} else {
    console.log("Not found");
}


/*
    EXPECTED OUTPUT:
    ----------------
    Original list:
    1
    2
    3
    4
    5
    2th node from the end:
    4
*/
