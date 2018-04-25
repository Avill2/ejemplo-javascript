console.log('hola mundo');
var hola;
//let hola ='hola';
var adios = 'adios';
hola = 'adios';
//adios = 'asfdgf';
hola = 1;
var nombre = 'andrea';
var edad = 24;
var casado = false;
var fechaNacimiento = new Date();
var Usuario = /** @class */ (function () {
    function Usuario(nombre, casado, edad) {
        this.nombre = nombre;
        this.casado = casado;
        this.edad = edad;
    }
    return Usuario;
}());
var alejandra = {
    nombre: 'alejandra', casado: false, edad: 21
};
var andrea = new Usuario('andrea', true, 24);
console.log(andrea);
console.log(alejandra);
var UsuarioDOS = /** @class */ (function () {
    function UsuarioDOS(nombre, _casado, _edad) {
        this.nombre = nombre;
        this._casado = _casado;
        this._edad = _edad;
    }
    Object.defineProperty(UsuarioDOS.prototype, "casado", {
        get: function () {
            return this._casado;
        },
        set: function (casado) {
            this._casado = casado;
        },
        enumerable: true,
        configurable: true
    });
    UsuarioDOS.prototype.imprimirUduario = function (saludo) {
        return saludo + ".Mi nombre es " + this.nombre + ", estoy casado " + this.casado + " y mi edad\n        es " + this._edad + " ";
    };
    return UsuarioDOS;
}());
var andreados = new UsuarioDOS('andrea', true, 24);
console.log(andreados);
console.log(andreados.casado);
console.log(andreados.imprimirUduario('hola que tal'));
var carla = {
    nombre: 'andrea', edad: 28
};
