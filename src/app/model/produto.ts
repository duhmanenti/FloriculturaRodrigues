export class Produto{
    nome: String;
    descricao: String;
    imagem: String;
    codigo: number;
    preco: number;

    constructor(nome: String,  codigo: number, imagem: String, descricao: String, preco: number){
        this.nome=nome;
        this.codigo=codigo;
        this.imagem=imagem;
        this.descricao=descricao;
        this.preco=preco;
    }

}