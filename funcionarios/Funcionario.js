export class Funcionario {
    constructor(nome, cpf, salario){
        this._nome = nome;
        this._cpf = cpf;
        this._salario = salario;

        this._bonificacao = 1; // bonificação de 100% 
    }
    //acessor: somente saber o valor do senha: a senha do funcionário
    autenticar(senha){
        return senha == this._senha;
    }

    // método para cadastrar a senha de um funcionário 
    cadastrarSenha(senha){
        this._senha = senha; 
    }
}