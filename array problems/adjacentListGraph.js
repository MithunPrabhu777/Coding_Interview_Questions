class AdjacentListGraph{
    constructor(){
        this.adjacencyList = {};
    }

    addVertex(vertex){
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }

    addEdge(vertex1,vertex2){
        this.adjacencyList[vertex1].push(this.adjacencyList[vertex2]);
        this.adjacencyList[vertex2].push(this.adjacencyList[vertex1]);
    }
    
    removeEdge(vertex1,vertex2){

    }
}