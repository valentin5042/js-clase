


// sumar();
// function sumar() {
//     console.log(2 + 2)
// }


// const sumar2 = function() {
//     console.log( 3 + 3 )
// }

// sumar2();

// function sumar( a , b ) {
//     console.log( a + b )
// }

// sumar(22, 30)
// sumar(29, 656)

// function saludar(nombre, apellido) {
//     console.log(`Hola ${nombre} ${apellido}`)
// }

// saludar('Valentin')


// iniciarApp()

// function iniciarApp() {
//     console.log('iniciando App....')

//     segundaFuncion()
// }

// function segundaFuncion() {
//     console.log('desde mi segunda Función')
// }

// let total = 0;

// function agregarCarrito(precio) {
//     return total += precio;
// }

// function calcularImpuesto() {
//     return 1.16 * total;
// }

// total = agregarCarrito(200);
// total = agregarCarrito(500);
// total = agregarCarrito(800);
// total = agregarCarrito(900);


// const totalPagar = calcularImpuesto(total);


// console.log(`El total a pagar es de ${totalPagar}`)

// const reproductor = {
//     reproducir: function(id) {
//         console.log(`Reproduciendo canción ${id}`)
//     },
//     pausar: function() {
//         console.log('pausando....')
//     },
//     borrar: function() {
//         console.log(`Borrando la canción ${id}`)
//     }
    
// }


// reproductor.reproducir('La macarena');

 // reproductor.playlist = function() {
 //     console.log(`Escuchando la playlist de ${id}`)
 // }

// console.log(reproductor)
//const aprendiendo = function() { console.log(`Aprendiendo ${tecnologia}`) }

const aprendiendo = tecnologia => console.log(`Aprendiendo ${tecnologia}`)
aprendiendo('js')


const aprendiendo2 = (tecnologia, tecnologia2) => console.log(`Aprendiendo ${tecnologia} y ${tecnologia2}`)
aprendiendo2('React js', 'Node js');