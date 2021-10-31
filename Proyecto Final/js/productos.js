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


// Metodo para modificar el stock
const update = (id, stock) => {
    const producto = findOne(id)
    producto.stock = stock
}



// Paso 1
// crear un nuevo perro como instancia de la clase Perro
// const prod1 = new Producto(1,'Vela', 300 , 100)
// const prod2 = new Producto(2,'Sahumerio',200,300)
// const prod3 = new Producto(3,'Sahumo', 300,200)
// const prod4 = new Producto(4,'Sahumador', 500, 50)

// Paso 2
// agregar productos a la lista
// create(prod1)
// create(prod2)
// create(prod3)
// create(prod4)

// Paso 3
// Busco un producto por su nombre


// Eliminar un perro por su nombre
//remove('Sahumo')







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

const formStock = document.getElementById('form-Stock')
const inputStock = document.getElementById('cantidad')
const inputNombre = document.getElementById('nombre')
const inputPrecio = document.getElementById('precio')

formStock.addEventListener('submit', (event) => {
    event.preventDefault()
    const id = productos.length + 1
    const nombre = inputNombre.value 
    const precio = inputPrecio.value
    const stock = inputStock.value

    const producto = new Producto(id,nombre, precio, stock)
    create(producto)

    formStock.reset()
    document.location.reload()    

})

// Mostrar productos en el DOM

 const listaProductos = document.getElementById('lista-productos')


const mostrarProductos = () =>{

    for (let i = 0; i < productos.length; i++){
        const producto = productos[i]
        const CuadroProductos = document.createElement('div')
        CuadroProductos.classList.add('producto')
        CuadroProductos.innerHTML = `

        <div class="producto__id"> ID: ${producto.id}</div>
        <div class="producto__nombre">Nombre: ${producto.nombre}</div>
        <div class="producto__precio">Precio: ${producto.precio}</div>
        <div class="producto_stock"> Items:${producto.stock} </div>
        </div>
        <div class="producto__botones"> <span id="${producto.id}" style='cursor:pointer'>Eliminar</span> </div>
        `
        listaProductos.appendChild(CuadroProductos);

        const botonEliminar = document.getElementById(producto.id)
        botonEliminar.addEventListener('click', () => {
            remove(producto.id)
            document.location.reload()
        })
    }

}

    mostrarProductos()