// Importar la función sum del archivo app.js
const { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');

// Comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
    // Dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // Esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});


test("One euro should be 1.07 dollars", function() {
    // Importo la funcion desde app.j

    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);

    
    const expected = 3.5 * 1.07;

    // Hago mi comparación (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(3.745); 
})




test("One dollar should be 156.5 yenes", function() {
    // Importo la funcion desde app.j

    // Uso la función como debe ser usada

    const dollars = 3.5;
    const expectedYen = dollars * 156.5; // 3.5 * 156.5
    expect(fromDollarToYen(dollars)).toBe(expectedYen);
})



test("One yen should be 0.87 pounds", function() {
    // Importo la funcion desde app.j

    const yen = 3.5;
    const expectedPounds = yen * 0.87; // 3.5 * 0.87
    expect(fromYenToPound(yen)).toBe(expectedPounds);

    // Hago mi comparación (la prueba
    expect(fromYenToPound(3.5)).toBe(3.745); 
})




