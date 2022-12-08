/**
 * ["foo","bar","baz","qux","echo"] 
 * 
 * contar el total de items que inicien con el caracter "b"
 *  
 * 
 * output => 2   
 */
let arr = ["foo","bar","baz","qux","echo"];
let result = 0;

let i = 0
let len = arr.length;

for(i; i < len; i++){

    if (arr[i][0] == 'b' ){
        result ++;
    } 
    
}



//export result
module.exports = result;