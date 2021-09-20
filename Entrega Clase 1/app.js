//Ejercicios de Control de flujos


let nombre = prompt('Bienvenido, cual es tu nombre?')
let numero = parseFloat(prompt(`Hola ${nombre}, decime un numero:`))


if (numero > 10 && numero < 50 ){
    alert(`Tu numero es ${numero} y es mayor que 10 pero menor que 50`)
        }else if (numero > 50){
            alert('Mira la consola ;)');
            console.log('Tu numero es mayor que 50')
        }else{
            alert(`${nombre} tu numero es muy bajo, por favor elige otro`)
        }

    let saludo = prompt('Gracias por visitarme: ')

    if (saludo != ''){
        alert('Hasta la proxima!')
    } else{
        console.log(':(')
    }




