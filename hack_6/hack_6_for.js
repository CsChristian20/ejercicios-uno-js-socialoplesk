/**
 * mediante el loop for iterar cada una de las letras del string "fooziman"
 * debes anexar los caracteres de string al array result
 * ["f","o","o","z","i","m","a,"n"] 
 *
 *
 * output => ["f","o","o","z","i","m","a,"n"]
 */
let str = "fooziman";
let result = [];

let strToArr = str.split("");
let sizeStr = strToArr.length;

let i = 0

for (i; i < sizeStr; i++){
    result.push(strToArr[i]);
}



//export result
module.exports = result;