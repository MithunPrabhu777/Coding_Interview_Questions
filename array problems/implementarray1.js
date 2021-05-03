class Array {
    constructor(){
        this.length = 0;
        this.data = {};
    }

    push(element){
        this.data[this.length] = element;
        this.length++;
        return this.data;
    }

    pop(){
        let item = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;
        return this.data;
    }
}

var array = new Array();
console.log(array.push(10),array.push(20));