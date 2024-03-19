class Livro {
    constructor(pNome, pPreco) {
        this.Nome = pNome;
        this.Preco = pPreco
    }

    get Nome() { return this.Nome; }
    set Nome(pNome) { this.nome = pNome; }
    
    get Preco() { return this.Preco; }
    set Preco(pPreco) { this.preco = pPreco; }

}
var obj_livro1 /* mas poderia ser qualquer nome*/ = new Livro("Use a cabeça Java", 100);
var obj_livro2 /* mas poderia ser qualquer nome*/ = new Livro("Use a cabeça C#", 190);

var lista = []
lista.push(obj_livro1) //adiciona elementos ao final da array lista, nesse caso
lista.push(obj_livro2)

console.log(lista[0])
console.log(lista[1])
// output: Livro { nome: 'Use a cabeça ...', preco: ...}