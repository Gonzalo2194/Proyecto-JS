

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
const papasfritas = new item ("Papas fritas",80,"fritas.png");
const tiramisu = new item ("Tiramisú",130,"tiramisu.png");

const pedido = [];

let dinero = 750;

const eldinero = document.querySelector("#dinero span");
eldinero.innerText = dinero;
const elpedido = document.getElementById("pedido")

function comprar(menu) {
    if (dinero - menu.precio >= 0){
        pedido.push(menu);
        dinero= dinero - menu.precio;
        actualizarHTML();

    } else{
        alert(`No te queda dinero disponible para comprar ${menu.nombre}.`);
    }

}

function actualizarHTML(){
    eldinero.innerText = dinero;
    elpedido.innerHTML="";
    for (const menu of pedido ){
        const indice = pedido.indexOf(menu);
        const li = `<li>${menu.nombre} $${menu.precio} `;
        elpedido.innerHTML += li;  
        
    }
eldinero.innerText = dinero;

}