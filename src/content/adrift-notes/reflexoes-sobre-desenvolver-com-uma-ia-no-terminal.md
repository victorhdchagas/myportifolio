---
title: "Reflexões sobre Desenvolver com uma IA no Terminal: Uma Jornada com o opencode"
description: "Uma nota para o meu eu do futuro sobre a experiência surpreendente de construir um portfólio com uma ferramenta de IA no terminal, e como isso mudou minha percepção sobre desenvolvimento."
publishDate: 2025-10-29
tags: ["IA", "Desenvolvimento", "Terminal", "LLM", "opencode", "Astro", "Raspberry Pi"]
draft: false
---

## A Descoberta: Do Vídeo ao Terminal

Tudo começou com um [vídeo do Network Chuck](https://www.youtube.com/watch?v=MsQACpcuTkU). Ele estava demonstrando o `opencode`, e aquilo me abriu os olhos para o potencial real de ter uma LLM integrada diretamente no terminal (TUI). A ideia de interagir com uma IA de forma tão nativa no meu ambiente de desenvolvimento me pareceu poderosa.

## O Primeiro Teste e a Surpresa da Segurança

Minha primeira instalação foi em um servidor NAS, um modesto Raspberry Pi 4. E, para minha surpresa, funcionou muito bem, mesmo no hardware mais fraco. Mas o momento que realmente me conquistou foi quando, por curiosidade, tentei acessar um diretório acima da pasta do projeto. A resposta foi um "acesso negado" imediato.

Uau.

Aquilo foi um divisor de águas. A ferramenta não bisbilhota o sistema sem permissão. Esse respeito pela segurança e pelo escopo do projeto me deu a confiança que eu precisava para instalá-la na minha máquina local.

## O que é o opencode?

Para o meu eu do futuro não esquecer: o [opencode](https://opencode.ai/) é uma ferramenta de linha de comando que traz um agente de IA para o terminal. Ele foi projetado para ajudar em tarefas de engenharia de software, permitindo que você edite código, execute comandos e interaja com o sistema de arquivos de forma segura e contextual. A instalação é bem simples:

```bash
# Via curl
curl -fsSL https://opencode.ai/install | bash

# Ou via npm
npm install -g opencode-ai
```

## Mergulhando no Código: O Portfólio com Astro.js

Com a ferramenta instalada localmente, meus planos de estudar conceitos de design foram para o lixo. A experiência de codificar com a IA era tão fluida e divertida que eu pulei direto para a construção deste portfólio.

O mais impressionante foi como ela me ajudou a trabalhar com o Astro.js, uma ferramenta poderosa, mas com sua própria curva de aprendizado. A IA não só gerou código, mas me ajudou a entender a estrutura do projeto, a criar componentes e a navegar pela complexidade do framework.

## Superpoderes no Desenvolvimento

Durante a criação deste portfólio, a IA se tornou mais do que um assistente. Foi uma verdadeira parceira de desenvolvimento com algumas habilidades notáveis:

-   **Criação e Estruturação de Projetos:** Ajudou a montar toda a estrutura inicial do portfólio, desde a configuração até a criação dos primeiros componentes.
-   **Manipulação de Conteúdo:** A capacidade de escrever, ler e até traduzir artigos diretamente nos arquivos do projeto foi impressionante. Ela criou as primeiras versões das minhas "Adrift Notes".
-   **Inteligência Externa com Web Fetch:** Usar a ferramenta para buscar conteúdo de uma URL que eu estava vendo no navegador foi uma mão na roda. Pude pegar retornos de API ou extrair texto de uma página para usar como base.

## Conclusão: O Impacto na Minha Forma de Trabalhar

Essa experiência mudou minha percepção. O desenvolvimento se tornou uma conversa, um processo mais dinâmico e menos solitário. A barreira de entrada para tecnologias novas como o Astro.js diminuiu drasticamente. A diversão de simplesmente "construir coisas" voltou a ser o foco principal.

---

*Nota para o futuro: Lembre-se de como essa ferramenta tornou o desenvolvimento divertido e acessível. Não hesite em experimentar novas tecnologias, mesmo que pareçam complexas. A IA pode ser uma grande aliada para achatar a curva de aprendizado.*
