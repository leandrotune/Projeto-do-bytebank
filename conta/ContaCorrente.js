import { conta } from "./Conta.js";

export class ContaCorrente extends conta{
    static numeroDeContas = 0;

    constructor(cliente, agencia){
        super(0, cliente, agencia);
        ContaCorrente.numeroDeContas += 1; // número de contas toda vez que criar uma conta adicionar 1.
    }

    // sobreescrevendo o comportamento de sacar
    sacar(valor){
        let taxa = 1.1;
        return this._sacar(valor, taxa);
    }
}