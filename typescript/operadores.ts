let arregloNumeros = [1,2,3,4];
let arregloUsuarios = [
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
let potenciaDeUnNumero =numero => {
    return numero*numero;
};

//n usar for sino usar foreach
let sumatotal=0;
let resultadoForeach = arregloNumeros.forEach(
    (valorActual, indiceActual, arreglo)=>{
        sumatotal=sumatotal+valorActual;
        console.log(valorActual);
        console.log(indiceActual);
        console.log(arreglo);
    }
);

console.log(resultadoForeach);
console.log(sumatotal);


let resultadoSumaConReduce = arregloNumeros.reduce((valorAcumuladoActual, valorActualArreglo) =>{
    console.log('valorAcumuladoActual', valorAcumuladoActual);
    console.log('valorActualArreglo',valorActualArreglo);
    return valorAcumuladoActual-valorActualArreglo;
},20);


//la interface es una clase tipado
interface UsuarioArreglo {
    nombre: string;
    edad: number;
    deuda?: number;
    becado?: boolean;
}

//existen dos maneras de tipar un arreglo
//la primera es let arregloUsuarios:Array<UsuarioArreglo> = [{
//la segunda forma es let arregloUsuarios:UsuarioArreglo[]=[]

//para sumar utilizamos el reduce
let resultadoEdadDeUsuarios = arregloUsuarios.reduce((acumuladoEdad:number,usuario:UsuarioArreglo)=>{
    return acumuladoEdad+usuario.edad;
},0);

//map devuelve una arreglo transformado o mutado es parecido al foreach
//el foreach recibe como parametros valor actual indice arreglo
let nuevoArregloDeUsuarios = arregloUsuarios.map((usuario:UsuarioArreglo) => {
        usuario.becado = false;
        return usuario;
    }
).map((usuario:UsuarioArreglo)=> {
    usuario.deuda = calcularDeuda(usuario.edad);
    return usuario;
}).filter((usuario:UsuarioArreglo)=> {
    return usuario.deuda < 50;
    //el every es un and some es or
}).find(pre)
    /*.some((usuario:UsuarioArreglo)=> {
    return usuario.edad < 18;
});*/

console.log(resultadoEdadDeUsuarios);
console.log('nuevoArregloDeUsuarios', nuevoArregloDeUsuarios);
function calcularDeuda(edadUsuario:number){
    const totalEdad = arregloUsuarios.reduce((total,usuario:UsuarioArreglo)=>
        total+usuario.edad,0);
    return totalEdad * (edadUsuario/100);
}
