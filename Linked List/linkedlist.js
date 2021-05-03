class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(data){
        var newNode = new Node(data);
        if(this.length === 0){
            this.head = newNode;
            this.tail = this.head;
        }
        else{
            var current = this.head;

            while(current.next){
                current = current.next;
            }
            current.next = newNode;
            this.tail = current.next;
        }
        this.length +=1;
        return this.head;
    }
    pop(){
        if(this.length === 0){
            return undefined;
        }
        else if(this.length === 1){
            this.head = null;
            this.tail = this.head;
        }
        else if(this.length === 2){
            this.head = this.tail;
            this.head.next = null; 
        }
        else{
            var current = this.head;
            while(current.next){
                current = current.next;
            }
                this.tail = current;
                

        }
        this.length -=1;
        return this.tail;
    }
}

var ll = new SinglyLinkedList();
console.log(ll.push(25));
console.log(ll.push(35));
console.log(ll.push(45));
console.log(ll.pop());
console.log(ll.pop());