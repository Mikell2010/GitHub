//Escribe una función a la que se le asigne un arreglo, y cada vez que el valor sea "comida" debería mostrar "delicioso"en la consola. 
//Si "comida" no estaba presente en el arreglo, que la consola registre "Tengo hambre" una vez.

function siempreHambriento(arr) {
    var comidaPresente = false;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == "comida") {
            console.log("delicioso");
            comidaPresente = true;
        }
    }
    if (!comidaPresente) {
        console.log("Tengo hambre");
    }
}


siempreHambriento([3.14, "comida", "pastel", true, "comida"]);
// esto debería mostrar "delicioso, "delicioso"
siempreHambriento([4, 1, 5, 7, 2]);
// esto debería mostrar "Tengo hambre"


//Dado un arreglo y un valor cutoff, devuelve un nuevo arreglo que contenga solo los valores mayores a cutoff.

function highPass(arr, cutoff) {
    var filteredArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > cutoff) {
            filteredArr.push(arr[i]);
        }
    }
    return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); // esperamos de vuelta [6, 8, 10, 9]


//Dado un arreglo de números, devuelve un recuento de cuántos de los números son mayores que el promedio.


function betterThanAverage(arr) {
    var sum = 0;

    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    var avg = sum / arr.length;

    var count = 0;

    for (var j = 0; j < arr.length; j++) {
        if (arr[j] > avg) {
            count++;
        }
    }

    return count;
}

var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // Esperamos 4


//Escribe una función que invierta los valores de un arreglo y los devuelva.

function reverse(arr) {
    arr.reverse();
    return arr;
}

var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // esperamos de vuelta ["e", "d", "c", "b", "a"]


//Arreglo de Finobacci

function fibonacciArray(n) {
    // [0, 1] son los valores inciales del arreglos para calcular el resto
    var fibArr = [0, 1];
    for (var i = 2; i < n; i++) {
        var prevNum1 = fibArr[i - 1];
        var prevNum2 = fibArr[i - 2];
        fibArr.push(prevNum1 + prevNum2);
    }
    return fibArr;
}

var result = fibonacciArray(10);
console.log(result); // esperamos de vuelta[0, 1, 1, 2, 3, 5, 8, 13, 21, 34]




