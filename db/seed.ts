import { db, PersonalInfo, Projects, Authors } from 'astro:db'

// Seed personal info
export default async function seed() {
  // Clear existing data
  await db.delete(PersonalInfo)
  await db.delete(Projects)
  await db.delete(Authors)

  await db.insert(PersonalInfo).values({
    id: 1,
    // Hero section
    heroTitle: 'Victor Hugo',
    heroSubtitle:
      'Desenvolvedor fullstack com mais de 13 anos de experiência em desenvolvimento de tecnologias web',
    heroCtaText: 'Meus trabalhos 📣',
    // About section
    aboutTitle: 'Sobre mim',
    aboutBio:
      'Tenho expertise em diversas linguagens de programação, incluindo Java, C#, VB.Net, Delphi e Node.js. Atuei em projetos utilizando metodologias ágeis como SCRUM',
    aboutSkills: [
      'Java',
      'Go',
      'C#',
      'VB.Net',
      'Delphi',
      'Node.js',
      'React',
      'Vue.js',
      'Angular',
      'NestJS',
      'PostgreSQL',
      'MySQL',
      'SQL Server',
      'Docker',
      'GitHub Actions',
    ],
    aboutExperience: '13+ anos',
    aboutImage: null,
    // Contact section
    contactTitle: 'Entre em contato',
    contactSubtitle:
      'Me envie uma mensagem e responderei o mais breve possível.',
    contactEmail: 'contato@victorhugo.info',
    contactLinkedin: 'https://www.linkedin.com/in/victorhdchagas/',
    contactGithub: 'https://github.com/victorhdchagas',
    contactNostr:
      'f1597634eb562ad3696625eb46d488f56755ba4a6cea2a2de9610c60c6d40bf4',
  })

  // Seed authors
  await db.insert(Authors).values({
    id: 1,
    name: 'Victor Hugo',
    bio: 'Analista, Desenvolvedor, Gamer... Apaixonado por criar soluções web escaláveis.',
    avatar: 'https://victorhugo.info/pictures/avatar.jpeg',
    email: 'contato@victorhugo.info',
    website: 'https://victorhugo.info',
    twitter: 'https://twitter.com/wutahi',
    linkedin: 'https://www.linkedin.com/in/victorhdchagas/',
    github: 'https://github.com/victorhdchagas',
    nostr: 'npub179vhvd8t2c4dx6txyh45d4yg74n4twj2dn4z5t0fvyxxp3k5p06q9hl3u6',
  })

  // Seed projects
  await db.insert(Projects).values([
    {
      id: 1,
      title: 'Roletronic',
      smallDescription:
        'Roletronic é o portal nacional de música eletrônica, projetado para ser o epicentro da cena da música eletrônica brasileira.',
      fullDescription: [
        'Roletronic é o portal nacional de música eletrônica, projetado para ser o epicentro da cena da música eletrônica brasileira. Sua missão é conectar artistas e fãs, promovendo um espaço dedicado à interação e descoberta.',
        'A plataforma permite aos usuários explorar, conhecer e se conectar dentro do mundo da música eletrônica. Ela apresenta diversas categorias e funcionalidades, incluindo artistas, eventos, profissionais, comunidade e gêneros musicais.',
        'Backend desenvolvido com NestJS, utilizando Prisma ORM para gestão de banco de dados, integração com AWS S3 para armazenamento de arquivos, autenticação JWT com Passport, validação com Class-validator e Zod.',
        'Frontend construído com Next.js e React, utilizando Radix UI e Radix Themes para componentes, Framer Motion para animações, React Hook Form com Zod para validação de formulários.',
        'Integração com ferramentas como Nodemailer/Resend para envio de e-mails, Sharp para processamento de imagens, Stripe para pagamentos, FFmpeg para manipulação de áudio/vídeo, e React Easy Crop para edição de imagens.',
        'Implementação de SEO avançado, análise de dados, integração com redes sociais, e estilização com Tailwind CSS e SASS para uma experiência de usuário moderna e responsiva.',
        'Suporte a diversos gêneros musicais como Bushprog, Techno, Zenonesque, Psytech, Minimal Dark, Glitch Hop, Gangsta Prog, Future Prog, Chillgressive e Fullon.',
      ],
      images: ['screenshot1.webp'],
      tags: [
        'Next.js',
        'NestJS',
        'TypeScript',
        'Prisma',
        'PostgreSQL',
        'React',
        'Radix UI',
        'Tailwind CSS',
        'AWS S3',
        'Stripe',
        'Framer Motion',
      ],
      link: 'https://roletronic.com',
    },
    {
      id: 2,
      title: 'Walletr',
      smallDescription:
        'Walletr é uma aplicação offline que preza pelo sigilo do seus dados. Na contra mão dos demais aplicativos de gerenciamento financeiro o Walletr não envia seus dados para um servidor. Ele persiste tudo localmente.',
      fullDescription: [
        'Walletr é uma aplicação web progressiva (PWA) desenvolvida para oferecer controle total sobre suas finanças pessoais de forma completamente offline e segura.',
        'Ao contrário dos aplicativos tradicionais de gerenciamento financeiro que armazenam dados em servidores na nuvem, o Walletr mantém todas as informações localmente no seu dispositivo, garantindo total privacidade e controle sobre seus dados financeiros.',
        'A aplicação utiliza IndexedDB para armazenamento local robusto, permitindo que você gerencie receitas, despesas, categorias e acompanhe seu orçamento sem depender de conexão com a internet.',
        'Interface moderna e responsiva desenvolvida com React e TypeScript, oferecendo uma experiência de usuário fluida e intuitiva em qualquer dispositivo.',
        'Como PWA, pode ser instalada diretamente no dispositivo, funcionando como um aplicativo nativo com acesso offline completo às suas informações financeiras.',
        'Recursos incluem categorização automática de transações, relatórios visuais de gastos, controle de orçamento mensal e sincronização opcional entre dispositivos quando desejado.',
      ],
      images: ['screenshot1.png'],
      tags: ['React', 'TypeScript', 'IndexedDB', 'PWA', 'GO'],
      link: 'https://walletr.victorhugo.info',
    },
    {
      id: 3,
      title: 'NsecGen',
      smallDescription:
        'Uma aplicação que gera um NSEC Nostr baseado em algumas palavras decoradas. Ferramenta para geração segura de chaves Nostr.',
      fullDescription: [
        'NsecGen é uma ferramenta especializada na geração segura de chaves privadas Nostr (NSEC), utilizando o padrão de palavras mnemônicas para facilitar o backup e recuperação de chaves.',
        'O Nostr (Notes and Other Stuff Transmitted by Relays) é um protocolo descentralizado para redes sociais, e o NsecGen ajuda usuários a criar suas identidades digitais de forma segura e memorável.',
        'A aplicação utiliza criptografia avançada para gerar chaves privadas Nostr a partir de frases mnemônicas, seguindo os padrões BIP39 para máxima segurança e compatibilidade.',
        'Interface web moderna e minimalista desenvolvida com React e TypeScript, focada na simplicidade e segurança do processo de geração de chaves.',
        'Recursos incluem geração determinística de chaves, validação de frases mnemônicas, preview das chaves públicas correspondentes (npub) e avisos de segurança sobre backup adequado.',
        'Totalmente executado no navegador do usuário, garantindo que suas chaves privadas nunca são transmitidas ou armazenadas em servidores externos.',
        'Compatível com todas as carteiras e aplicações Nostr, permitindo integração imediata com o ecossistema Nostr após a geração das chaves.',
      ],
      images: ['screenshot1.png'],
      tags: ['React', 'TypeScript', 'Nostr Protocol', 'Cryptography'],
      link: 'https://nsecgen.victorhugo.info',
    },
    {
      id: 4,
      title: 'CRM Consignado',
      smallDescription:
        'Sistema CRM para empréstimos consignados com integração Nexcore para ligações e gerenciamento através do sistema. Incluía relatórios analíticos e interface mobile.',
      fullDescription: [
        'Sistema CRM completo desenvolvido para gestão de empréstimos consignados, integrando funcionalidades avançadas de relacionamento com clientes e automação de processos de crédito.',
        'Integração nativa com a plataforma Nexcore para realização automática de ligações, follow-ups e gestão de leads qualificados no segmento de empréstimos consignados.',
        'Backend robusto desenvolvido com Node.js e NestJS, oferecendo APIs RESTful para integração com sistemas externos e processamento assíncrono de grandes volumes de dados.',
        'Banco de dados MySQL otimizado para alta performance, com estrutura relacional complexa para armazenar histórico completo de clientes, propostas e transações.',
        'Interface web responsiva desenvolvida em Vue.js, proporcionando dashboards analíticos em tempo real com métricas de conversão, performance de vendedores e indicadores de negócio.',
        'Aplicativo mobile nativo para acompanhamento de propostas em tempo real, aprovação de créditos e gestão de carteira de clientes pelos agentes de vendas.',
        'Recursos incluem automação de workflows de aprovação, integração com bureaus de crédito, geração automática de contratos e relatórios gerenciais avançados.',
        'Sistema escalável projetado para suportar milhares de usuários simultâneos, com arquitetura de microserviços preparada para crescimento futuro.',
      ],
      images: [],
      tags: ['Vue.js', 'Node.js', 'MySQL', 'Nexcore API'],
      link: 'https://github.com/victorhdchagas',
    },
    {
      id: 5,
      title: 'Sistema Mobile ECAD',
      smallDescription:
        'Aplicação mobile para verificação de músicas utilizadas em estabelecimentos para notificação no ECAD. Sistema híbrido com interface web administrativa.',
      fullDescription: [
        'Sistema móvel híbrido desenvolvido para fiscalização e verificação de execução musical em estabelecimentos comerciais, integrado com o sistema ECAD (Escritório Central de Arrecadação e Distribuição).',
        'Aplicação mobile desenvolvida com Cordova/PhoneGap, permitindo execução nativa em plataformas iOS e Android com interface unificada e performance otimizada.',
        'Backend desenvolvido em C# com ASP.NET, oferecendo APIs robustas para sincronização de dados entre dispositivos móveis e sistema central.',
        'Banco de dados SQL Server para armazenamento centralizado de informações de estabelecimentos, repertório musical verificado e relatórios de fiscalização.',
        'Interface administrativa web desenvolvida com jQuery e Bootstrap, permitindo gestão centralizada de usuários, estabelecimentos e relatórios analíticos.',
        'Recursos incluem geolocalização para registro preciso de visitas, captura de fotos como prova documental, formulários digitais para relatórios padronizados e sincronização offline/online.',
        'Integração direta com base de dados ECAD para validação automática de repertório musical e cálculo preciso de direitos autorais devidos.',
        'Sistema escalável que suporta equipes de fiscalização distribuídas geograficamente, com dashboards em tempo real para acompanhamento de produtividade e cobertura territorial.',
      ],
      images: [],
      tags: ['C#', 'Cordova/PhoneGap', 'SQL Server', 'jQuery'],
      link: null,
    },
    {
      id: 6,
      title: 'Publiquei',
      smallDescription:
        'Plataforma SaaS multi-tenant para publicações e eventos com dupla entrega: presença no Google e nos buscadores (SEO) e descoberta por IAs como ChatGPT e Perplexity. Publique uma vez e apareça nos dois mundos.',
      fullDescription: [
        'Publiquei é uma plataforma SaaS multi-tenant criada para publicações e eventos que precisam ser encontrados tanto por buscadores tradicionais quanto por assistentes de IA. O lema resume a proposta: "Publique uma vez. Apareça no Google e nas IAs."',
        'A plataforma entrega o mesmo conteúdo em dois canais: na Web, com SEO automático (JSON-LD, Open Graph e sitemap) para Google, Bing e redes sociais; e na camada de IA, expondo o conteúdo em text/markdown e application/json (RAG-friendly) para LLMs e ferramentas com busca em tempo real, como Perplexity e ChatGPT.',
        'Um dos diferenciais é a content negotiation no header Accept: o servidor devolve text/html para navegadores e crawlers, ou text/markdown e application/json para agentes de IA e integrações, tudo a partir do mesmo endereço.',
        'Nos bastidores, o backend é uma API REST escrita em Go com Gin e GORM sobre PostgreSQL, usando Row-Level Security para garantir o isolamento dos dados entre tenants. O front-end público é gerado com Astro (SSG/SSR) em páginas leves e sem JavaScript, e o painel administrativo é uma SPA em React.',
        'Cada tenant recebe seu próprio subdomínio (ex.: escola.publiquei.online) ou domínio personalizado, com llms.txt, sitemap.xml e sitemap-llms.xml gerados automaticamente para acelerar a descoberta por crawlers de IA.',
        'O produto é oferecido em modelo de assinatura, com plano gratuito para começar (sem cartão de crédito), plano Pro com publicações ilimitadas e domínio personalizado, e plano Scale com acesso à API e marca própria.',
        'A proposta é simples: indexação dos conteúdos em até 48h e toda a configuração de SEO técnico — JSON-LD, Open Graph, dados estruturados e sitemaps — sem exigir conhecimento técnico do usuário.',
      ],
      images: ['screenshot1.png'],
      tags: [
        'Go',
        'Gin',
        'GORM',
        'PostgreSQL',
        'Astro',
        'TypeScript',
        'SEO',
        'Multi-tenancy',
        'Content Negotiation',
        'LLM/RAG',
        'SaaS',
      ],
      link: 'https://publiquei.online',
    },
    {
      id: 7,
      title: 'TapIn',
      smallDescription:
        'TapIn aproxima comércios locais dos clientes por notificações opt-in. O cliente escaneia um QR Code, monta seu catálogo de produtos favoritos e só recebe aviso do que ele mesmo escolheu. "O sinal que você pediu."',
      fullDescription: [
        'TapIn é um app que conecta comércios locais — padarias, açougues, feiras — aos clientes por meio de notificações push opt-in. O lema resume a proposta: "O sinal que você pediu." O nome nasce do domínio comtapin, a variação disponível de "TapIn".',
        'O fluxo é simples e sem atrito: o cliente escaneia um QR Code no balcão da loja, navega pelo catálogo de produtos e escolhe quais quer acompanhar. Quando o produto fica pronto, o comerciante toca em "Avisar" e o aviso chega apenas para quem pediu — sem cadastro, sem nome, sem e-mail, sem CPF.',
        'A privacidade é o pilar do produto: a identidade do cliente é o próprio aparelho (o token de push), então não há coleta de dado pessoal. Não existe spam nem anúncio — a notificação é sempre uma escolha explícita do usuário, que ainda pode definir janelas de horário para ser avisado (ex.: só de manhã, ou só no fim de semana).',
        'O mesmo app tem dois modos. No modo cliente (anônimo) a pessoa segue lojas e produtos, recebe os avisos e responde "Indo!". No modo dono (login por telefone + código) o comerciante gerencia o catálogo, categorias e preços, dispara os avisos e acompanha estatísticas de quantos clientes estão a caminho.',
        'Nos bastidores, o backend é uma API REST em Go com Gin e PostgreSQL, servindo também o PWA embutido em um binário único. O app mobile é construído com Expo (React Native) e o push usa Firebase Cloud Messaging no nativo e Web Push (RFC 8030) no PWA instalado.',
        'O cliente funciona offline-first: o catálogo fica em cache e as ações (seguir um produto, marcar "Indo!") entram numa fila que sincroniza assim que a conexão volta. O projeto nasceu para validar com uma padaria real e medir a conversão de intenção de compra.',
      ],
      images: ['screenshot1.png'],
      tags: [
        'Go',
        'Gin',
        'PostgreSQL',
        'Expo',
        'React Native',
        'React',
        'TypeScript',
        'PWA',
        'FCM',
        'Web Push',
      ],
      link: 'https://comtapin.publiquei.online',
    },
  ])
}
