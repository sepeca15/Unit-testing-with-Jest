// one euro is:
/* let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
} */

// declaramos una funcion con el mismo nombre "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * 1.2;
    // retornamos el valor
    return valueInDollar;
}

console.log(fromEuroToDollar(100))

// declaramos una funcion con el mismo nombre "fromDollarToYen"
const fromDollarToYen = function(valueInDollar){
    // convertimos el valor a dolares
    let valueInYen = (valueInDollar / 1.2) * 127.9;
    // retornamos el valor
    return valueInYen;
}

console.log(fromDollarToYen(100))

// declaramos una funcion con el mismo nombre "fromDollarToYen"
const fromYenToPound = function(valueInYen){
    // convertimos el valor a dolares
    let valueInPound = (valueInYen / 127.9) * 0.8;
    // retornamos el valor
    return valueInPound;
}

console.log(fromYenToPound(100))

// tenemos que incluir la funcion en el exports para que sea exportada a otros archivos como test.js
module.exports = { fromEuroToDollar ,fromDollarToYen ,fromYenToPound}