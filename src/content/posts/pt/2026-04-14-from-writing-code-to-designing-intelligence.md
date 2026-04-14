---
title: De escrever código a desenhar inteligência
date: 2026-04-14
category: ai-work
lang: pt
thumbnail: /content/posts/2026-04-14-from-writing-code-to-designing-intelligence/from-writing-code-to-designing-intelligence.png
tags:
  - ai
  - ai-agents
  - workflow
  - learning
  - strategy
  - developer-experience
  - python
  - backend
  - langgraph
  - fastapi
  - postgresql
  - pydantic
excerpt: Cada vez mais se enquadra o uso de IA no trabalho como atalho de produtividade ou como risco inevitável — uma redução conveniente de algo estrutural. Aqui vai uma leitura mais nítida do que está mudando, do que quebrou quando mergulhei em território desconhecido, e por que a validação humana ainda definiu o limite do que era confiável.
---

<figure>
  <img alt="Mãos humana e robótica digitando em teclados, com painéis de código flutuantes mostrando erros e sucesso" src="/content/posts/2026-04-14-from-writing-code-to-designing-intelligence/collaboration-chaotic-code-creation.png" />
</figure>

Há uma tendência crescente de enquadrar o uso de IA no trabalho como um atalho de produtividade ou como um risco iminente. Ambas as interpretações são incompletas.

O que está acontecendo está mais perto de uma mudança de paradigma mais ampla em como o trabalho intelectual é estruturado e executado. Esse tipo de mudança costuma seguir um padrão familiar: resistência inicial, adoção parcial e, no fim, uma reorganização de como as pessoas operam em um nível mais fundamental. Não se limita a trocar ferramentas — remodela como a informação circula, como o conhecimento é construído e compartilhado, como a comunicação acontece e como a inteligência é aplicada. A IA começa a afetar todas essas camadas ao mesmo tempo, inclusive como o próprio código é gerado e validado.

Não é só uma questão de velocidade; ela desloca a fronteira entre o que você precisa entender por conta própria e o que pode ser delegado ao sistema — o que, por sua vez, muda como o trabalho é abordado desde o início.

Nos últimos meses, tenho empurrado de propósito os limites de como a IA pode ser integrada ao meu fluxo de trabalho. Não como uma camada de otimização, mas como algo mais próximo de uma mudança na forma como encaro problemas. Ainda não existe um manual estável; isso significa que a maior parte desse trabalho é necessariamente exploratória. A única forma de torná-lo útil é tratá-lo como algo que pode ser estruturado ao longo do tempo — caso contrário, rapidamente vira ganhos espalhados que não se acumulam.

## Isso não é bem sobre produtividade

É tentador reduzir tudo a produtividade, mas esse enquadramento não se sustenta por muito tempo. Ganhos de produtividade são absorvidos mais rápido do que as pessoas esperam; quando isso acontece, deixam de ser vantagem e passam a ser linha de base. A pergunta mais relevante é o que a IA permite fazer que você não conseguiria fazer de outro modo, e com que confiabilidade você consegue operar nesse espaço ampliado sem perder o controle do que está sendo produzido.

## Usar o desconforto para ver o que realmente quebra

Para tornar isso concreto, dei de propósito um passo para fora do que é meu núcleo de experiência. Sou desenvolvedor frontend de formação, e escolhi trabalhar em sistemas backend em **Python** — serviços, APIs, lógica no servidor — não porque fosse o caminho mais eficiente, mas porque gerava atrito suficiente para expor o que de fato acontece quando a IA entra no processo.

No começo, os resultados eram irregulares de um jeito difícil de esconder. Eu gerava código que não sabia explicar por completo, as revisões eram difíceis e, numa base de código compartilhada sem um ambiente de staging adequado, erros tinham consequências imediatas. Parte do trabalho precisou ser descartada e refeita — o que por fora pode parecer ineficiência, mas na prática foi o mecanismo que impediu o experimento de degradar o sistema em volta. Essa fase deixou algo muito claro: a IA não elimina a necessidade de julgamento — ela aumenta o custo de não tê-lo.

<figure>
  <img alt="Mão robótica com painel de alerta e mão humana com painel verificado, com uma figura caminhando em direção à luz numa paisagem digital" src="/content/posts/2026-04-14-from-writing-code-to-designing-intelligence/human-ai-collaboration-in-code.png" />
</figure>

