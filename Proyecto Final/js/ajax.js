const JSON_PRODUCTOS = 'db/productos.json'    
const JSON_PEDIDOS = 'db/pedidos.json'

// Lista de productos desde JSON

const mostrarProductosJSON = () => { //Funcion que muestra los productos en el DOM
    $.getJSON( JSON_PRODUCTOS, (response, status) => {

        if ( status !== 'success') {
            throw new Error('error')
        }

        for ( const producto of response ) {

            $("#lista-productos").append( `
            <div id="producto${producto.id}"  class= "producto">
            
            <div class="producto__id"> ID: ${producto.id}</div>
            <div class="producto__nombre">Nombre: ${producto.nombre}</div>
            <div class="producto__precio">Precio: ${producto.precio}</div>
            <div class="producto_stock"> Items:${producto.cantidad} </div>
            
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

    })
}

mostrarProductosJSON()



const mostrarPedidosJSON = () => { //Funcion que muestra los pedidos en el DOM

    $.getJSON( JSON_PEDIDOS, (response, status) => {

        if ( status !== 'success') {
            throw new Error('error')
        }

        for ( const pedido of response ) {

           

            $("#lista-pedidos").append( `
            <div id="pedido${pedido.id}"  class= "pedido">
            
            <div class="pedido__id"> ID: ${pedido.id}</div>

            <div class="pedido__carrito"> Items: ${pedido.carrito} </div>
            
            <div class="pedido__fecha">Fecha: ${pedido.fecha}</div>
            
            <div class="pedido__cliente"> Cliente: ${pedido.cliente}</div>
            
            <div class="pedido__total"> Total: $${pedido.total}</div>
           
            <div class="pedido__fechaDeEntrega"> ${pedido.fechaDeEntrega} </div>
            
            <div class="pedido__status">Estado: ${pedido.estado}</div>
            
           
            
            </div>
            `
            )

         
        }
    
            })
        }

        mostrarPedidosJSON()