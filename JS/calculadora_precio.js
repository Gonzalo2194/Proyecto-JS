const nombre = prompt("Bienvenido, ¿cuál es tu nombre?");
const anioNacimiento = prompt("¿Cuál es tu año de nacimiento?");
const edad = 2023 - parseInt(anioNacimiento);
let MayorDeEdad;

if (edad >= 18) {
    MayorDeEdad = true;
    alert("Bienvenido " + nombre + ". En el próximo paso cuéntanos acerca de la cantidad de productos de tu restaurante.");
} else {
    MayorDeEdad = false;
    alert("Lamentablemente " + nombre + ". Eres menor de edad, legalmente no puedes tener establecimiento comercial.");
}