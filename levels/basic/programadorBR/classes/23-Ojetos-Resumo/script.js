// Jeito UM de cirar objeto (Forma direta):
var a = {
    nome: "Igor",
    sobrenome: "Oliveira",
}
console.log(a);


// Jeito DOIS de criar objeto (Forma com função):
function objeto(nome, sobrenome){
    return {nome: nome, sobrenome: sobrenome}
} // Aqui eu crio o objeto dentro da função e retorno ele;
console.log(objeto(("Vinicius", "Pereira")));


// Jeito TRÊS de criar ojbeto (Forma Com classe):
function obj(nome, sobrenome){
        this.nome = nome;
        this.sobrenome =  sobrenome;
} // Essa forma obriga eu criar a instância, é como se fosse a "Class", ela não retorna nada, por isso tenho qie isar o Cosntrutuor New;
var a = new obj("Julio", "Batista");
console.log(a);



