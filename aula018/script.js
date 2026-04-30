// Introdução a objetos

let aluno = {
    nome : " Yago",
    idade : 19,
    curso : "ads",
    materias : [" ui/ux design", " lógica de programação", "Modelagem de banco de dados"],
    endereço : {
        cidade : "São Paulo",
        bairro : " Pirituba",
        rua : "Doutor Luis La Scala Junior, 86"

    }
}


aluno.idade =  20
aluno.status = true
delete aluno.idade


console.log(aluno.nome)
console.log(aluno.curso)
console.log(aluno.idade)
console.log(aluno.materias [2])
console.log(aluno.endereço.rua)