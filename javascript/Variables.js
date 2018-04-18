console.log('hola mundo');
var nombre = 'Andrea';
var edad = 28;
var peso = 305.1;
var casado = false;
var fechaNacimiento = new Date();
var noExisto = null; //false
var noEstoyDefinido = undefined; //false
var a = 1;
var b =-1;
var c =0;
if (noExisto){
    console.log('verdadero');
}else{
    console.log('false')
}

//json
//cada clave debe tener un valor
var usuario = {"nombre":"andrea",
    "apellido":"villacis",
    "cedula": "1722334487",
    "edad": "24",
    edadalcuadrado:potenciadedosdeunnumero(this.edad),
    imprimir: function (){
    console.log(this.nombre+''+this.apellido+''+this.edad)
    }//llamar metodo
};
usuario.imprimir();
usuario.nombre
console.log(usuario.nombre);
console.log(usuario);
delete usuario.edad;
console.log(usuario); //imprimir
//agregar un campo en json
usuario.fechanacimiento = new Date();
console.log(usuario);
usuario.mascotas ={};
usuario.mascotas.nombre = "andrea";
console.log(usuario);

var arreglo = [1,"andrea", true, undefined,null, new Date(),{nombre:"Andrea"}
,[1,2,3,true],usuario.imprimir(),usuario.imprimir];
console.log(arreglo);



function sumarnumeros(numerouno,numerodos){
    return numerouno+numerodos;

}
console.log(sumarnumeros(1,2));
console.log(sumarnumeros(1,2.3345));
var potenciadedosdeunnumero = function  noesnecesarioponerelnombre(numero) {
    return numero*numero;
};
var potenciadedosdeunnumerodos = function  (numero) {
    return numero*numero;
};
console.log(potenciadedosdeunnumerodos(56,23,78,45));
console.log(potenciadedosdeunnumero(3));
usuario.imprimir();

console.log(usuario.imprimir);

