import { conta } from "./Conta.js";

export class ContaCorrente extends conta{
    static numeroDeContas = 0;

    constructor(cliente, agencia){
        super(0, cliente, agencia);
        ContaCorrente.numeroDeContas += 1; // número de contas toda vez que criar uma conta adicionar 1.
    }

   
}