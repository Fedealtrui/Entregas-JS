class Pedido {
    constructor (id, carrito, fecha, precio,cliente,detalle,fechaDeEntrega,estado ){
        this.id=id,
        this.carrito=carrito,
        this.fecha=fecha,
        this.precio=precio,
        this.cliente=cliente,
        this.detalle=detalle,
        this.fechaDeEntrega=fechaDeEntrega,
        this.status=estado
    }
      
    }



//Lista de pedidos

const pedidos = []

//Obtener lista de pedidos

const verPedidos = () =>{
    return pedidos;
}
//Agrego pedidos a la  lista

const agregarPedido = (pedido) => {
    pedidos.push(pedido)
    localStorage.setItem('pedidos', JSON.stringify(pedidos))
}


//Buscar pedidos por ID

const buscarPedido = (id) =>{
    id = parseInt(id);
    const pedido = pedidos.find(pedido => pedido.id === id);

    if (!pedido){
        throw new Error (`no hay pedidos con el id ${id}`)
    } 

    return pedido

}


//Eliminar un pedido

const eliminarPedido = (id) => {
    const pedido = buscarpedido(id)
    const index = pedidos.indexOf(pedido)
    pedidos.splice(index,1)
}

//Estado de pedido

const pedidoEntregado = (id) => {
    const pedido = buscarPedido(id)
    const estado =  pedido.status
     if (estado){
    return "Pedido entregado"
} else{
    return "Pedido pendiente"
}
}

// Actualizar un pedido

const actualizarPedido = (id, pedido) => {
    const pedidoActualizado = buscarPedido(id)
    pedidoActualizado.id = pedido.id
    pedidoActualizado.carrito = pedido.carrito
    pedidoActualizado.fecha = pedido.fecha
    pedidoActualizado.precio = pedido.precio
    pedidoActualizado.cliente = pedido.cliente
    pedidoActualizado.detalle = pedido.detalle
    pedidoActualizado.fechaDeEntrega = pedido.fechaDeEntrega
    pedidoActualizado.status = pedido.status
}


//Crear un pedido   
const pedido1 = new Pedido(1, [], "26/10/21", 300 , "Jose", "detalle", "fechaDeEntrega", false)
agregarPedido(pedido1);

//Enlazar con el dom

const CuadroPedidos = document.getElementById('pedidos')


//Mostrar pedidos

const mostrarPedidos = () =>{

    for (let i = 0; i < pedidos.length; i++){
        const pedido = pedidos[i]
        const CuadroPedido = document.createElement('div')
        CuadroPedido.classList.add('pedido')
        CuadroPedido.innerHTML = `

        <div class="pedido__id"> ID: ${pedido.id}</div>
        <div class="pedido__carrito">Items: ${pedido.carrito}</div>
        <div class="pedido__fecha">Fecha: ${pedido.fecha}</div>
        <div class="pedido__precio">Precio: ${pedido.precio}</div>
        <div class="pedido__cliente"> Cliente: ${pedido.cliente}</div>
        <div class="pedido__detalle"> Detalles: ${pedido.detalle}</div>
        <div class="pedido__fechaDeEntrega"> ${pedido.fechaDeEntrega} </div>
        <div class="pedido__status">Estado: ${pedidoEntregado(pedido.id)}</div>
        <div class="pedido__eliminar">
            <button class="pedido__eliminar--boton">Eliminar</button>
        </div>
        <div class='pedido__entregar'>
            <button class="pedido__entregar--boton">Entregar</button>
        </div>
        </div>
        `
        CuadroPedidos.appendChild(CuadroPedido);
    }

}

mostrarPedidos();
