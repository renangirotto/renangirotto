---
title: 'Pull requests e documentação de entregas'
description: 'Utilizando meus PRs para documentar a evolução do produto.'
pubDate: '06/03/2025'
---

PRs (pull requests) tem como objetivo documentar a evolução de nossas aplicações. Eles servem como um ponto de acompanhamento de o que está sendo modificado e muito provavelmente o que deve ser, ou não, aprovado por nossos pares.

Entretanto muitas vezes o PR ele é utilizado apenas para comunicarmos alterações técnicas e em muitos casos acaba ficando tão pobre em seu conteúdo que se tornam apenas uma rotina do processo de entrega de tasks, um simples balde de commits.

Nos últimos 2 anos venho tentado criar, dentro dos meus processos de evolução e releases de aplicações, uma cultura de utilizar minhas PRs não apenas para documentar este avanço do software, mas para aproximar as modificações ali presentes com as necessidades de negócio, trazendo essa visão histórica da evolução de nossos produtos.

Neste artigo quero compartilhar um pouco sobre esta estratégia, os ganhos que tive ao longo do tempo e como o processo de abrir e aprovar PRs ganhou uma nova responsabilidade.

## Tasks não documentam software

Normalmente centralizamos demandas de negócio em ferramentas como Jira, Notion ou aquelas que tem propaganda em todos os vídeos do youtube. Essas ferramentas são nosso portal de tasks e por muitas vezes olhamos para ele apenas como uma grande lista de de TODOs.

Mesmo que o time utilize de estratégias de organização de épicos, storias, tasks e sprints, e crie tarefas bem descritas, com DoD (definition of done) e diversas categorias de atuação, ainda estamos a muitas camadas de distância de o que realmente vai ser implementado a nível de software.

Esse distanciamento faz com que se crie uma **segregação de responsabilidades**, aonde o time de negócio só cuida de delegar e o time de desenvolvimento só cuida de atuar. E, ao atuar, cria um escopo de evolução de software que olha única e exclusivamente para tecnologia, não para o produto.

Ao entregarmos nossas tasks vamos querer ao menos relacionar a demanda e o que foi produzido, mas a questão que fica é, **que valor estamos gerando para nossa documentação de entregas?** Um link para um punhado de alterações técnicas que, a partir do momento que a sprint acabar, será perdido em um mar de tasks completas que negócio talvez nunca mais olhe?

Neste cenário estamos abrindo a mão de uma **documentação  de produtos para nós enquanto desenvolvedores**, e estamos criando o imaginário de entregar valor de uma documentação para negócio só porque um PO ou PM pode abrir a PR com as alterações, mesmo que possivelmente não entenda nada ali apresentado.

A demanda do negócio, a motivação da mudança, ela precisa estar próxima do software que desenvolvemos, nós precisamos documentar o produto para desenvolvedores.

## O PR é também o histórico do produto

Por muito tempo entendi que o PR (pull request) era uma documentação puramente técnica, eu deveria ali dar um contexto do meu código e minhas alterações, comentar as mudanças e/ou correções de maior impacto e relacionar pessoas para atuarem na sua aprovação.

Entretanto, após começar a atuar em projetos extensos, com diversos produtos, regras de negócio, testes a/b e múltiplos fluxos, comecei a ver PRs mais como um processo automático de boa prática do que realmente uma documentação que me causava impacto ao longo do tempo, em como **meu produto estava evoluindo**, e não apenas como meu software estava mudando.

Pensando nisso, nos últimos 2 anos venho complementando os PRs em uma maneira a aproximar a evolução do produto e assim deixar mais rica a documentação de porque estavam acontecendo aquelas alterações, não somente no âmbito do software.

Com isso eu estava criando uma documentação que não impactava apenas a mim, mas a todo o meu time técnico, que se precisasse rever mudanças, validar PRs e alinhar alterações com negócio teria um documento mostrando a motivação das alterações, as mudanças de software em si, aonde o produto estava no momento que fizemos o PR e para aonde nosso produto estava evoluindo.

## Um PR modular e completo

Não existe uma regra nem um modelo perfeito para todos os casos, PRs devem ser modulares ao tipo de projeto, tecnologia e produto que se é trabalhado, então quero compartilhar um pouco sobre como venho trabalhado com minhas PRs no cenário de aplicações frontend.

### Descrição e impacto no produto

A descrição das alterações pode ser criada com dois assuntos, as alterações feitas a nível técnico e como essas alterações impactam o seu produto. O ideal que tento fazer é criar uma narrativa para que a alteração a nível de código tenha um ponto de partida, mas sem dar maiores detalhes técnicos, isso por causa de outra sessão que irei apresentar.

Um exemplo desta sessão de descrição pode ser:

<figure>
  <img src="/images/blog/posts/prs-e-documentacao-de-entregas/image-1.png" alt="Tela de criação de PRs no Github, no título está escrito: Melhorias no formulário de pagamento e payload de dados da API. No corpo do PR temos um subtitulo de Descrição e impacto no produto, com um texto narrativo sobre as alterações feitas, suas motivações e qual impacto esperamos metrificar no produto." />
