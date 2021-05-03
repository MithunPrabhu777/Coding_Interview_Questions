const isAnagram = (str1,str2) => {
    const normalize = str =>        
     str.
        toLowerCase().
        replace('/[^a-z0-9]/gi','').
        split('').
        sort().
        join('');
    return normalize(str1) === normalize(str2);
}

var str1 = 'iceman';
var str2 = 'cinema';
console.log(isAnagram(str1,str2));