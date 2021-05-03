function anagram(string1,string2){
    var split1 = string1.split('')
    var sorted1 = split1.sort()
    var sortedstring1 = sorted1.join('');

    var split2 = string2.split('')
    var sorted2 = split2.sort();
    var sortedstring2 = sorted2.join('');

    var sorted1 = {};
    var sorted2 = {};
    for(var character of sortedstring1){
        sorted1[character] = (sorted1[character] || 0) + 1;
    }

    for(var character of sortedstring2){
        sorted2[character] = (sorted2[character] || 0) + 1;
    }
    
    if(sorted1 == sorted2){
        return "YES"
    }
    else{
        return "NO"
    }

    // if(object1 == object2){
    //     return "YES"
    // }
    // else{
    //     return "NO"
    // }

}

string1 = "geeksforgeeks";
string2 = "forgeeksgeeks";
console.log(anagram(string1,string2));