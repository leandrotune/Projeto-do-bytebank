import { cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new cliente("Leandro", 47353070870, 396706965);
const conta1 = new ContaCorrente(1001, cliente1);
conta1.depositar(500);

const cliente2 = new cliente("Sabrina", 22245698521, 354205805);
const conta2 = new ContaCorrente(1001, cliente2);
conta2.depositar(350);

const cliente3 = new cliente("Isabella", 22245456852, 360252483);
const conta3 = new ContaCorrente(1001, cliente3);
conta3.depositar(200);

conta1.transferir(200, conta2);
console.log("números de contas Corrente do Nubank: " + ContaCorrente.numeroDeContas);
console.log(conta1);
console.log(conta2);
console.log(conta3);


