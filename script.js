const botaoExplorar = document.querySelector('.btn-primary');

botaoExplorar.addEventListener('click', function(event) {
    event.preventDefault();
    

    const secaoGames = document.getElementById('games');

    secaoGames.scrollIntoView({ behavior: 'smooth' });
});

const botaoFiltro = document.querySelectorAll('.filter-btn')
const gameCards = document.querySelectorAll('#games .game-card')

botaoFiltro.forEach(function (botao){
    botao.addEventListener('click', function(event) {
        
         botaoFiltro.forEach(function (b){
            b.classList.remove('active')
        })
        
        botao.classList.add('active')

        const filtro = botao.dataset.filter

        gameCards.forEach(function (card) {
           if (filtro === 'all' || card.dataset.category === filtro){
             card.classList.remove('hidden')
           }
           else{
             card.classList.add('hidden')
           }

        })

    })
})
