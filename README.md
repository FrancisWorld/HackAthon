# HackAthon - LeaderBoard

Este é um projeto simples de Leaderboard criado com o framework [Astro](https://docs.astro.build), que permite exibir uma lista de usuários obtidos de uma API.
O projeto é uma aplicação web que exibe uma lista classificatória de usuários com base em dados obtidos de uma API. Utiliza o framework [Astro](https://docs.astro.build) para a construção do frontend, juntamente com a biblioteca [Framer Motion](https://www.framer.com/motion/) para criar animações suaves e [TailWindCSS](https://tailwindcss.com/) para estilização.

![LeaderBoardPreview](/public/imgs/LeaderBoardPreview.png)



## 🚀 Estrutura do projeto

No projeto, a estrutura principal consiste:

```text
/
├── public/
|   |-- imgs/
|   |   └── LeaderBoardPreview.png
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── LeaderBoard.jsx
│   ├── layouts/
│   │   └── Layout.astro
│   |-─ pages/
│   |    └── index.astro
│   |-─ styles/
|   |    └── global.css
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

Dentro de `src/components/`, é possivel adicionar componentes do tipo Astro/React/Vue/Svelte/Preact

Qualquer informação estática, pode ser colocada no diretório `public/`

## 🧞 Commands

Todos os comandos são rodados no **root** via terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Instala dependências                            |
| `npm run dev`             | Inicia um servidor local em `localhost:4321`      |
| `npm run build`           | Da um build na aplicação `./dist/`          |
| `npm run preview`         | Da um preview na sua build, antes do deploy     |
| `npm run astro ...`       | Roda comandos CLI, como `astro add`, `astro check` |
| `npm run astro -- --help` | Ajuda via Astro CLI                     |

## 👀 Precisa de ajuda?

Da uma olhada na documentação do [Astro](https://docs.astro.build) ou no [servidor do Discord](https://astro.build/chat).
