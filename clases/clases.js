class Cliente {
    constructor(nombre, saldo) {
        this.nombre = nombre;
        this.saldo = saldo;
    }

    imprimirSaldo() {
        return `Hola ${this.nombre}, tu saldo es de ${this.saldo}`;
    }



    static bienvenida() {
        return 'Bienvenido al cajero';
    }

}

class Empresa extends Cliente {
    constructor(nombre, saldo, telefono, tipo) {
        // va al constructro padre
        super(nombre, saldo);
        this.telefono = telefono;
        this.tipo = tipo;
    }
}


// trabajando con clase cliente
console.log(Cliente.bienvenida());

const Maria = new Cliente('Maria', 'Perez', 1000);



// trabajando con clase Empresa

const empresa = new Empresa('empresa 1', '1000000', 666666666, 'construccion');

console.log(empresa.imprimirSaldo());