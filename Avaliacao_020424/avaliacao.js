class Pessoa{
    constructor(pNome, pEndereco) {
        this._pNome = pNome;
        this._pEndereco = pEndereco;
    }

    get pNome() {
        return this._pNome;
    }

    set pNome(pNome) {
        this._pNome = value;
    }

    get pEndereco() {
        return this._pEndereco;
    }

    set pEndereco(pEndereco) {
        this._pEndereco = value;
    }

    imprimir(){
        return "Nome: " + this.pNome + "\nEndereço: " + this.pEndereco;
    }
}

class Juridica extends Pessoa{
    constructor(pNome, pEndereco, pCnpj, pRazSocial) {
        super(pNome, pEndereco);
        this._pCnpj = pCnpj;
        this._pRazSocial = pRazSocial;}
    get pCnpj() {
        return this._pCnpj;
    }

    set pCnpj(value) {
        this._pCnpj = value;}
    get pRazSocial() {return this._pRazSocial;}
    set pRazSocial(value) {this._pRazSocial = value;}
    imprimir(){
        return super.imprimir() + "\nCNPJ: "+ this._pCnpj +
            "\nRazão Social: " + this._pRazSocial;
    }
}

class Fisica extends Pessoa{
    constructor(pNome, pEndereco, pNascimento, pCpf) {
        super(pNome, pEndereco);
        this._pNascimento = pNascimento;
        this._pCpf = pCpf;
    }
    get pNascimento() {return this._pNascimento;}
    set pNascimento(value) {this._pNascimento = value;}
    get pCpf() {return this._pCpf;}
    set pCpf(value) {this._pCpf = value;}

    imprimir() {
        return super.imprimir() + "\nCPF: " + this._pCpf +
            "\nData de nascimento: " +this._pNascimento;
    }
}
var pFisico = new Fisica("Luiz Gonzaga",
    "Av. Penetração Norte-Sul",
    "29/02/1994", "242.144.121-02")
console.log(pFisico.imprimir()+ "\n")

var pJuridico = new Juridica("Lima May",
    "Praia do Arrombado",
    "05.311.244/0001-09",
    "Senhor dos Pastéis tm.")
console.log(pJuridico.imprimir())