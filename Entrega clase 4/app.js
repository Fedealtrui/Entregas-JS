//Numero a ingresar

let numeroUsuario = parseInt(prompt('Elige un numero:'))
let par
let mayor
let multiplo
let mensajePar=''
let mensajeMayor=''
let mensajeMultiplo=''

//Funcion para ver si es par
function esPar(num) {
    if (num % 2 === 0){
        par = true
    } else{
        par = false
    }
    
}

//Funcion mayor o menor

function esMayor(num) {
    if (num < 50){
        mayor = false
    }else{
        mayor = true
    }
    
}


//Funcion multiplo de 3

function esMultiplo(num) {
    if (num % 3 === 0){
        multiplo = true
    } else{
        multiplo = false
    }
    
}




//Funcion que ejecuta las condicones

function verificacion(num){
    esMayor(num)
    esMultiplo(num)
    esPar(num)

    if (par){
        mensajePar = 'Tu numero es par'
    } else{
        mensajePar = 'Tu numero es impar'
    }

    if (mayor){
        mensajeMayor = 'es mayor que 50'
    }else {
        mensajeMayor= 'es menor que 50'
    }

    if(multiplo){
        mensajeMultiplo = 'es multiplo de 3'
    } else{ 
        mensajeMultiplo= 'no es multiplo de 3'
    }
    
    alert(`${mensajePar} y ${mensajeMayor} y ${mensajeMultiplo}`)

    
}

verificacion(numeroUsuario)