Há outra camada aqui que com o tempo ficou impossível ignorar. Sem o apoio de alguém com experiência em backend e infraestrutura, eu não teria conseguido progresso de verdade, não importava o quanto usasse IA. O problema não era só gerar código — era avaliar se aquele código fazia sentido no contexto do sistema. Numa stack em que já tenho fluência, como **JavaScript**, consigo direcionar e corrigir saídas da IA com um nível razoável de confiança. Em **Python**, pelo menos no início, eu não tinha essa base. A presença de alguém que pudesse revisar, rejeitar e explicar o que estava errado não foi só uma ajuda — foi estruturalmente necessária. A IA ampliou meu alcance, mas a validação humana definiu o limite do que de fato podia ser confiável.

## Onde a iteração substitui a dependência cega

O que mudou com o tempo não foi só a ferramenta, mas como eu interagia com ela. Migrar para modelos mais capazes ajudou, mas a mudança maior foi em como as instruções eram formuladas e como as saídas eram avaliadas. A diferença aparece rápido quando você para de tratar o modelo como algo que “dá respostas” e passa a tratá-lo como algo que precisa ser direcionado, limitado e corrigido. À medida que isso mudou, tanto a qualidade da saída quanto o meu próprio entendimento passaram a evoluir em conjunto — e é aí que o processo começa a estabilizar.

Ainda não tenho fluência plena em Python, e há limites claros para o que consigo fazer sozinho sem apoio. Mas essa limitação já não é a variável mais relevante. O deslocamento mais importante é que agora consigo operar dentro do sistema com entendimento parcial e aumentá-lo progressivamente, em vez de ficar bloqueado pela falta dele. Isso muda o formato do aprendizado e também o que “ser capaz” significa na prática.

## Onde a execução deixa de ser o centro do trabalho

Isso leva naturalmente a um redesenho do papel. O objetivo não é substituir engenharia por prompts — isso é uma caricatura do que está acontecendo —, mas deslocar parte do esforço da execução direta para instrução, orientação e validação. Escrever código não desaparece, mas deixa de ser o único lugar onde o valor é criado. Parte desse valor migra para o quão bem você consegue desenhar o processo que produz o código e verificar com eficácia se o que foi produzido realmente se sustenta.

## Há um espectro aqui (e importa onde você se posiciona)

Existe um espectro que ainda está se estabilizando. De um lado, a IA é usada como ferramenta de precisão que acelera fluxos já conhecidos. Do outro, ela gera grandes porções de trabalho em domínios em que o usuário ainda não tem controle total. Eu comecei mais perto do segundo, o que traz riscos óbvios, principalmente quando a saída corre mais rápido que o entendimento. Mas é também onde as fronteiras ficam visíveis. O que importa não é onde você começa, e sim se consegue se mover ao longo desse espectro de forma intencional.

## Os riscos são reais — só que não estão onde as pessoas costumam olhar

Os riscos em volta disso são reais, e não são só técnicos. Dependência é um deles, mas não no sentido simplista de “usar a ferramenta demais”. O risco mais sutil é perder a capacidade de avaliar o que a ferramenta produz. Há também um componente estrutural: à medida que a adoção se espalha, a diferenciação individual fica mais difícil, e ganhos de produtividade podem ser reinterpretados no nível organizacional de formas que não estão necessariamente alinhadas aos incentivos individuais. Ignorar a IA não te protege dessa dinâmica — na maior parte das vezes, só atrasa sua exposição a ela.

## Isso só funciona porque a IA não está substituindo nada (ainda)

Um ponto que costuma ser achatado nessas discussões é que a IA nem sempre substitui algo que já existia. No meu caso, ela viabilizou acesso a um domínio em que eu não teria entrado com essa profundidade sob restrições “normais”. Isso não elimina a necessidade de habilidade; desloca como essa habilidade é construída e onde ela se torna visível. Também significa que a fronteira de quem participa de camadas mais complexas da stack está ficando mais fluida — com implicações que vão além dos fluxos individuais.

---

Nada disso é limpo. A transição é desigual, os ciclos de feedback ainda não são bem compreendidos e os modos de falha continuam sendo descobertos em tempo real. Mas esperar clareza antes de se envolver é, em si, uma decisão — que tende a te posicionar no lado que recebe mudanças definidas por outros.

Neste ponto, a pergunta é menos se a IA deve fazer parte do fluxo de trabalho e mais se você está estruturando o uso dela de um jeito que aumenta seu controle ao longo do tempo — ou cedendo esse controle aos poucos, sem perceber. A diferença entre esses dois caminhos não aparece no começo, mas se acumula rápido.
