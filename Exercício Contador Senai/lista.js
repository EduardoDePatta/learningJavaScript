//Lista de filmes com título, ano, duração e nota.
//A atividade é criar uma codificação simples de contador e classificação em js

let listaFilmes = [
    {
        "titulo": "O Poderoso Chefão",
        "ano": "1972",
        "duração": "2h55",
        "nota": "4.8"
    },
    {
        "titulo": "A Lista de Schindler",
        "ano": "1993",
        "duração": "3h15",
        "nota": "3.9"
    },
    {
        "titulo": "Um Sonho de Liberdade",
        "ano": "1994",
        "duração": "2h22",
        "nota": "4.8"
    },
    {
        "titulo": "O Rei Leão",
        "ano": "1994",
        "duração": "1h29",
        "nota": "4.7"
    },
    {
        "titulo": "Forest Gump - O Contador de Histórias",
        "ano": "1994",
        "duração": "2h20",
        "nota": "4.7"
    },
    {
        "titulo": "O Senhor dos Anéis",
        "ano": "2003",
        "duração": "3h21",
        "nota": "4.7"
    },
    {
        "titulo": "Vingadores: Ultimato",
        "ano": "2019",
        "duração": "3h01",
        "nota": "3.9"
    },
    {
        "titulo": "A Espera de um Milagre",
        "ano": "2000",
        "duração": "3h09",
        "nota": "4.7"
    }
]

let maxI = listaFilmes.length;

console.log(`\nFiz uma lista de filmes com ${maxI} títulos. \n`)

for (let i = 0; i < maxI; i++){
    console.log(`Filme ${i+1}: O filme ${listaFilmes[i].titulo}, do ano ${listaFilmes[i].ano}, com duração de ${listaFilmes[i].duração} recebeu nota ${listaFilmes[i].nota} pelos usuários do site adorocinema.com.`)
    console.log("--------------")
}
