// var code = "z".charCodeAt() - 96;
// console.log(code);

// let total = 0;
// total += "hello".charCodeAt(0) - 96;
// total += "hello".charCodeAt(1) - 96;
// total += "hello".charCodeAt(2) - 96;
// total += "hello".charCodeAt(3) - 96;
// total += "hello".charCodeAt(4) - 96;
// console.log(total);


// function hash(key,arrayLen){
//     let total = 0;
//     for (let char of key){
//         let value = char.charCodeAt(0) - 96;
//         total = (total + value) % arrayLen;
//     }
//     return total;
// }


function hash(key,arrayLen){
    let total = 0;
    let WEIRD_PRIME = 31;
    for(let i=0; i<Math.min(key.length, 100);i++){
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % arrayLen;
    }
    return total;
  }


var key = "black";
console.log(hash(key,13));