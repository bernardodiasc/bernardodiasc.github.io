---
title: Suporte multi-idioma, finalmente
date: 2026-02-22
category: this-blog
thumbnail: /content/posts/2026-02-22-multi-language-support-at-last/ChatGPT-Image-Feb-20-2026-11_54_48-PM.png
lang: pt
tags:
  - i18n
  - astro
  - ai
  - developer-experience
  - ai-generated
excerpt: O primeiro item da minha lista de funcionalidades desejadas em 2018 era internacionalização. Oito anos depois, finalmente está aqui — e cada post agora tem uma tradução em português.
---

<figure>
  <img alt="Drawing a user flow graph with D3.js Sankey and React" src="/content/posts/2026-02-22-multi-language-support-at-last/ChatGPT-Image-Feb-20-2026-11_54_48-PM.png" />
</figure>

Se você voltar ao meu [segundo post de blog](/pt/2018/02/26/blog-progress), escrito em 26 de fevereiro de 2018, vai encontrar uma seção chamada "Funcionalidades futuras". O primeiro item daquela lista:

> Internacionalização (inglês e português)

Aquilo foi no segundo dia de existência deste blog. Eu sabia desde o início que queria que fosse bilíngue. Sou brasileiro, escrevo em inglês para alcance profissional, mas uma parte enorme das pessoas que me importam — família, amigos, a comunidade dev local — apreciariam ler em português. Sempre pareceu a coisa certa a fazer.

E mesmo assim, por oito anos, não aconteceu.

## Por que demorou tanto

Internacionalização é uma daquelas funcionalidades que parece simples numa sessão de planejamento e revela sua verdadeira complexidade no momento em que você começa a implementar. Não é só traduzir texto. É sobre:

- **Duplicação de conteúdo.** Cada post precisa de uma versão paralela. Não é um esforço único — é um compromisso de manter duas versões de tudo daqui pra frente.
- **Roteamento.** Você precisa de URLs com prefixo de idioma, navegação consciente do idioma, uma forma de alternar entre versões da mesma página.
- **Strings de UI.** Cada label, placeholder, botão e título precisa existir em ambos os idiomas.
- **A tradução em si.** 24 posts de blog, alguns bem longos e técnicos. Isso é muita escrita.

Qualquer um desses seria uma tarefa gerenciável de fim de semana. Todos juntos pareciam um projeto que eu começaria e nunca terminaria — o tipo de projeto paralelo que fica num branch, 60% pronto, para sempre.

## O que mudou

IA mudou a equação. Não por tornar o problema mais simples — as mesmas decisões arquiteturais ainda precisavam ser tomadas, os mesmos arquivos ainda precisavam ser criados. Mas a parte do trabalho braçal, a parte que fazia isso parecer impossível para uma única pessoa mantendo um projeto paralelo, de repente se tornou viável.

Aqui está o que realmente aconteceu: eu disse "adicione um seletor de idioma no canto superior direito, depois crie a funcionalidade, depois crie as traduções para todos os posts." Uma frase. A IA leu toda a base de código, entendeu o schema da coleção de conteúdo, a estrutura de rotas, os componentes de layout, os padrões de CSS — e produziu uma implementação completa.

A infraestrutura veio primeiro: um campo `lang` no schema de conteúdo, funções utilitárias de i18n, um componente de troca de idioma que segue o design existente das abas, strings de UI traduzidas, e um conjunto completo de rotas de páginas em português. Depois veio o conteúdo: 24 posts e 2 artigos, cada um traduzido para português brasileiro, preservando todos os blocos de código, referências a componentes e links.

60 páginas geradas no próximo build. O site dobrou de tamanho.

## Como funciona

A implementação é direta:

- **Inglês** é o idioma padrão, sem prefixo de URL. O site funciona exatamente como antes para leitores em inglês.
- **Português** vive sob `/pt/`. Cada post, a página inicial, busca, arquivo e sobre mim têm versões em português.
- **O seletor de idioma** fica no header, ao lado das abas de navegação. Ele linka para a página equivalente no outro idioma. Visite `/2018/02/23/hello-world` e clique em PT — você chega em `/pt/2018/02/23/hello-world`.
- **O conteúdo** é organizado com traduções em português num subdiretório `pt/` dentro da coleção de posts. Cada arquivo traduzido tem `lang: pt` no frontmatter.

Sem JavaScript client-side para detecção de idioma, sem cookies, sem redirecionamentos. Apenas páginas estáticas com links entre elas. Simples, rápido, e funciona com JavaScript desabilitado.

## A questão da manutenção

Essa é a parte que sempre me afastou. Traduzir 24 posts existentes é um esforço único, mas e o próximo post? E o depois dele? Manter conteúdo bilíngue significa dobrar o esforço de escrita para cada peça de conteúdo, para sempre.

Exceto que agora tenho um colaborador que pode traduzir um post de blog em segundos. A mesma IA que construiu a infraestrutura pode produzir a versão em português de qualquer novo post. Escrever em inglês, gerar a tradução, revisar, publicar ambos. O gargalo não é mais a tradução — é a revisão.

Isso muda o cálculo inteiramente. A razão pela qual i18n ficou na minha lista de desejos por oito anos não era que eu não conseguia construir — é que eu não conseguia sustentar. Agora consigo.

## Ciclo completo

Tem algo satisfatório em marcar como concluído um item que ficou aberto por oito anos. Especialmente quando foi a *primeira* coisa que anotei. Antes dos comentários, antes das categorias, antes das tags, antes da busca — antes de todas as funcionalidades que eventualmente foram construídas — internacionalização era o sonho.

Vinte e quatro posts traduzidos. Dois idiomas. Uma tarde.

O segundo post de blog que escrevi prometia que isso aconteceria. O vigésimo oitavo entrega.
