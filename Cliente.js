/*class são atributos: nesse caso atributos dos clientes ou propriedades */
export class cliente {
     get cpf(){//acessor: somente saber o valor do cpf: seu número de cpf
        return this._cpf;
    }
    
    constructor(nome, cpf, senha){
        this.nome = nome;
        this._cpf = cpf;
        this._senha = senha;
    }

    // cliente sempre vai ser autenticado
    autenticar(){
        return true;
    }
}