class Operacoes{
    constructor(){

    }

    Somar(valorA, valorB){
        console.log("Resultado: " + (valorA+valorB))
    }

    Somar(valorA, valorB, valorC){
        console.log("Resultado: "+ (valorA+valorB+valorC))
    }
}

var obj = new Operacoes()
obj.Somar(10,20)
obj.Somar(20,20,20)
