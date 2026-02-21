---
title: Progresso do blog
date: 2018-02-26
category: this-blog
lang: pt
tags:
  - typography
  - design
  - css
  - markdown
excerpt: Segundo dia desenvolvendo este projeto, longo caminho pela frente.
---

Olá de novo!

Se você está acessando este blog na data deste post, pode ainda estar pensando: "meh..."

Qual é, tenha um pouco de fé em mim! Até agora eu passei 6h construindo este blog, ele é baseado em alguns boilerplates existentes como mencionado no post anterior. Mas eu não estou usando nenhum CMS open source, eu construí meu próprio CMS! Eu quero mostrar minha habilidade, mas essa habilidade leva tempo, muito mais tempo. Vamos manter toda a diversão rolando. 🤓

Eu tenho um roadmap de melhorias que quero incluir e elas serão feitas progressivamente. O legal é que o projeto já é utilizável, o MVP foi colocado no ar no primeiro dia. Sim sim, bem cru, mas ei, dê uma olhada no [código fonte](https://github.com/bernardodiasc/bernardodiasc.github.io), já está bem incrível.

Para esforços futuros, há muitas coisas no meu backlog que quero trabalhar.

## Funcionalidades futuras:

- Internacionalização (inglês e português)
  - Com local storage usando middleware do Redux para persistir preferências
- Seção de comentários
  - Bom, este blog é puramente baseado em arquivos estáticos, então o Disqus vai ajudar com isso
- Rotas de categorias
  - Alguns conteúdos pertencem juntos, como esta série "progresso do blog"
- Rotas de ano, mês e dia
  - Listagem de posts com diferentes filtros por datas, baseados em rotas de URL
- Filtragem por tags
  - Diferente de categoria, um post pode ter muitas tags, então vou fazer uma filtragem elegante onde você pode combinar múltiplas tags
- Boa manipulação de imagens
  - Agora estou cobrindo apenas texto, mas vou incluir imagens e outras mídias, porque fica muito mais legal
- Opções de compartilhamento
  - Sim, apenas alguns botões para compartilhar em redes sociais, este blog já é SEO-friendly
- Carregar conteúdo de forma assíncrona
  - Isso vai tornar as coisas mais interessantes, `filestojson` foi projetado para projetos pequenos, com pouco conteúdo, mas eu espero levar este blog longe, quero incluir a habilidade de [dividir o output em múltiplos arquivos](https://github.com/bernardodiasc/filestojson/issues/15) no `filestojson` e carregar pedaços de conteúdo de forma assíncrona neste blog

## Melhorias pendentes:

> Estas não são funcionalidades... esta lista é mais sobre débitos técnicos...

- Fazer um design melhor
- Completar instruções de documentação e showcases & testes de componentes (veja https://bernardodiasdacruz.com/docs)
- Escrever mais posts sobre detalhes técnicos do desenvolvimento deste blog
- Corrigir formato de data
- Incluir meta informações nos posts
