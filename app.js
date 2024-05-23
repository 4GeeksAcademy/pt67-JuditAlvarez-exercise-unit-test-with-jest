// Contenido de app.js 
console.log("Hello World")



// This is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// Just a console log for ourselves
console.log(sum(7,3))

// Export the function to be used on other files 
// (similar to the keyword "export" when using webpack)








const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}





const fromDollarToYen = function(valueInDollar) {
    
    let valueInYen = valueInDollar * 109.62;
  
    return valueInYen;
}




const fromYenToPound = function(valueInYen) {
    
    let valueInPound = valueInYen * 0.0063;
    
    return valueInPound;
}

module.exports = {sum, fromEuroToDollar, fromDollarToYen, fromYenToPound }