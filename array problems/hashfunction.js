

function hash(key,arrayLen){
    let total = 0;
    let WEIRD_PRIME = 31;
    for(let i=0; i< key.length;i++){
        let char = key[i];
        let value = char.charCodeAt(0) - 96;
        total = (total * WEIRD_PRIME + value ) % arrayLen;
    }
    return total;
}

console.log(hash("red",10));