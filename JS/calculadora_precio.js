
const nombre = prompt("Bienvenido, ¿cuál es tu nombre?");
const anioNacimiento = prompt("¿Cuál es tu año de nacimiento?");
const edad = 2023 - parseInt(anioNacimiento);

if (edad >= 18) {
    alert("Bienvenido " + nombre + ". Para conocer el precio de tu membresía, en el próximo paso cuéntanos la cantidad de productos de tu restaurante.");
    const cantidadProductos = prompt("Por favor, ingresa la cantidad de productos en tu restaurante:");

    if (cantidadProductos) {
        const resultado = calcular(parseInt(cantidadProductos));
        
        if (edad >= 18 && resultado > 9500) {
            const descuento = resultado * 0.10;
            const precioConDescuento = resultado - descuento;
            alert("Tu restaurante tiene " + cantidadProductos + " productos. El valor total es: $" + resultado + ". Se aplica un descuento del 10%, por lo que el precio con descuento es: $" + precioConDescuento);
        } else {
            alert("Tu restaurante tiene " + cantidadProductos + " productos. El valor total es: $" + resultado);
        }
    } 
        } else {
            alert("Lamentablemente " + nombre + ". Eres menor de edad, legalmente no puedes tener un establecimiento comercial.");
            }

    function calcular(cantidadProductos) {
        const valorPorProducto = 30;
        const resultado = cantidadProductos * valorPorProducto;
        return resultado;
    }