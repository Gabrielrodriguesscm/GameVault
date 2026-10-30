# GameVault 🎮

Vitrine de jogos feita com HTML, CSS e JavaScript puros. O projeto nasceu como um estudo de front-end e vai evoluir para uma loja de games simulada, com carrinho e checkout.

🔗 **Demo:** (https://gabrielrodriguesscm.github.io/GameVault/)

![Prévia do GameVault](./images/preview.png)


## Funcionalidades

- **Filtro por categoria:** botões Todos, Ação, RPG e FPS mostram só os jogos da categoria escolhida.
- **Busca por nome:** o campo do cabeçalho filtra os cards enquanto você digita.
- **Filtro e busca combinados:** os dois funcionam ao mesmo tempo, controlados por uma única função.
- **Mensagem de "nenhum jogo encontrado"** quando nada combina com os filtros.
- **Rolagem suave** do botão "Explorar Jogos" até a seção de jogos.
- **Descrição ao passar o mouse** nos cards de destaque.
- **Layout responsivo** para desktop, tablet e celular.

## Tecnologias

- HTML5
- CSS3 (Grid, Flexbox, media queries)
- JavaScript (DOM, eventos, manipulação de classes)
- Git e GitHub Pages

## O que pratiquei neste projeto

- Selecionar e percorrer elementos do DOM com `querySelectorAll` e `forEach`
- Reagir a eventos de clique e digitação (`click`, `input`)
- Guardar o estado da página (categoria ativa e texto da busca) em variáveis
- Centralizar a lógica de exibição em uma única função, evitando código duplicado
- Montar layouts com CSS Grid e adaptá-los a várias telas

## Como rodar localmente

```bash
git clone (https://github.com/Gabrielrodriguesscm/GameVault)
cd GameVault
```

Abra o `index.html` no navegador. Se usa o VS Code, a extensão **Live Server** recarrega a página sozinha a cada alteração.

## Estrutura do projeto

```
GameVault/
├── index.html
├── styles.css
├── script.js
└── images/
    ├── principal-games-section/
    └── games-you-may-like-section/
```

## Próximos passos

- [X] Guardar os jogos em um array de objetos e gerar os cards pelo JavaScript
- [ ] Preço nos cards e carrinho de compras (salvo no `localStorage`)
- [ ] Página de detalhes de cada jogo
- [ ] Checkout simulado
- [ ] Lista de desejos e ordenação por preço ou nota
- [ ] Sugestões de jogos ao digitar na busca

## Aviso

Projeto sem fins comerciais, criado para estudo e portfólio. As capas e os nomes dos jogos pertencem aos seus respectivos donos.

## Autor

**Gabriel Rodrigues de Souza**
[GitHub](https://github.com/Gabrielrodriguesscm) · [LinkedIn](https://www.linkedin.com/in/gabrielrodriguesscm/)
