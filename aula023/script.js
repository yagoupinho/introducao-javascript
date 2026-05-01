const divListaFilmes = document.querySelector("#lista_filmes")
const btnTerror = document.querySelector("#btn_terror")

function filtrarFilmesTerror() {
    const filmesTerror = filmes.filter((filmes)=> {
        return filmes.genero == "terror"
    })
    console.log(filmesTerror)
}


btnTerror.addEventListener("Click", filtrarFilmesTerror)

let filmes = [

    { titulo: "John Wick", genero: "Ação", categoria: "Ação", sinopse: "Ex-assassino aposentado volta à ativa após um ataque pessoal brutal. Ele enfrenta uma organização criminosa em busca de vingança implacável." },
    { titulo: "Mad Max: Fury Road", genero: "Ação/Aventura", categoria: "Ação", sinopse: "Em um mundo pós-apocalíptico, Max se une a Furiosa para escapar de um tirano. Uma perseguição intensa domina toda a jornada." },
    { titulo: "Gladiator", genero: "Ação/Drama", categoria: "Ação", sinopse: "General romano é traído e perde tudo que ama. Ele se torna gladiador para buscar vingança contra o imperador." },
    { titulo: "The Dark Knight", genero: "Ação/Crime", categoria: "Ação", sinopse: "Batman enfrenta o Coringa, um vilão que espalha caos em Gotham. A batalha testa os limites da justiça e da moral." },
    { titulo: "Mission: Impossible – Fallout", genero: "Ação/Espionagem", categoria: "Ação", sinopse: "Ethan Hunt precisa impedir um plano terrorista global. Ele encara missões arriscadas e escolhas difíceis." },
    { titulo: "Die Hard", genero: "Ação/Thriller", categoria: "Ação", sinopse: "Um policial fica preso em prédio dominado por terroristas. Sozinho, ele luta para salvar reféns e sobreviver." },
    { titulo: "The Matrix", genero: "Ação/Ficção científica", categoria: "Ação", sinopse: "Neo descobre que o mundo é uma simulação criada por máquinas. Ele entra em uma guerra para libertar a humanidade." },
    { titulo: "Avengers: Endgame", genero: "Ação/Super-herói", categoria: "Ação", sinopse: "Após grande derrota, os heróis planejam reverter a destruição causada por Thanos. Uma missão final decide o destino do universo." },
    { titulo: "Kill Bill: Volume 1", genero: "Ação/Artes marciais", categoria: "Ação", sinopse: "Uma mulher traída acorda de coma buscando vingança. Ela enfrenta antigos aliados em combates violentos." },
    { titulo: "Terminator 2: Judgment Day", genero: "Ação/Ficção científica", categoria: "Ação", sinopse: "Um robô é enviado para proteger um garoto crucial para o futuro. Outro exterminador tenta eliminá-lo a qualquer custo." },

    { titulo: "The Conjuring", genero: "Terror", categoria: "Terror", sinopse: "Investigadores paranormais ajudam família aterrorizada por entidade maligna. A presença cresce cada vez mais perigosa." },
    { titulo: "Hereditary", genero: "Terror/Drama", categoria: "Terror", sinopse: "Após uma morte, eventos estranhos atingem uma família. Segredos sombrios revelam uma influência sobrenatural." },
    { titulo: "The Exorcist", genero: "Terror", categoria: "Terror", sinopse: "Garota começa a apresentar comportamento assustador. Padres tentam expulsar um demônio poderoso." },
    { titulo: "A Nightmare on Elm Street", genero: "Terror", categoria: "Terror", sinopse: "Jovens são atacados em seus sonhos por Freddy Krueger. Dormir se torna mortal." },
    { titulo: "Halloween", genero: "Terror/Slasher", categoria: "Terror", sinopse: "Um assassino escapa e retorna para matar novamente. A cidade vive uma noite de terror." },
    { titulo: "Get Out", genero: "Terror/Suspense", categoria: "Terror", sinopse: "Jovem visita família da namorada e percebe algo estranho. Ele descobre um plano perturbador." },
    { titulo: "It", genero: "Terror", categoria: "Terror", sinopse: "Grupo de crianças enfrenta entidade que assume forma de palhaço. O medo ganha forma real." },
    { titulo: "The Ring", genero: "Terror/Mistério", categoria: "Terror", sinopse: "Uma fita misteriosa causa mortes após ser assistida. Uma jornalista investiga a origem da maldição." },
    { titulo: "The Babadook", genero: "Terror psicológico", categoria: "Terror", sinopse: "Um livro infantil desperta uma presença assustadora. Mãe e filho são consumidos pelo medo." },
    { titulo: "Insidious", genero: "Terror sobrenatural", categoria: "Terror", sinopse: "Um garoto entra em coma ligado a um mundo espiritual. Seus pais enfrentam entidades perigosas." },

    { titulo: "Superbad", genero: "Comédia", categoria: "Comédia", sinopse: "Dois amigos querem aproveitar a última fase da escola. Eles se metem em situações absurdas tentando impressionar garotas." },
    { titulo: "The Hangover", genero: "Comédia", categoria: "Comédia", sinopse: "Amigos acordam após festa sem lembrar do que aconteceu. Eles precisam refazer os passos para encontrar o noivo desaparecido." },
    { titulo: "Step Brothers", genero: "Comédia", categoria: "Comédia", sinopse: "Dois adultos imaturos passam a viver juntos como irmãos. A convivência gera caos e situações ridículas." },
    { titulo: "Mean Girls", genero: "Comédia", categoria: "Comédia", sinopse: "Adolescente entra em grupo popular do colégio. Rivalidades e intrigas dominam sua vida social." },
    { titulo: "Dumb and Dumber", genero: "Comédia", categoria: "Comédia", sinopse: "Dois amigos extremamente ingênuos partem em viagem. Eles causam confusões por onde passam." },
    { titulo: "Anchorman: The Legend of Ron Burgundy", genero: "Comédia", categoria: "Comédia", sinopse: "Apresentador enfrenta a chegada de uma mulher na equipe. Seu ego cria situações hilárias." },
    { titulo: "Bridesmaids", genero: "Comédia", categoria: "Comédia", sinopse: "Uma mulher tenta ser a melhor madrinha de casamento. A competição gera situações caóticas." },
    { titulo: "Groundhog Day", genero: "Comédia/Fantasia", categoria: "Comédia", sinopse: "Homem fica preso no mesmo dia repetidamente. Ele tenta mudar seu destino." },
    { titulo: "21 Jump Street", genero: "Comédia/Ação", categoria: "Comédia", sinopse: "Policiais se infiltram em escola para investigar drogas. A missão vira uma comédia de erros." },
    { titulo: "The Mask", genero: "Comédia/Fantasia", categoria: "Comédia", sinopse: "Um homem comum encontra máscara mágica. Ele ganha poderes e vive situações malucas." },

    { titulo: "Toy Story", genero: "Animação/Aventura", categoria: "Animação", sinopse: "Brinquedos ganham vida quando humanos não estão presentes. Eles enfrentam mudanças com a chegada de um novo brinquedo." },
    { titulo: "Frozen", genero: "Animação/Fantasia", categoria: "Animação", sinopse: "Uma princesa parte em busca da irmã com poderes de gelo. Ela tenta salvar o reino de um inverno eterno." },
    { titulo: "The Lion King", genero: "Animação/Drama", categoria: "Animação", sinopse: "Jovem leão foge após tragédia familiar. Ele precisa aceitar seu destino como rei." },
    { titulo: "Spirited Away", genero: "Animação/Fantasia", categoria: "Animação", sinopse: "Garota entra em mundo mágico cheio de espíritos. Ela precisa salvar seus pais transformados." },
    { titulo: "Shrek", genero: "Animação/Comédia", categoria: "Animação", sinopse: "Ogro aceita missão para recuperar seu lar. Ele descobre amizade e amor no caminho." },
    { titulo: "Finding Nemo", genero: "Animação/Aventura", categoria: "Animação", sinopse: "Um peixe atravessa o oceano para salvar seu filho. Ele encontra aliados inesperados na jornada." },
    { titulo: "Up", genero: "Animação/Aventura", categoria: "Animação", sinopse: "Idoso realiza sonho de viajar em casa voadora. Ele forma amizade com um garoto aventureiro." },
    { titulo: "Coco", genero: "Animação/Musical", categoria: "Animação", sinopse: "Menino entra no mundo dos mortos em busca de respostas. Ele descobre a importância da família." },
    { titulo: "Inside Out", genero: "Animação/Comédia", categoria: "Animação", sinopse: "Emoções controlam as ações de uma garota. Elas enfrentam mudanças importantes na vida dela." },
    { titulo: "How to Train Your Dragon", genero: "Animação/Aventura", categoria: "Animação", sinopse: "Jovem viking faz amizade com dragão raro. Ele muda a visão de seu povo sobre essas criaturas." },

    { titulo: "Jurassic Park", genero: "Aventura/Ficção científica", categoria: "Aventura", sinopse: "Cientistas criam parque com dinossauros clonados. Quando tudo dá errado, a sobrevivência vira prioridade." },
    { titulo: "Indiana Jones and the Raiders of the Lost Ark", genero: "Aventura/Ação", categoria: "Aventura", sinopse: "Arqueólogo busca relíquia poderosa antes dos nazistas. A aventura envolve armadilhas e perigos constantes." },
    { titulo: "Pirates of the Caribbean: The Curse of the Black Pearl", genero: "Aventura/Fantasia", categoria: "Aventura", sinopse: "Pirata excêntrico tenta recuperar seu navio. Ele enfrenta uma tripulação amaldiçoada." },
    { titulo: "The Lord of the Rings: The Fellowship of the Ring", genero: "Aventura/Fantasia", categoria: "Aventura", sinopse: "Um grupo parte para destruir um anel maligno. A jornada define o destino da Terra Média." },
    { titulo: "The Hobbit: An Unexpected Journey", genero: "Aventura/Fantasia", categoria: "Aventura", sinopse: "Um hobbit é levado a uma aventura inesperada. Ele ajuda anões a recuperar seu reino." },
    { titulo: "Avatar", genero: "Aventura/Ficção científica", categoria: "Aventura", sinopse: "Um humano controla corpo alienígena em outro planeta. Ele se envolve em conflito entre espécies." },
    { titulo: "Life of Pi", genero: "Aventura/Drama", categoria: "Aventura", sinopse: "Jovem sobrevive em bote com um tigre. A experiência desafia sua fé e coragem." },
    { titulo: "Jumanji", genero: "Aventura/Fantasia", categoria: "Aventura", sinopse: "Um jogo mágico libera perigos no mundo real. Jogadores precisam terminar a partida para sobreviver." },
    { titulo: "The Revenant", genero: "Aventura/Drama", categoria: "Aventura", sinopse: "Explorador é deixado para morrer na natureza. Ele luta para sobreviver e buscar vingança." },
    { titulo: "King Kong", genero: "Aventura/Fantasia", categoria: "Aventura", sinopse: "Equipe encontra gorila gigante em ilha misteriosa. A criatura é levada para a cidade com consequências trágicas." }
];

filmes.forEach((filmes) => {
    divListaFilmes.innerHTML += `<li> <strong>${filmes.titulo}</strong> <br>
<strong> ${filmes.sinopse}</strong> <br>
<strong> ${filmes.genero} </strong> </li>`
})
    console.log(`
____________________________________________________________________________
    titulo: ${filme.titulo}
    titulo: ${filme.sinopse}
    titulo: ${filme.genero}
____________________________________________________________________________
    `)


// for(let i = 0; i < filmes.length; i++) {
//     divListaFilmes.innerHTML += `<li> <strong> Título: </strong> ${filmes[i].titulo}, <br>
//     <strong> Sinopse: </strong>${filmes[i].sinopse}, <br>
//     <strong> Gênero: </strong>${filmes[i].genero} </li>`

