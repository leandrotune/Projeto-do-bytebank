/*class são atributos: nesse caso atributos dos clientes ou propriedades */
class cliente {
    nome;
    cpf;
}

class ContaCorrente {
    agencia; 
    saldo;

    sacar(valor){
        if(this.saldo >= valor){
            this.saldo -= valor;
        }
    }
}

const cliente1 = new cliente();
cliente1.nome = "Ricardo";
cliente1.cpf = 1112223309;

const cliente2 = new cliente();
cliente2.nome = "Alice";
cliente2.cpf = 8882223309;

const contaCorrenteRicardo = new ContaCorrente ();
contaCorrenteRicardo.saldo = 0;
contaCorrenteRicardo.agencia = 1001;

console.log(contaCorrenteRicardo.saldo);
contaCorrenteRicardo.saldo = 100;
console.log(contaCorrenteRicardo.saldo);
contaCorrenteRicardo.sacar(200);




console.log(contaCorrenteRicardo.saldo);
console.log(cliente1);
console.log(cliente2);


