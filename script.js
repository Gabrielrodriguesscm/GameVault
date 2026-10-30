const botaoExplorar = document.querySelector('.btn-primary');
const semResultado = document.querySelector('#no-results');
const searchBar = document.querySelector('.search-bar input')
const botaoFiltro = document.querySelectorAll('.filter-btn')
const grids = document.querySelector('#game-grids')
let categoryActive = 'all'
let searchText = ''

const jogos = [
    {nome: 'Persona 5 Royal', categoria: 'rpg', capa: './images/principal-games-section/persona-5-royal-cover-art.webp', descricao: `Persona 5 Royal é um RPG aclamado pela crítica, conhecido por sua narrativa envolvente,
                                personagens cativantes e estilo artístico único. Explore o mundo dos Phantom Thieves e
                                descubra os segredos por trás do coração humano.`, generos: 'JRPG/RPG' },
    {nome: 'Overwatch', categoria: 'fps', capa: './images/principal-games-section/overwatchcoverart.png', descricao: `Overwatch é um jogo de tiro em primeira pessoa (FPS) multiplayer, desenvolvido pela
                                Blizzard Entertainment. Com uma variedade de heróis únicos, cada um com habilidades
                                distintas, Overwatch oferece uma experiência de jogo dinâmica e estratégica.`, generos: 'FPS/HeroShooter'},
    {nome: 'Devil May Cry 5', categoria: 'acao', capa: './images/principal-games-section/7622168-devil-may-cry-5-xbox-one-front-cover.jpg', descricao: `Devil May Cry 5 é um jogo de ação hack and slash desenvolvido pela Capcom. Combinando
                                elementos de narrativa envolvente e combate frenético, o jogo oferece uma experiência
                                única para os fãs da série.`, generos: 'Ação, Aventura, Hack and Slash'}                                    
    
]

jogos.forEach(function (jogo){
        grids.innerHTML += `<div class="game-card" data-category="${jogo.categoria}">
                    <div class="card-image-container">
                        <img src="${jogo.capa}" alt="${jogo.nome}">
                        <div class="card-overlay">
                            <p>${jogo.descricao}</p>
                        </div>
                    </div>
                    <h3>${jogo.nome}</h3>
                    <span class="game-category">${jogo.generos}</span>
                </div>`
    })

const gameCards = document.querySelectorAll('#games .game-card')

botaoExplorar.addEventListener('click', function(event) {
    event.preventDefault();
    

    const secaoGames = document.getElementById('games');

    secaoGames.scrollIntoView({ behavior: 'smooth' });
});


botaoFiltro.forEach(function (botao){
    botao.addEventListener('click', function(event) {
        
         botaoFiltro.forEach(function (b){
            b.classList.remove('active')
        })
        
        botao.classList.add('active')

        categoryActive = botao.dataset.filter
        aplicarFiltro()

        
    })
})


function aplicarFiltro() {
    let visiveis = 0

    gameCards.forEach(function(card){
       const nome = card.querySelector('h3').textContent.toLowerCase()

        const categoriaBate = categoryActive === 'all' || card.dataset.category === categoryActive

        const nomeBate = nome.includes(searchText)


        if (nomeBate && categoriaBate){
            card.classList.remove('hidden')
            visiveis = visiveis + 1
        }
        else{
            card.classList.add('hidden')
        }
    })

    if (visiveis === 0) {
        semResultado.classList.remove('hidden')
    }
    else {
        semResultado.classList.add('hidden')
    }
}

searchBar.addEventListener('input', function(){
    searchText = searchBar.value.toLowerCase()
    aplicarFiltro()
})







