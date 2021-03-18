import { cliente } from "./Cliente.js"

export class ContaCorrente {
    static numeroDeContas = 0;
    agencia;

    _cliente;
    _saldo = 0;

    set cliente(novoValor){
        if(novoValor instanceof cliente){
            this._cliente = novoValor;
        }
    }

    get saldo(){
        return this._saldo;
    }

    constructor(agencia, cliente){
        this.agencia = agencia;
        this._cliente = cliente;
        ContaCorrente.numeroDeContas++;
    }
 
    depositar(valor){
        if(valor < 0)
        {
            return
        }
        this._saldo += valor;
    }

    sacar(valor){
        if(this._saldo >= valor){
            this._saldo -= valor;
            return valor;
        }
    }

    transferir(valor, conta){
        const ValorSacado = this.sacar(valor);
        conta.depositar(ValorSacado);
    }

}