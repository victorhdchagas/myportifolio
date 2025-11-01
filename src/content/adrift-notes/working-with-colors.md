---
title: 'Trabalhando com Cores'
description: 'Explorando os segredos das cores no design de interfaces. Como HSL pode transformar nossa percepção, paletas estratégicas e o equilíbrio entre acessibilidade e beleza visual.'
publishDate: 2025-11-01
tags: ['design', 'ui', 'cores', 'refactoring-ui', 'livros', 'anotações']
draft: false
---

## A Magia das Cores no Design

Continuando minha jornada pelo **Refactoring UI**, cheguei ao capítulo sobre cores e percebi que há muito mais profundidade do que apenas escolher tons bonitos. É sobre entender como as cores influenciam nossa percepção e como usá-las estrategicamente para criar interfaces que funcionam.

## HSL: Uma Nova Forma de Ver Cores

Sempre usei HEX e RGB porque eram os mais comuns. Mas os autores me convenceram: HSL é muito mais intuitivo para o cérebro humano. Hue, Saturation e Lightness - cor, saturação e brilho. Parece simples, mas muda tudo.

O Hue é como uma roda de cores: 0% vermelho, 120% verde, 240% azul. Saturation controla o quão viva a cor é - 0% é cinza, 100% é vibrante. Lightness vai do preto (0%) ao branco (100%), passando pela cor pura em 50%.

É incrível como isso facilita ajustar cores de forma mais natural, sem aquela matemática confusa do RGB.

## Paletas que Fazem Sentido

Sempre pensei que paletas de cores eram para usar em tudo. Errado! Os autores dividem em três categorias que fazem total sentido:

**Tons de Cinza**: A base de tudo. Eles limitam formulários com fundos claros e escuros, criando consistência. Quase tudo na interface usa essa paleta - é o que dá estrutura sem distrair.

**Cores Primárias**: Um ou dois tons principais, com variações de 5-10 cada. Os tons mais claros servem para fundos específicos, como alertas, mas sem exagerar.

**Cores de Destaque**: Para mensagens ao usuário - verde para sucesso, vermelho para erro, amarelo para aviso. Novamente, variações para cada uma.

Essa abordagem evita o caos visual e cria hierarquia clara.

## Cinza Não É Só Cinza

Uma revelação: cinzas podem ter personalidade! Ajustando saturação e luminosidade de uma cor base (azul para frio, amarelo para quente), criamos tons de cinza que transmitem sensações diferentes. É sutil, mas poderoso.

## Acessibilidade com Estilo

Acessibilidade não precisa ser feia. O contraste é fundamental - 4.5:1 para textos pequenos, 3:1 para grandes. Mas há truques inteligentes:

**Invertendo Contraste**: Quando texto branco em fundo colorido quebra o contraste, inverta: fundo escuro com texto claro. Fica mais legível e atrativo.

**Suporte a Deficiências Visuais**: Use ícones em badges (seta para cima quando valor sobe), evite múltiplas cores similares sem contraste diferente.

## Profundidade Visual

As sombras não são só decoração - elas criam profundidade realista. Observe que essa imagem representa quando a luz vem do topo e os elementos estão pra fora do container, já a borda de baixo recebe menos luz porque estaria mais 'escondida' da fonte de luz.

![bc313c2418da0dc3deb520143b2fb01d.png](/bc313c2418da0dc3deb520143b2fb01d.png)

O efeito acontece inversamente quando o elemento está pra "dentro do container", as luzes na borda inferior são mais fortes que na borda superior.

![802ffbd0dd27cd2d5315245c1d8363b3.png](/802ffbd0dd27cd2d5315245c1d8363b3.png)

Pra criar um efeito de profundidade é necessário compreender e replicar esse efeito do mundo real.

As sombras são usadas para aproximar do usuário elementos importantes - pequenas para botões, médias para dropdowns, grandes para modais. Até hover com sombra em vez de mudança de cor pode dar profundidade.

E uma dica genial: elementos com fundo escuro parecem mais distantes, claros mais próximos - sem precisar de gradientes ou sombras extras.

---

_Nota para o meu eu do futuro: Cores são ferramentas poderosas. Use-as com intenção, não por impulso. O equilíbrio entre estética e funcionalidade é onde a magia acontece._