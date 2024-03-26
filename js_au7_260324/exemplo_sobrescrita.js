class Funcionario{
    constructor(pNome, pSalario){
        this.Nome = pNome
        this.Salario = pSalario
    }   

    get Nome(){return this.Nome}
    set Nome(pNome){this.nome = pNome}

    get Salario(){return this.Salario}
    set Salario(pSalario){this.salario = pSalario}
    

    calcularSalario(){

    }

}

class Vendedor extends Funcionario{ // extends = herança
    constructor(pNome, pSalario, pComissao){
        super(pNome,pSalario) // Chama o construtor da mãe e da os atributos
        this.Comissao = pComissao

    }
    get Comissao(){return this.Comissao}
    set Comissao(pComissao){this.comissao = pComissao}

    calcularSalario(){
        return this.salario + this.comissao
    }
}
class OperadorCaixa extends Funcionario{ // extends = herança
    constructor(pNome, pSalario, pBonus){
        super(pNome,pSalario) // Chama o construtor da mãe e da os atributos
        this.Bonus = pBonus

    }
    get Bonus(){return this.Bonus}
    set Bonus(pBonus){this.bonus = pBonus}

    calcularSalario(){
        return this.salario + this.bonus
    }
}

var vendedor = new Vendedor("Luiz", 1100, 150)
console.log(vendedor.calcularSalario())

var caixa = new OperadorCaixa("Andre", 1400, 100)
console.log(caixa.calcularSalario())