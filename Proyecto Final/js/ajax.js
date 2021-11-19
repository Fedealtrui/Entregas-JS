import  { getAll, create, findOne, remove, update, orden,  Producto, productos, existeProducto } from './productos.js'
const JSON_PRODUCTOS = 'db/productos.json'    
const JSON_PEDIDOS = 'db/pedidos.json'

// Lista de productos desde JSON

const mostrarProductosJSON = () => { //Funcion que muestra los productos en el DOM
    $.getJSON( JSON_PRODUCTOS, (response, status) => {

        if ( status !== 'success') {
            throw new Error('error')
        }




    
    


        for ( const productoJSON of response ) {

            console.log(productoJSON)


            $("#lista-productos").append( `
            <div id="producto${productoJSON.id}"  class= "producto">
            
           
            <div class="producto__nombre">Nombre: ${productoJSON.nombre}</div>
            <div class="producto__precio">Precio: ${productoJSON.precio}</div>
            <div class="producto_stock "> Items:${productoJSON.cantidad} </div>
            
            <div class="producto__botones"> <span id="${productoJSON.id}" style='cursor:pointer'>Eliminar</span> </div>
            </div>
            </div>
            `
            )

            const botonEliminar = $(`#${productoJSON.id}`)
            botonEliminar.click(function () {
                $(`#producto${productoJSON.id}`).remove();
               
    
            })

           
            
    }

    })}


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
            
            <div class="pedido__botones"> <span id="Entregar-${pedido.id}" style='cursor:pointer'><i class="fas fa-check-circle"></i></span> </div>
            
            </div>
            `
            )

         
        }
    
            })
        }

        mostrarPedidosJSON()


        