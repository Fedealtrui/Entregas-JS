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
const productos = []

// Metodo que retorna la lista de productos
const getAll = () => {
    return productos;
}

// Metodo para agregar un producto a la lista
const create = (producto) => {
    productos.push(producto)
}

// Metodo para hallar un producto por nombre
const findOne = (nombre) => {

    nombre = nombre.toLowerCase()

    const producto = productos.find( producto => producto.nombre === nombre)

    if (!producto) {
        throw new Error(`No existe ${nombre}`)
    }

    return producto

}

// Metodo para eliminar un producto
const remove = (nombre) => {

    const producto = findOne(nombre)
    const index = productos.indexOf(producto)
    productos.splice( index, 1)

}


// Metodo para modificar el stock
const update = (nombre, stock) => {
    const producto = findOne(nombre)
    producto.stock = stock
}



// Paso 1
// crear un nuevo perro como instancia de la clase Perro
const prod1 = new Producto(1,'Vela', 300 , 100)
const prod2 = new Producto(2,'Sahumerio',200,300)
const prod3 = new Producto(3,'Sahumo', 300,200)
const prod4 = new Producto(4,'Sahumador', 500, 50)

// Paso 2
// agregar productos a la lista
create(prod1)
create(prod2)
create(prod3)
create(prod4)

// Paso 3
// Busco un producto por su nombre


// Eliminar un perro por su nombre
//remove('Sahumo')



// Obtener la lista completa de productos
console.log(getAll())




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


console.log(productos.sort(orden))