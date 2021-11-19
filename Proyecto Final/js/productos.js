

// C: create
// R: read
// U: update
// D: delete

 class Producto{
    constructor(id,nombre,precio,stock) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }

    controlDeStock(){
        alert('Quedan ' + this.stock + ' items de '+ this.nombre)
    }
}


// Lista de productos
const productos = JSON.parse(localStorage.getItem('productos')) || []

// Metodo que retorna la lista de productos
const getAll = () => {
    return productos;
}

// Metodo para agregar un producto a la lista
const create = (producto) => {
    productos.push(producto)
    localStorage.setItem('productos', JSON.stringify(productos))    
    }
    


// Metodo para hallar un producto por id
const findOne = (id) => {

    id = parseInt(id)

    const producto = productos.find( producto => producto.id === id)

    if (!producto) {
        throw new Error(`No existe producto con id ${nombre}`)
    }

    return producto

}

// Metodo para eliminar un producto
const remove = (id) => {

    const producto = findOne(id)
    const index = productos.indexOf(producto)
    productos.splice( index, 1)
    localStorage.setItem('productos', JSON.stringify(productos))

}

//Validar si existe el producto
const existeProducto = (id) => {
    const producto = findOne(id)
    if (!producto) {
        return false}
    else {
        return true 
    } 
}



// Metodo para modificar el stock
const update = (id, stock) => {
    const producto = findOne(id)
    producto.stock = stock
}

//Ordenar Array segun precio

const orden= (a, b) => {
    if (a.precio > b.precio) {
        return 1
    } else if (a.precio < b.precio){
        return -1
    }else {
        return 0
    }
}

// Agregar productos desde el DOM

const formStock = $('#form-Stock')
const inputStock = $('#cantidad')
const inputNombre = $('#nombre')
const inputPrecio = $('#precio')

formStock.submit(function (e) {
    e.preventDefault()
    const id = productos.length + 1
    const stock = inputStock.val();
    const nombre = inputNombre.val();
    const precio = inputPrecio.val();

    const producto = new Producto(id,nombre, precio, stock)
    create(producto)
    document.location.reload()    

})



// Mostrar productos en el DOM

const mostrarProductos = () =>{

    for (const producto of productos) {

        
        $("#lista-productos").append( `
        <div id="producto${producto.id}"  class= "producto">
        <div class="producto__nombre">Nombre: ${producto.nombre}</div>
        <div class="producto__precio">Precio: ${producto.precio}</div>
        <div class="producto_stock"> Items:${producto.stock} </div>
        
        <div class="producto__botones"> <span id="${producto.id}" style='cursor:pointer'>Eliminar</span> </div>
        </div>
        </div>
        `
        )
        const botonEliminar = $(`#${producto.id}`)
            botonEliminar.click(function () {
                $(`#producto${producto.id}`).remove();
                remove(producto.id);
               
    
            })
      
    }

}

    mostrarProductos()


export { getAll, create, findOne, remove, update, orden, Producto,productos, existeProducto } ;