class Node {
  constructor(data){
    this.data = data;
    this.next = null;
  }
}

class Solution {
 constructor(){
     this.head = null;
     this.tail = null;
     this.length = 0;
 }

 push(data){
     var newNode = new Node(data);
     if(this.length === 0){
        this.head  = newNode;
        this.tail = this.head;
     }
     else{
        var current = this.head;

        while(current.next){
            current = current.next;
            return current;
        }
        current.next = newNode;
        this.tail = current.next;
     }
     this.length+=1;
    //  return this;
 }

 pop(){
     if(this.length === 0) return undefined;
     if(this.length === 1) {
        this.head = null;
        this.tail = this.head;
     }
     if(this.length === 2){
        this.head  = this.tail;
        this.head.next = null;
     }
    //  else{
    //        = this.tail;
    //  }
 }

display(){
    var current = this.head;
    while(current !== null){
        console.log(current.data);
        current = current.next;
    }
}
}

var ll = new Solution();
console.log(ll.push(1));
console.log(ll.push(2));
console.log(ll.push(3));
ll.display();