class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
/* Binary search follows divide and conquer algo. O(log n) */

class BST {
    constructor() {
        this.root = null;
    }
    /*
        1). create new node
        let temp = this.root
        USE WHILE LOOP
        if newNode === temp return undefined;
        2). if < left else > right. 
        3). if null insert newNode else move to next
    */
    insert(value) {
        let newNode = new Node(value);
        if(this.root === null) {
            this.root = newNode;
            return this;
        }
        let temp = this.root;
        while(true) {
            if(newNode.value === temp.value) {
                return;
            }
            if(newNode.value < temp.value) {
                if(!temp.left) {
                    temp.left = newNode;
                    return this;
                } else {
                    temp = temp.left;
                }
            } else {
                if(!temp.right) {
                    temp.right = newNode;
                    return this;
                } else {
                    temp = temp.right;
                }
            }
        }
    }

    contains(value) {
        if(!this.root) {
            return false;
        }
        let temp = this.root;
        while(temp) {
            if(value < temp.value) {
                temp = temp.left;
            } else if(value > temp.value) {
                temp = temp.right;
            } else {
                return true;
            }
        }
        return false;
    }
}