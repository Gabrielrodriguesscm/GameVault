const botaoExplorar = document.querySelector('.btn-primary');

botaoExplorar.addEventListener('click', function(event) {
    event.preventDefault();
    

    const secaoGames = document.getElementById('games');

    secaoGames.scrollIntoView({ behavior: 'smooth' });
});

