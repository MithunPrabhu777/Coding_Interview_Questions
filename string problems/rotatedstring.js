function rotated(string1,string2,rotation){
    var splitted = string1.split('');
    for(let i=0;i<rotation;i++){
      splitted.shift();
    }
    var joined = splitted.join('');
    return joined;
}

string1 = 'geeksforgeeks';
string2 = 'forgeeksgeeks';
rotation = 5;
console.log(rotated(string1,string2,rotation));
