import { Produto } from './produto'

export class Estoque {

    //Array que armazena todos os produtos presentes no estoque com criação prévia de objetos de forma estática
    produtos = [
        new Produto("Caixa de Violetas", 1, "/assets/fotos/1.jpg", "Plante alegria e colha muita felicidade com este charmoso vaso lousa com violetas. Dimensões do caixote: 24,5cm X 18cm X 13cm.", 35),
        new Produto("Buquê pequeno de rosas colombianas", 2, "/assets/fotos/2.jpg", "Delicado buquê com as clássicas rosas colombianas. 10 flores.", 50),
        new Produto("Buquê grande de rosas colombianas", 3, "/assets/fotos/3.jpg", "Elegante buquê com as belíssimas rosas colombianas. 30 flores", 90),
        new Produto("Buquê pequeno clássico rosas vermelhas", 4, "/assets/fotos/4.jpg", "Presenteie a pessoa querida com o clássico buquê de rosas vermelhas. 10 flores", 30),
        new Produto("Buquê grande clássico rosas vermelhas", 5, "/assets/fotos/5.jpg", "Demonstre seu afeto com o clássico buquê de rosas vermelhas. 36 flores", 55),
        new Produto("Buquê astromélias", 6, "/assets/fotos/6.jpg", "Alstroemérias creme, prontas para você colocar no vaso de sua preferência e decorar a sua casa ou escritório. 10 flores.", 55),
        new Produto("Caixote rústico de margaridas", 7, "/assets/fotos/7.jpg", "Alegre seu presenteado com a rainha do campo! Dois pequenos vasos de margaridas em um rústico e charmoso caixote de madeira envelhecida. Caixote com dimensões 30cm x 13cm x 10cm.", 110),
        new Produto("Vaso com suculenta", 8, "/assets/fotos/8.jpg", "Adicione ao seu kit uma linda suculenta. Bastante resistente, é perfeita para quem não dispõe de muito tempo, pois ela precisa apenas de um espaço no sol e 1 rega por mês. Dimensões do vaso: 10cmx10cmx10cm.", 15),
        new Produto("Buquê pequeno de rosas colombianas brancas", 9, "/assets/fotos/9.jpg", "Presenteie alguém especial com as elegantes rosas colombianas brancas. 10 flores.", 50),
        new Produto("Coroa fúnebre amarela", 10, "/assets/fotos/10.jpg", "Despeça-se da pessoa querida de uma forma carinhosa com essa belíssima e elegante coroa confeccionada com flores amarelas. 55cm de diâmetro.", 200),
        new Produto("Coroa fúnebre lilás", 11, "/assets/fotos/11.jpg", "Despeça-se da pessoa querida de uma forma carinhosa com essa belíssima e elegante coroa confeccionada com flores brancas e lilases. 55cm de diâmetro.", 200),
        new Produto("Buquê pequeno de girassóis", 12, "/assets/fotos/12.jpg", "Presenteie a pessoa amada com este alegre buquê de girassóis. 5 flores.", 15),
        new Produto("Mini buquê de astromélias rosas", 13, "/assets/fotos/13.jpg", "Torne o dia de alguém mais colorido com o delicado mini buquê de astromélias rosas. 5 flores.", 30),
        new Produto("Buquê médio de rosas degradê", 14, "/assets/fotos/14.jpg", "Expresse seu afeto pelo presentado com este delicado buquê de rosas em degradê. 32 rosas.", 65),
        new Produto("Buquê médio de rosas mistas", 15, "/assets/fotos/15.jpg", "Símbolo do amor! Presenteie alguém com este elegante buquê de rosas em tons mistos. 32 rosas.", 60),
        new Produto("Buquê pequeno de lírios brancos", 16, "/assets/fotos/16.jpg", "Alegre o dia de alguém com este delicado buquê de lírios brancos. 6 flores", 50),
        new Produto("Buquê pequeno de orquídeas brancas", 17, "/assets/fotos/17.jpg", "Buquê delicado com orquídeas phalaenópsis, ripsális, folhagens verdes, palha de coco e gravetos. 8 orquídeas.", 70),
        new Produto("Mini buquê de margaridinhas brancas", 18, "/assets/fotos/18.jpg", "Delicado buquê de margaridas em um arranjo adornado por folhas verdes de dracena. 40 flores.", 30),
        new Produto("Mini buquê de flores mistas", 19, "/assets/fotos/19.jpg", "Presenteie a pessoa querida e demonstre seu afeto com este pequeno buquê. 15 flores.", 25),
        new Produto("Vaso de flores mistas", 20, "/assets/fotos/20.jpg", "Para atrair a energia positiva do verão! Mistura de cores alegres, esse buquê é composto por rosas nacionais em diversos tons. Envie esse presente para quem você ama! 32 flores. Vaso nas dimensões: 22cm x 16cm x 16cm.", 70)
    ];

    constructor() {
    }

    //Busca produto por código
    buscaPorCod(cod: number){
        let prod = null;

        for(let i=0; i<this.produtos.length; i++){
            if(this.produtos[i].codigo==cod){
                prod = this.produtos[i];
            }
        }
        return prod;
    }

}