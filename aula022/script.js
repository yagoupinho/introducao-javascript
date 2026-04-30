const divListaAlunos = document.querySelector("#lista_alunos")
let alunos = [
    { nome: "Yago", idade: 19 },
    { nome: "Ana", idade: 25 },
    { nome: "Bruno", idade: 30 },
    { nome: "Carla", idade: 28 },
    { nome: "Daniel", idade: 35 },
    { nome: "Eduarda", idade: 21 },
    { nome: "Felipe", idade: 27 },
    { nome: "Gabriela", idade: 24 },
    { nome: "Henrique", idade: 31 },
    { nome: "Isabela", idade: 26 },
    { nome: "João", idade: 29 },
    { nome: "Karina", idade: 23 },
    { nome: "Lucas", idade: 32 },
    { nome: "Mariana", idade: 20 },
    { nome: "Nicolas", idade: 33 },
    { nome: "Olivia", idade: 22 },
    { nome: "Paulo", idade: 36 },
    { nome: "Quésia", idade: 27 },
    { nome: "Rafael", idade: 34 },
    { nome: "Sofia", idade: 19 },
    { nome: "Tiago", idade: 28 },
    { nome: "Ursula", idade: 31 },
    { nome: "Victor", idade: 24 },
    { nome: "Wesley", idade: 29 },
    { nome: "Xavier", idade: 37 },
    { nome: "Yasmin", idade: 23 },
    { nome: "Zeca", idade: 40 },
    { nome: "Aline", idade: 26 },
    { nome: "Beto", idade: 38 },
    { nome: "Cíntia", idade: 21 }
];
// divListaAlunos.innerHTML = "<li><li>"
for(let i = 0; i < alunos.length; i++) {
    divListaAlunos.innerHTML += `<li> ${alunos[i].nome}, ${alunos[i].idade} anos</li>`
    // 
}

