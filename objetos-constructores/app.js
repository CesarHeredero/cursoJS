function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
    this.tipoCliente = function() {
        let tipo;
        if (this.saldo > 10000) {
            tipo = 'gold';
        } else if (this.saldo > 500) {
            tipo = 'premium';
        } else {
            tipo = 'normal';
        }
        return tipo;
    }

}
const persona1 = new Cliente('cesar', 1000000);
const persona2 = new Cliente('rigoberto', 600);
const persona3 = new Cliente('benito', 100);

console.log(persona1, persona1.tipoCliente());