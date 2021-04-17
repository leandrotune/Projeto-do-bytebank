import { cliente } from "./Cliente.js";

import { Diretor } from "./funcionarios/Diretor.js";
import { Gerente } from "./funcionarios/Gerente.js";
import { SistemaAutenticacao } from "./funcionarios/SistemaAutenticacao.js";

const diretor = new Diretor("Leandro", 47353070870, 3.000);
diretor.cadastrarSenha("66377376");

const gerente = new Gerente("Sabrina", 58567252870, 2.000);
gerente.cadastrarSenha("66515462");

const jose = new cliente("Jose", 22554466, "123456");

const diretorEstaLogado = SistemaAutenticacao.login(diretor, "66377376");
const gerenteEstaLogado = SistemaAutenticacao.login(gerente, "66515462");
const joseEstaLogado = SistemaAutenticacao.login(jose, "123456")

console.log(gerenteEstaLogado, diretorEstaLogado, joseEstaLogado);
