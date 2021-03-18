export class cliente{
    _nome; 
    _cpf;
    _rg;

    get nome(){
        return this._nome;
    }

    get cpf(){
        return this._cpf;
    }

    get rg(){
        return this._rg;
    }

    constructor(nome, cpf, rg){
        this._nome = nome;
        this._cpf = cpf;
        this._rg = rg;
    }
}
