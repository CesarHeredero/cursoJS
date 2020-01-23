function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}



// Prototype
Cliente.prototype.tipoCliente = function() {
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

// Heredar de otros funciones
function Empresa(nombre, saldo, telefono, tipo) {
    Cliente.call(this, nombre, saldo);
    this.telefono = telefono;
    this.tipo = tipo;
}

Cliente.prototype.nombreClienteSaldo = function() {
    return `Nombre: ${this.nombre}, Tu saldo es de ${this.saldo}, y el tipo de cliente es ${this.tipoCliente()}`
}

Cliente.prototype.retirarSaldo = function(retiro) {
    return this.saldo -= retiro;
}

const persona = new Cliente('Pedro', 20000);

console.log(persona.tipoCliente());
console.log(persona.nombreClienteSaldo());

persona.retirarSaldo(1000);

console.log(persona.nombreClienteSaldo());

// heredncia de protoytpe
Empresa.prototype = Object.create(Cliente.prototype);

const empresa = new Empresa('Udemy', 1000000, 12343948, 'educación')

console.log(empresa);
console.log(empresa.nombreClienteSaldo());