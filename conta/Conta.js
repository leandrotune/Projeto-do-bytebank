import { cliente } from "./Cliente.js"

/* Classe abstrata
    * ela só funcionar para ser herdada
    * ela não serve para se instanciada ( ela não pode ser constrúida)
*/
export class conta{
    constructor(saldoInicial, cliente, agencia){
        if(this.constructor == conta){
            throw new Error("Você não deveria instanciar um objeto do tipo Conta diretamente, pois essa é uma classe abstrata");
        }

        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
       
    }

     //acessor: atribuir um novo valor ao cliente. um novo cliente como valor
     set cliente(novoValor){
        if(novoValor instanceof cliente){ 
            this._cliente = novoValor;    
        }
    }

    //acessor: conseguir ter acesso ao valor.
    get cliente(){
        return this._cliente;
    }

    //acessor: conseguir ter acesso ao saldo.
    get saldo(){
        return this._saldo;
    }

    // método abstrato
    sacar(valor){
        throw new Error("O método Sacar da conta é abstrato");
    }

    _sacar(valor, taxa){
        const valorSacado = taxa * valor;
        if(this._saldo >= valorSacado){
            this._saldo -= valorSacado;
            return valorSacado;
        }

        return 0;
    }

    // método
    depositar(valor){
        this._saldo += valor;
    }

    // método
    transferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}