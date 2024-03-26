class Conta{
    constructor(){
        this.Saldo = 0;

    }
    get Saldo(){return this.saldo}
    set Saldo(pSaldo){this.saldo = pSaldo}

    imprimir(){
        return "Saldo: " + this.saldo

    }
}

class Corrente extends Conta { // criação de classe filha
    constructor(pLimite){
        super()
        this.Limite = pLimite
    }
    get Limite(){return this.Limite}
    set Limite(pLimite){this.limite = pLimite}

    imprimir(){
        return super.imprimir() + "\nLimite: " + this.limite
    }
}
//
var obj_cc = new Corrente(1000)
obj_cc.saldo = 700
console.log(obj_cc.imprimir())