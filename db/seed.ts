import { db, PersonalInfo, Projects } from 'astro:db'

// Seed personal info
export default async function seed() {
  await db.insert(PersonalInfo).values({
    id: 1,
    // Hero section
    heroTitle: 'Victor Hugo',
    heroSubtitle:
      'Fullstack Developer with 13+ years of experience in Java, C#, Node.js, and modern web technologies',
    heroCtaText: 'View My Work',
    // About section
    aboutTitle: 'About Me',
    aboutBio:
      'Com mais de 13 anos de experiência em desenvolvimento de tecnologia, tenho expertise em diversas linguagens de programação, incluindo Java, C#, VB.Net, Delphi e Node.js. Atuei em projetos utilizando metodologias ágeis como SCRUM, utilizando os princípios SOLID de desenvolvimento de software.',
    aboutSkills: [
      'Java',
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
      'Kubernetes',
    ],
    aboutExperience: '13+ years',
    aboutImage: null,
    // Contact section
    contactTitle: 'Get In Touch',
    contactSubtitle:
      "I'd love to hear from you. Send me a message and I'll respond as soon as possible.",
    contactEmail: 'victorhdchagas@live.com',
    contactLinkedin: 'https://www.linkedin.com/in/victorhdchagas/',
    contactGithub: 'https://github.com/victorhdchagas',
  })

  // Seed projects
  await db.insert(Projects).values([
    {
      id: 1,
      title: 'Roletronic',
      smallDescription: 'Social Network de artistas de musica eletronica.',
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
      images: ['screenshot1.webp'],
      tags: ['Nextjs', 'Nestjs', 'Typescript', 'Postgresql', 'React'],
      link: null,
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
      tags: ['React', 'TypeScript', 'IndexedDB', 'PWA'],
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
  ])
}
