const botaoExplorar = document.querySelector('.btn-primary');
const semResultado = document.querySelector('#no-results');
const searchBar = document.querySelector('.search-bar input')
const botaoFiltro = document.querySelectorAll('.filter-btn')
const gameCards = document.querySelectorAll('#games .game-card')
let categoryActive = 'all'
let searchText = ''

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
