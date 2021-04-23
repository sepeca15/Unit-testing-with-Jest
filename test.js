test("One euro should be 1.206 dollars", function(){
    // importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js')

    // utilizo la function de la forma como se espera que funcione
    const dollars = fromEuroToDollar(3.5)

    // is 1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
    const expected = 3.5 * 1.2; 
    
    // hago mi comparacion (la prueba)
    expect(expected).toBe(dollars);
})

test("1 dolar a yenes", function(){
    // importo la funcion desde app.js
    const { fromDollarToYen } = require('./app.js')

    // utilizo la function de la forma como se espera que funcione
    const Yen = fromDollarToYen(1)

    // is 1  son 0.8 dollar, entonces 1 dolar deberian ser = ((1/1.2) * 127.9)
    const expected = (1/1.2) * 127.9; 
    
    // hago mi comparacion (la prueba)
    expect(expected).toBe(Yen);
})

test("1 Yen a Pound", function(){
    // importo la funcion desde app.js
    const { fromYenToPound } = require('./app.js')

    // utilizo la function de la forma como se espera que funcione
    const Pound = fromYenToPound(1)

    // is 1 Yen son 127.9 yen, entonces 1 pound deberian ser = ((1/127.9)*0.8)
    const expected = (1/127.9) * 0.8; 
    
    // hago mi comparacion (la prueba)
    expect(expected).toBe(Pound);
})

