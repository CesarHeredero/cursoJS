const cliente = {
    nombre: 'Juan',
    saldo: 2000,
    tipoCliente: function() {
        let tipo;

        if (this.saldo > 1000) {
            tipo = 'Gold';
        } else if (this.saldo > 500) {
            tipo = 'platino';
        } else {
            tipo = 'Normal';
        }
        return tipo;
    }
}

console.log(cliente.tipoCliente());

// otra forma de nombrarlo
function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
    this.tipoCliente = function() {
        let tipo;
        if (this.saldo > 1000) {
            tipo = 'Gold2';
        } else if (this.saldo > 500) {
            tipo = 'Platino2';
        } else {
            tipo = ' Normal2';
        }
        return tipo;
    }
}

const persona = new Cliente('Pedro', 20000);

console.log(persona.tipoCliente());

// String
const nombre1 = 'Pedro';
console.log(nombre1);
console.log(typeof nombre1);

const nombre2 = new String('Pedro');
console.log(nombre2);
console.log(typeof nombre2);

if (nombre1 == nombre2) {
    console.log('si, iguales');
} else {
    console.log('no son iguales')
}

if (nombre1 === nombre2) {
    console.log('si, iguales');
} else {
    console.log('no son iguales')
}

// numeros 
const numero1 = 1;
const numero2 = new Number(1);

console.log(numero1);
console.log(numero2);

// booleanos
const verdadero = true;
const verdadero2 = new Boolean(true);

console.log(verdadero);
console.log(verdadero2);

// funciones 
const funcion1 = function(a, b) {
    return a + b;
}

const funcion2 = new Function('a', 'b', 'return 1 + 2');

console.log(funcion1(2, 3));
console.log(funcion2(1, 2));

// Objetos
const persona1 = {
    nombre: 'juan',
}

const persona2 = new Object({ nombre: 'Juan', });

console.log(persona1);
console.log(persona2);

// arreglos
const arrglo1 = [1, 2, 3, 4];
const arreglo2 = new Array(1, 2, 3, 4);

console.log(arrglo1);
console.log(arreglo2);