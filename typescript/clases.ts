console.log('hola mundo');
let hola: number | string | boolean;

//let hola ='hola';
const adios = 'adios';
hola = 'adios';
//adios = 'asfdgf';
hola = 1;

let nombre: string = 'andrea';
let edad: number = 24;
let casado: boolean = false;
let fechaNacimiento: Date = new Date();

class Usuario {
    public nombre: string;//no es necesario escirbirlo el public
    private casado: boolean;
    protected edad: number;

    constructor(nombre: string, casado: boolean, edad: number) {
        this.nombre = nombre;
        this.casado = casado;
        this.edad = edad;
    }
}
let alejandra ={
    nombre:'alejandra', casado:false,edad:21
};
let andrea: Usuario = new Usuario('andrea', true, 24);
console.log(andrea);
console.log(alejandra);


class UsuarioDOS{
    constructor(public nombre:string, private _casado:boolean,protected _edad:number){
    }
    get casado(){//tranformar, debugear, deformar o validar dato que esta entrando.
        return this._casado;
    }
    set casado(casado:boolean){
        this._casado =casado;
    }

    imprimirUduario(saludo):string {// el void y el publico es lo mismo asi q puede estr como no
        return `${saludo}.Mi nombre es ${this.nombre}, estoy casado ${this.casado} y mi edad
        es ${this._edad} `;
    }
}

let andreados:UsuarioDOS= new UsuarioDOS('andrea', true,24);
console.log(andreados);
console.log(andreados.casado);
console.log(andreados.imprimirUduario('hola que tal'));

let carla:UusuarioTres = {
    nombre:'andrea', edad:28
};

interface UusuarioTres{ //para implementar una clase y typar a un dato estamso tipando a la variable carla para q tenga nombr y edad
    nombre:string;
    casado?:boolean;//el ? es para poner algo opcional
    edad:number;
}