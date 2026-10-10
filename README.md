# Exp.Store - E-commerce de Produtos Digitais

Bem-vindo ao repositório de frontend do **Exp.Store** — um e-commerce de jogos.

> [!NOTE]
>
> A Exp.Store é um exercício proposto para o programa de voluntários da [Focus](https://www.focustecnologias.com.br/), uma software house
>
> Levando isso em consideração, existe um hub para todos os exercícios que realizei no programa de voluntários da Focus e ele está localizado na branch [main](https://github.com/genzo-dev/focus-voluntary).

## Funcionalidades

- **Tema claro/escuro** — Permite alternar entre os temas claro e escuro, persistindo a preferência no localStorage para visitas futuras (pode ser visto no `js/theme-toggle.js`);
- **Responsividade** — Layout adaptável a diferentes tamanhos de tela;
- **Filtro por categoria de jogos** — Filtragem dinâmica dos jogos por categoria, com opções geradas a partir dos dados disponíveis;
- **Barra de busca** — Busca dinâmica por jogos, integrada ao filtro por categoria;
- **Simulação do Checkout** — Página de finalização da compra com resumo do carrinho, validação de campos e seleção de forma de pagamento;
- **Carrinho de compras** — Adição e remoção de jogos, com atualização dos itens e dos valores apresentados;
- **Sistema de design visual** — Tokens de design centralizados com variáveis CSS e configuração de tema do Tailwind CSS v4

## Stack

| Tecnologia                                                            | Utilização                             |
| --------------------------------------------------------------------- | -------------------------------------- |
| [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)             | Estrutura das páginas                  |
| [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)               | Estilização e responsividade           |
| [Tailwind CSS](https://tailwindcss.com/)                              | Classes utilitárias e tokens de design |
| [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) | Interatividade e lógica da aplicação   |

> [!NOTE]
>
> O Tailwind CSS foi utilizado para agilizar a estilização, padronizar a aplicação de classes utilitárias e facilitar a implementação de layouts responsivos.

## Como rodar

> [!IMPORTANT]
>
> Requisitos
>
> Node v20+

1. Clone o repositório:

```bash
# Via HTTPS
git clone https://github.com/genzo-dev/focus-voluntary.git

# Via SSH (requer chave SSH configurada no GitHub)
git clone git@github.com:genzo-dev/focus-voluntary.git
```

2. Vá para a branch do projeto Exp.Store:

```bash
git checkout -b e-commerce-digital origin/e-commerce-digital
```

3. Instale as dependências (o TailwindCSS):

```bash
npm install
```

4. Compile o CSS:

```bash
npm run build
```

5. Abra o projeto em um servidor local.

Caso esteja utilizando o VSCode, recomendo a extensão [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer).

### Rotas disponíveis

- `/index.html` - Catálogo de Jogos
- `/checkout.html` - Finalização da compra

## Estrutura de pastas

```bash
.
├── assets
│   └── images # Imagens utilizadas na aplicação
├── checkout.html
├── css
│   ├── output.css # CSS gerado pelo processo de compilação do Tailwind CSS
│   └── theme.css # Estilos e variáveis CSS relacionados ao tema visual
├── index.html
├── input.css # Arquivo de entrada do TailwindCSS (@import "tailwindcss";)
├── js # Scripts responsáveis pela interatividade da aplicação
│   ├── cart.js
│   ├── checkout.js
│   ├── main.js
│   ├── product.js
│   └── theme-toggle.js
├── mocks # Dados mockados utilizados para popular o catálogo
│   └── game-data.js
├── package.json
├── package-lock.json
├── MELHORIAS.md # Registro de melhorias identificadas para possíveis implementações futuras
└── README.md # Este arquivo
```

## Melhorias

Além do que foi pedido para esse exercício, também pensei em algumas melhorias que poderiam ser implementadas as quais podem ser encontradas no arquivo [MELHORIAS.md](https://github.com/genzo-dev/focus-voluntary/blob/e-commerce-digital/MELHORIAS.md).

## Autor

<div align="center">
  <img src="https://github.com/genzo-dev.png" alt="Gabriel Enzo (genzo-dev)" width="160"/>
</div>

<div align="center">
  <strong>Gabriel Enzo (genzo-dev)</strong>
</div>

<div align="center">
  <sub>Fullstack web developer</sub>
</div>

&nbsp;

<div align="center">
  <a href="https://www.linkedin.com/in/genzo-dev/">💼 LinkedIn</a>
  |
  <a href="https://github.com/genzo-dev">🐙 GitHub</a>
</div>
