let pregunta= prompt('Hola ¿Que va a llevar?')

let item1 = 150
let item2 = 200
let item3 = 300


function precios(pregunta) {
    if (pregunta === 'comida'){

        alert(`su compra es de $150`)
    }else if(pregunta === 'ropa'){

        alert(`su compra es de $200`)
    }else if (pregunta === 'medicinas'){

        alert(`su compra es de $300`)
    }
    
}

precios(pregunta)