</figure>

### Alterações realizadas

Esta sessão é aonde tento trabalhar as reais alterações realizadas a nível de código, podendo detalhar de maneira mais macro, olhando para features, correções ou principais serviços, mas também podendo atuar de maneira mais granular em pontos que entendo que tenham mais impacto no código.

Geralmente faço em formato de lista, destacando no Markdown partes importantes de código, mas você pode fazer em um formato de texto narrativo se preferir:

<figure>
  <img src="/images/blog/posts/prs-e-documentacao-de-entregas/image-2.png" alt="Continuação da tela de criação de PR no Github. No corpo do PR temos um subtitulo para a área de alterações e um agrupamento de alterações realizadas, disposto em formato de lista." />
</figure>

A ideia não é descrever o que você fez no seu código de maneira literal. Afinal, isso nós podemos ver nos commits realizados durante nosso review.

### Prints de apoio

Esta sessão é muito relativa a o quanto o time de design é ativo no processo de validação de entregas, mas ajuda a documentar alterações que se tem uma noção de um maior impacto na experiência.

A ideia é deixar um comparativo de o que era esperado (um print do Figma por exemplo) com o que foi produzido (um print da web). Isso aqui não é um convite para os loucos do pixel perfect terem uma crise de ansiedade, é apenas uma forma de mostrar as alterações de maneira comparativa e documental:

<figure>
  <img src="/images/blog/posts/prs-e-documentacao-de-entregas/image-3.png" alt="Continuação da tela de criação de PR no Github. No corpo do PR temos um subtitulo para a área de prints de apoio seguido de dois prints de inteface do site dev.to, apenas para exemplo." />
</figure>

### Tasks relacionadas

Aqui queremos aproximar um pouco mais as alterações que estamos realizando com a demanda criada pelo negócio, relacionando nossas tasks, storias, épicos, enfim tudo e o que for necessário para mostrar o porque estamos fazendo as alterações, mas em uma perspectivas de produto.

Geralmente escrevo essa sessão no formato de lista, relacionando com links para os cards de tasks das aplicações que trabalhamos (Notion, Jira, etc):

<figure>
  <img src="/images/blog/posts/prs-e-documentacao-de-entregas/image-4.png" alt="Continuação da tela de criação de PR no Github. No corpo do PR temos um subtitulo para a área de tasks relacionadas seguido de uma lista de links para os cards de cada task." />
</figure>

E se a demanda vier de um scope change, a lendária mensagem no slack ou a popularmente conhecida pastelaria? Você pode ou ignorar essa sessão ou, como eu prefiro, colocar que foi um scope change solicitado por X pessoa. Não querendo apontar dedos nem nada, mas sempre bom documentar.

### Usando github? Utilize das labels

O Github nos entrega diversos recursos para acompanharmos nossas PRs, uma delas são as labels. Geralmente crio labels relacionadas ao tipo de impacto que minha PR está causando ao repositório e me utilizo disso para acompanhar melhor como tem se desenrolado nossos lançamentos.

Algo que gosto de fazer também é que ao trabalhar em monorepos crio labels para cada projeto e sempre que tenho uma alteração especifica de projeto utilizo dessa label para ajudar a também filtrar as PRs, algo como: `app-frontend`, `app-backend`, `app-dashboard`, etc.

<figure>
  <img width="340px" src="/images/blog/posts/prs-e-documentacao-de-entregas/image-5.png" alt="Coluna de opções lateral do Github para relacionamento de assignees, labels e outras opções." />
</figure>

Ainda quero estressar mais possibilidades de utilização no cenário do Github, como *issues*, *milestones* e github projects, mas é um assunto muito extenso e acredito que vale um artigo apenas desses tópicos.

## Documentar toma tempo, mas vale a pena

Já trabalhei em lugares que PRs, quando fazíamos, eram bem simples, bem pobres no quesito de documentação e geralmente eram só um processo de boas práticas. Em alguns cenários pode ser que realmente não faça diferença termos PRs melhor trabalhadas, mas aqui não estamos falando sobre fazer sites, estamos falando sobre **criar e manter produtos**.

Criar documentações, em um cenário de demandas em escopos mal planejados realmente se torna um desafio, se bem que ai o problema não está na questão da documentação e sim do planejamento. Termos a cultura de documentar nossa evolução precisa ser um consenso do time como todo, não apenas de uma área. O ganho ao longo do tempo tem se mostrado uma excelente forma de metrificar melhorias do produto, alinhar expectativas de entrega e criar uma melhor relação de documentação técnica com o negócio.

Acredito leitor(a), que mesmo em um cenário que talvez você esteja atuando sozinho(a) em um produto, que ninguém realmente vá aprovar sues PRs, crie eles, faça com que essa rotina se torne algo **cultural no seu processo de desenvolvimento** e crie um histórico focado em lhe auxiliar no acompanhamento do produto que você desenvolve. Isso cria maturidade em você se tornar dono(a) do negócio que atua e agrega muito mais valor a suas documentações e entregas.
