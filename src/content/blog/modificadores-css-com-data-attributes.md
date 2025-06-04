---
title: 'Modificadores CSS com data-attributes'
description: 'Como data-attributes podem auxiliar a criarmos modificadores de componentes de maneira simples.'
pubDate: '03/05/2025'
image: '/images/blog/posts/modificadores-css-com-data-attributes/social.png'
---

Já faz um tempo que tenho trabalhado usando `data-attributes` em meus seletores CSS, principalmente quando penso em modificadores de componentes.

Num geral classes suprem muito bem o ponto de selecionar um elemento, mas sempre senti que em componentes com muitos modificadores a lista de classes e o seu controle me incomodava em certo ponto, principalmente com classes genéricas para modificadores de componentes atômicos.

Mais de uma vez me vi escrevendo componentes que suas classes ficavam da seguinte forma:

```html
<button class="btn btn-primary btn-pill">
 Classico button
</button>
```

E assim, tudo bem, não é um cenário ruim, muito pelo contrário ele até que está bem claro, mesmo que eu não saiba o que especificamente estas classes estejam fazendo.

Sinto que o momento que comecei a ter certo receio dessa estratégia (e talvez o motivador desse artigo) foi quando comecei a usar em muitos frameworks o CSS Modules, principalmente trabalhando com NextJS, Vue e Astro, que sustentam bastante esta forma de estilização.

E pior, no final eu além de ter possíveis classes que não poderiam ser tão claras, os bundlers por padrão cuspiam elas com seus hashs modulares, criando alguns monstrinhos assim:

```html
<button class="Button_button__k9Ws8 Button_default__p2nL4 Button_outline__pjobo">
 Classico button
</button>
```

## Modificadores com data-attributes

Em um dos projetos que trabalhava a um tempo atrás precisei criar um componente customizado de alerta, um _toast notification_ simples para ter um _feedback_ claro ao usuário. Na mesma época acabei lendo um artigo no [CSS Tricks](https://css-tricks.com/) sobre a estratégia de utilizar atributos do HTML, com `role` ou `type` como seletores, e pensei em ver como poderia expandir isso com outros atributos customizados.

Meu componente ficava da seguinte forma:

```html
<div class="Alert_alert__axp12" data-status="info">
 Mensagem para o usuário!
<div>
```

E o seu CSS ficava assim:

```css
/* Arquivo .module.css */

.alert {
 background: grey;

 /* Modificadores */
 &[data-status="info"] {
  background: blue;
 }

 &[data-status="alert"] {
  background: red;
 }
}
```

Quando implementei essa solução a primeira vez achei muito confortável de se trabalhar. Era simples, facilitava minha leitura e entendimento do modificador e criava uma lógica descritiva de o que eu gostaria de customizar naquele componente.

Não apenas isso mas facilitava muito quando eu precisava criar seletores específicos e relacionados a modificadores de componentes, como por exemplo:

```css
.parent {
 &:has([data-status="info"]) {
  /* modificava o parent */
 }
}
```

## Diferenciando atributos

Depois de um tempo comecei a adicionar alguns alias relacionados aos atributos modificadores, apenas para informar que aquele atributo estaria sendo usado exclusivamente para a interface, seja por CSS ou até por script.

```html
<!-- Aonde data-ui-status é para modificadores e data-control não -->

<div class="Alert_alert__axp12" data-ui-status="info" data-control="false">
 Mensagem para o usuário!
<div>
```

## Conclusão e aplicação

Hoje eu uso bastante essa estratégia para modificadores, sinto que traz uma manutenção e leitura muito mais confortável para meus componentes e auxiliar a escalabilidade em projetos que uso CSS Modules.

Acredito que existam outras estratégias fora do uso do CSS Modules que ele tenha menos impacto, que pareça chover no molhado em relação a seletores, como quando utilizamos `@layers` ou `@scope`. Ao mesmo tempo sinto que é uma ótima forma de conseguirmos estressar a relação do nosso HTML e CSS para criar o melhor cenário de manutenção em nossos projetos.
