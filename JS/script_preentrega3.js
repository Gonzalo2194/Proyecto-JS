
class Producto {
    constructor(id, nombre, precio, categoria, imagen){
        this.id = id;
        this.nombre= nombre;
        this.precio = precio;
        this.categoria = categoria;
        this.imagen = imagen;
    }
}


class Basedatos {
    constructor(){
        this.productos = [];
        this.agregarRegistro(1,"hamburguesa con queso", 150,"burgers","pexels-oleksandr-p-12932961 (1).jpg");
        this.agregarRegistro(2,"prueba", 190,"test1","pexels-oleksandr-p-12932961 (1).jpg")
        this.agregarRegistro(2,"prueba2", 250,"test2","pexels-oleksandr-p-12932961 (1).jpg")
    }

    agregarRegistro(id, nombre ,precio, categoria, imagen){
        const producto = new Producto (id, nombre, precio, categoria, imagen);
        this.productos.push(producto);

    }
    TraerRegistros() {
        return this.productos;
    }
    
    RegistrosPorId (id) {
        return this.productos.find ((producto)== producto.id === id);
    
    }
    
    RegistrosPorNombre (palabra){
        return this.productos.filter ((producto)== producto.nombre.toLowerCase(). includes(palabra.toLowerCase()));
    
    }
}

const bd = new Basedatos();

const divProductos = document.querySelector("#productos");

cargarProductos(bd.TraerRegistros());

function cargarProductos(productos) {
    divProductos.innerHTML= ""
    for (const producto of productos) {
        divProductos.innerHTML += `
        <section class="container-fluid row mt-5 ">
            <div class="">
                <h2>${producto.nombre}</h2>
                <p class= "letrapedido">${producto.precio}</p>
                <div class= " img bordes">
                    <img class ="img" src="asset/${producto.imagen}"< />
                </div>
        </section>        
                <a href="#" class= "letrapedido botonagregar" data-id="${producto.id}">Agregar al carrito</a>
                </div>
            `;
    }

}


