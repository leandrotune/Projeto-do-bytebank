import { conta } from "./Conta.js";

export class ContaPoupanca extends conta{
   constructor(saldoInicial, cliente, agencia){
       super(saldoInicial, cliente, agencia);
   }
}
