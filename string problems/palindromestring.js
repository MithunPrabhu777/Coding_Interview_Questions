function palindromestring(string){
    var splitted = string.split('');
    var reversedarray = splitted.reverse();
    var joinedstring = reversedarray.join('');
    if(string === joinedstring) return 1
    return 0
}

string = 'abc';
console.log(palindromestring(string));