//Objeto para productos


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


const producto1 = new Producto (1,'lapicera', 20, 200);

producto1.controlDeStock();

console.log(producto1);


const producto2 = new Producto (2, 'cuadernos', 50, 100)

producto2.controlDeStock();

console.log(producto2)