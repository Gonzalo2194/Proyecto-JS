class item{
    constructor(nombre,precio,imagen){
        this.nombre= nombre;
        this.precio= precio;
        this.imagen= imagen;
    }
}

const burguer= new item ("Hamburguesa",150,"pexels-oleksandr-p-12932961 (1).jpg");
const pizza = new item ("Pizza",250,"pizza.jpg");
const refresco = new item ("Gaseosa",70,"gaseosa.png");
const empanada = new item ("Empanada",50,"empanadas.jpg");
const papasfritas = new item ("Papas fritas",80,"rsz_1pexels-pablo-alberto-14696271 (1).jpg");
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

function borrar(nombredepedido) {
    const pedidoEncontrado = pedido.find((item) => item.nombre === nombredepedido);
    if (pedidoEncontrado) {
        dinero += pedidoEncontrado.precio;
        pedido.splice(pedido.indexOf(pedidoEncontrado), 1);
        actualizarHTML();
    }   
}

function actualizarHTML(){
    eldinero.innerText = dinero;
    elpedido.innerHTML="";
    for (const menu of pedido ){
        
        const indice = pedido.indexOf(menu);
        const li = `<li onclick="borrar('${menu.nombre}')">${menu.nombre} $${menu.precio} `;
        elpedido.innerHTML += li;  
        
    }
eldinero.innerText = dinero;

}