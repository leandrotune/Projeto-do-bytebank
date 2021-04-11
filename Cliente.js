/*class são atributos: nesse caso atributos dos clientes ou propriedades */
export class cliente {
    constructor(nome, cpf){
        this.nome = nome;
        this._cpf = cpf;
    }

     //acessor: somente saber o valor do cpf: seu número de cpf
     get cpf(){
        return this._cpf;
    }
}