//  soma

function soma(numero01_, numero02_) {
    return numero01_ + numero02_; 
}

soma(value, value01);

// subtrair

function subtrair(numero01_, numero02_) {
    return numero01_ - numero02_; 
}

subtrair(value, value02); 



// classe de cadastro de dados...

class Apresentaçao {
    constructor(name, idade , estadoCivil){
        this.name = name; 
        this.idada = idade; 
        this.estadoCivil = estadoCivil;  
    }

    static meusDados() {
        console.log(`Meu nome é ${this.name} e eu tenho ${this.idada} de idade, e no momento estou ${this.estadoCivil}`);
    }
}

const joao_vitor = new Apresentaçao('vitor lima', 22, 'compromedito');

Apresentaçao.meusDados(joao_vitor);
