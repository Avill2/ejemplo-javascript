var arregloNumeros = [1, 2, 3, 4];
var arregloUsuarios = [
    {
        nombre: 'Adrian',
        edad: 28
    },
    {
        nombre: 'Gabriela',
        edad: 10
    },
    {
        nombre: 'Felipe',
        edad: 68
    },
    {
        nombre: 'Wendy',
        edad: 32
    },
    {
        nombre: 'Roberto',
        edad: 18
    }
];
//las funciones que no tiene nombre son sfunciones anonimas
//fat arrow functions.-
//reemplza el nombre function =>
//let suamrDosNumeros =(numeroUno:number, numeroDos:number):number => {
//  return numeroDos+numeroUno;
//};
//console.log(suamrDosNumeros(1,2));
var potenciaDeUnNumero = function (numero) {
    return numero * numero;
};
//n usar for sino usar foreach
var sumatotal = 0;
var resultadoForeach = arregloNumeros.forEach(function (valorActual, indiceActual, arreglo) {
    sumatotal = sumatotal + valorActual;
    console.log(valorActual);
    console.log(indiceActual);
    console.log(arreglo);
});
console.log(resultadoForeach);
console.log(sumatotal);
var resultadoSumaConReduce = arregloNumeros.reduce(function (valorAcumuladoActual, valorActualArreglo) {
    console.log('valorAcumuladoActual', valorAcumuladoActual);
    console.log('valorActualArreglo', valorActualArreglo);
    return valorAcumuladoActual - valorActualArreglo;
}, 20);
//existen dos maneras de tipar un arreglo
//la primera es let arregloUsuarios:Array<UsuarioArreglo> = [{
//la segunda forma es let arregloUsuarios:UsuarioArreglo[]=[]
//para sumar utilizamos el reduce
var resultadoEdadDeUsuarios = arregloUsuarios.reduce(function (acumuladoEdad, usuario) {
    return acumuladoEdad + usuario.edad;
}, 0);
//map devuelve una arreglo transformado o mutado es parecido al foreach
//el foreach recibe como parametros valor actual indice arreglo
var nuevoArregloDeUsuarios = arregloUsuarios.map(function (usuario) {
    usuario.becado = false;
    return usuario;
}).map(function (usuario) {
    usuario.deuda = calcularDeuda(usuario.edad);
    return usuario;
}).filter(function (usuario) {
    return usuario.deuda < 50;
    //el every es un and some es or
}).find(pre);
/*.some((usuario:UsuarioArreglo)=> {
return usuario.edad < 18;
});*/
console.log(resultadoEdadDeUsuarios);
console.log('nuevoArregloDeUsuarios', nuevoArregloDeUsuarios);
function calcularDeuda(edadUsuario) {
    var totalEdad = arregloUsuarios.reduce(function (total, usuario) {
        return total + usuario.edad;
    }, 0);
    return totalEdad * (edadUsuario / 100);
}
