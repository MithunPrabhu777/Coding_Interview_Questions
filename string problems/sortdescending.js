function sort(string){
    var splitted = string.split('');
    var sorted = splitted.sort();
    var descending = sorted.reverse();
    var joined = descending.join('');
    return joined;
}

string = "for";
console.log(sort(string));