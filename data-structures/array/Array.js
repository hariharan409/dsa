

class MyArray {
    constructor() {
        this.length = 0;
        this.data = {};
    }

    push(item) {
        this.data[this.length] = item;
        this.length++;
        return this.length;
    }

    get(index) {
        return this.data[index] || -1;
    }

    pop() {
        if(this.length > 0) {
            const lastItem = this.data[this.length - 1];
            delete this.data[this.length - 1];
            this.length--;
            return lastItem;
        }
        return "Can't do pop operation on an empty array";
    }

    shift() {
        if(this.length > 0) {
            const firstItem = this.data[0];
            for(let i=0;i<this.length;i++) {
                this.data[i] = this.data[i+1];
            }
            delete this.data[this.length - 1];
            this.length--;
            return firstItem;
        }
        return "Can't do shift operation on an empty array";
    }

} 

const myNewArray = new MyArray();

myNewArray.push("harish");
myNewArray.push("mani gandhi");
myNewArray.push("aravind");

console.log(myNewArray.shift());
console.log(myNewArray.data);
