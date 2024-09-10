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
    //     Floyd's Cycle-Finding Algorithm, also known as the Tortoise and Hare Algorithm, is a two-pointer technique used to 
    // detect cycles in a sequence, typically within a linked list. The algorithm is efficient, running in O(n) time with O(1) 
    // space, making it a popular choice for this kind of problem.

    // How Floyd's Cycle-Finding Algorithm Works
    // Initialization:

    // You have two pointers, commonly called the tortoise (slow pointer) and the hare (fast pointer).
    // Both pointers start at the head of the linked list.
    // Movement:

    // The tortoise moves one step at a time (tortoise = tortoise.next).
    // The hare moves two steps at a time (hare = hare.next.next).
    
    findMiddleNode() {
        let slowPointer = this.head;
        let fastPointer = this.head;
        while(fastPointer !== null && fastPointer.next !== null) {
            slowPointer = slowPointer.next;
            fastPointer = fastPointer.next.next;
        }
        return slowPointer;
    }

}



let myLinkedList = new LinkedList(1);
myLinkedList.push(2);
myLinkedList.push(3);
myLinkedList.push(4);
myLinkedList.push(5);

console.log("Original list:");
myLinkedList.printList();

const middleNode = myLinkedList.findMiddleNode();
console.log(`\nMiddle node value: ${middleNode.value}`);

// Create a new list with an even number of elements
let myLinkedList2 = new LinkedList(1);
myLinkedList2.push(2);
myLinkedList2.push(3);
myLinkedList2.push(4);
myLinkedList2.push(5);
myLinkedList2.push(6);

console.log("\nOriginal list 2:");
myLinkedList2.printList();

const middleNode2 = myLinkedList2.findMiddleNode();
console.log(`\nMiddle node value of list 2: ${middleNode2.value}`);


/*
    EXPECTED OUTPUT:
    ----------------
    Original list:
    1
    2
    3
    4
    5
    Middle node value: 3
    Original list 2:
    1
    2
    3
    4
    5
    6
    Middle node value of list 2: 4
*/
