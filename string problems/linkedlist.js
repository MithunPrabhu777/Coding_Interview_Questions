class Node{
    constructor(value,next = null){
        this.value = value;
        this.next = next;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    insertFirst(value){
        var newNode = new Node(value)
       console.log(newNode.value);
    }

}

var ll = new LinkedList();
ll.insertFirst(200)