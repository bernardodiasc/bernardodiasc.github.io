---
title: De volta do futuro, com IA
date: 2026-02-19
category: this-blog
lang: pt
tags:
  - astro
  - migration
  - ai
  - static-site
  - developer-experience
  - ai-generated
excerpt: Depois de anos ausente, estou revivendo este blog com a ajuda de IA — e toda a stack tecnológica ganhou um recomeço.
thumbnail: /content/posts/2026-02-19-back-from-the-future-with-ai/ChatGPT-Image-Feb-19-2026-10_51_05-PM.png
---

<figure>
  <img alt="De volta do futuro, com IA" src="/content/posts/2026-02-19-back-from-the-future-with-ai/ChatGPT-Image-Feb-19-2026-10_51_05-PM.png" />
</figure>

Faz um tempo. Quase oito anos desde o último post aqui. A vida aconteceu, prioridades mudaram, e este pequeno canto da internet ficou quieto acumulando poeira. Mas hoje, algo mudou.

## A migração

Este site foi originalmente construído com Create React App, Redux, React Router, e um pipeline de conteúdo customizado que convertia arquivos markdown em um grande blob JSON no momento do build. Funcionava bem para 2018. Mas pelos padrões de 2026, toda a árvore de dependências estava congelada no tempo — React 16, Redux 3, Storybook 3, e dezenas de pacotes com vulnerabilidades de segurança conhecidas.

Em vez de fazer upgrade incrementalmente através de anos de breaking changes, eu decidi começar do zero. A nova stack é [Astro](https://astro.build/), um framework feito especificamente para sites orientados a conteúdo. Veja o que mudou:

- **37 dependências → 4.** Sem mais Redux, React Router, react-snap, highlight.js, ou qualquer código de cola que os mantinha juntos.
- **Pipeline de conteúdo customizado → Content Collections.** O Astro lê os arquivos markdown diretamente. Sem scripts de build, sem JSON gerado.
- **Renderização no cliente → Zero JavaScript.** O site antigo enviava todo o runtime do React para o navegador apenas para exibir posts estáticos de blog. Agora não envia nada — HTML e CSS puros.
- **Tempo de build: segundos, não minutos.** 29 páginas construídas em menos de 2 segundos.

O design visual, a estrutura de URLs, o conteúdo — tudo que o leitor vê permaneceu o mesmo. É tudo por baixo do capô.

## O fator IA

Aqui está a parte que teria soado como ficção científica em 2018: toda a migração foi feita em uma única conversa com um assistente de codificação de IA. Não apenas o boilerplate — as decisões de arquitetura, a portabilidade dos componentes, a migração de conteúdo, os casos extremos com MDX e componentes customizados. Tudo isso.

Sou desenvolvedor há mais de duas décadas. Já vi ferramentas irem e virem. Mas isso é genuinamente diferente. A experiência de desenvolvimento com assistência de IA não é sobre substituir o desenvolvedor — é sobre remover a fricção que faz você abandonar projetos paralelos. As partes chatas, a configuração, o inferno de dependências — é aí que a IA brilha. Ela permite que você foque no que realmente quer construir.

Este blog ficou dormente por anos em parte porque a ideia de modernizar a stack parecia um projeto de fim de semana para o qual eu nunca tive o fim de semana. Com IA, levou uma tarde.

## O que vem a seguir

Estou animado por estar de volta. Há coisas que quero escrever — arquitetura frontend, ferramentas para desenvolvedores, o papel em evolução da IA no desenvolvimento de software, e qualquer outra coisa que me vier à mente.

E sim, as páginas de **busca** e **arquivo** são placeholders desde 2018. Talvez finalmente tenha chegado a hora delas também.

Vamos ver onde isso vai dar.
