import { cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";
import { ContaPoupanca } from "./ContaPoupanca.js";
import { conta } from "./Conta.js"

const cliente1 = new cliente("Ricardo", 1112223309);

const contaCorrenteRicardo = new ContaCorrente(cliente1, 1001);
contaCorrenteRicardo.depositar(500);
contaCorrenteRicardo.sacar(100);

const ContaPoupancaRicardo = new ContaPoupanca(50, cliente1, 1001);

console.log(contaCorrenteRicardo);
console.log(ContaPoupancaRicardo);






