const Cliente = {
    imprimirSaldo: function() {
        return `hola ${this.nombre} tu saldo es de ${this.saldo}`;
    },
    retirarSaldo: function(retiro) {
        return this.saldo -= retiro;
    }
}

//Crear el objeto
const mary = Object.create(Cliente);
mary.nombre = 'Mary';
mary.saldo = 1000;

mary.retirarSaldo(300);

console.log(mary.imprimirSaldo());