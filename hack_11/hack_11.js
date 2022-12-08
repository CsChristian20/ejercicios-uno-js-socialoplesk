/**
 * [1,2,3,4,5]
 * ["foo","bar","baz","qux","echo"]
 * 
 * 1) incluir los 2 array en 1 solo array
 * 2) los items del number array 1,3,5 se reescriben one,three,five
 * del string array todos sus items mutan de acuerdo a lo siguiente:
 * foo => f00
 * bar => Bar
 * baz => b@z   
 * qux => quX
 * echo => 3ch0
 * 3) anexar al inicio, al final y entre la unión de los array el string "h@ck"
 * 
 * 
 * output => ["h@ck","one",2,"three",4,"five","h@ck","f00","Bar","b@z","quX","3ch0","h@ck"]   
 */
let numberArray = [1,2,3,4,5];
let stringArray = ["foo","bar","baz","qux","echo"]
let result = [];

// Para añadir numberArray a result
let n = 1
lenNumber = numberArray.length;
result.push("h@ck"); // Para añadir h@ck de primero en result

for(n; n <= lenNumber; n++){

    if(n % 2 == 1){
        (n == 1) ? result.push('one') : '';
        (n == 3) ? result.push('three') : '';
        (n == 5) ? result.push('five') : '';
    }else{
        result.push(n)
    }     
}

result.push("h@ck"); // Para añadir h@ck en medio del result

// Para añadir stringArray a result
let s = 0;
lenString = stringArray.length;

for(s; s < lenString; s++){

    (stringArray[s] == 'foo') ? result.push('f00') : '';
    (stringArray[s] == 'bar') ? result.push('Bar') : '';
    (stringArray[s] == 'baz') ? result.push('b@z') : '';
    (stringArray[s] == 'qux') ? result.push('quX') : '';
    (stringArray[s] == 'echo') ? result.push('3ch0') : '';
}

result.push("h@ck"); // Para añadir h@ck al final del result



//export result
module.exports = result;