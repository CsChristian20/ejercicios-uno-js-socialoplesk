/**
 * ["foo","bar","baz","qux","echo"] 
 * 
 * 1) anexar al array result los items [bar,baz,qux]
 * 2) los 2 primeros items reescribir el caracter "a" por @
 * modificar el último item "quz" a mayúscula
 *  
 * 
 * output => ["b@r","b@z","QUX"]   
 */
let arr = ["foo","bar","baz","qux","echo"];
let result = [];

itemOne = arr[1].replace('a','@');
itemTwo = arr[2].replace('a','@');
itemThree = arr[3].toUpperCase();

result.push(itemOne,itemTwo,itemThree)


//export result
module.exports = result;