export class conta{
    constructor(saldoInicial, cliente, agencia){
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

    // método 
    sacar(valor){
        let taxa = 1;
        const valorSacado = taxa * valor;
        if(this._saldo >= valorSacado){
            this._saldo -= valorSacado;
            return valorSacado;
        }
    }

    // método
    depositar(valor){
        if(valor <= 0)
        {
           return
        }
        this._saldo += valor;
    }

    // método
    transferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}