function balancedParanthesis(string){

    const map = {
        ')':'(',
        '}':'{',
        ']':'['
    }

    var stack = [];
    for(var i=0;i<string.length;i++){
        if(string[i] === '(' || string[i] === '[' || string[i] === '{'){
            stack.push(string[i]);
        }
        else if(stack[stack.length - 1] === map[string[i]]){
            stack.pop();
        }
        else{
            return false;
        }
    }
    if(stack.length === 0){
        return true;
    }
    else{
        return false;
    }
}

string = "{[{}]}"
console.log(balancedParanthesis(string));