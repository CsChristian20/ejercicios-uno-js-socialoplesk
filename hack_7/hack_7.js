/**
 * ["foo","bar","baz","qux","echo"] 
 * 
 * modificar a mayúscula el primer caracter de cada item string del array
 *  
 * 
 * output => ["Foo","Bar","Baz","Qux","Echo"]   
 */
let arr = ["foo","bar","baz","qux","echo"];
let result = [];


let len = arr.length;

for(let i = 0; i < len; i++){

    let str = arr[i].split("")
        str[0] = str[0].toUpperCase()

    let newStr = str.join("")
    
    result.push(newStr)
}

//export result
module.exports = result;