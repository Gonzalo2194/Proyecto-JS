

class item{
    constructor(nombre,precio,imagen){
        this.nombre= nombre;
        this.precio= precio;
        this.imagen= imagen;
    }
}

const burguer= new item ("Hamburguesa",150,"hamburguesa.png");
const pizza = new item ("Pizza",250,"pizza.png");
const refresco = new item ("Gaseosa",70,"gaseosa.png");
const empanada = new item ("Empanada",50,"empanada.png");

const pedido = [];

let dinero = 750;