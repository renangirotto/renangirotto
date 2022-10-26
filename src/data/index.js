const EVENTS = [
  {
    tags: {
      type: "list",
      content: [
        "• 3 hábitos para escrever CSS escalável",
        "• UI e UX juntos e Design System now",
        "• RangeError Stack Exceeded",
        "• Além dos milissegundos, a Psicologia da Performance",
        "• Front-End 101: A resposta sobre estudar a base",
      ],
    },
    title: "Front In Sampa",
    subTitle: "WorkShop e Palestras",
    year: "2019",
  },
  {
    tags: {
      type: "list",
      content: [
        "• BIG DATA No mercado de Trabalho",
        "• Profissão Hacker do bem, FireEye",
        "• Desmistificando Mundo Maravilhoso de UX e as Torres do Design",
      ],
    },
    title: "WICA",
    subTitle: "Palestras",
    year: "2017",
  },
  {
    tags: {
      type: "list",
      content: [
        "• Adobe CC no mercado de trabalho",
        "• Ética e empatia no desenvolvimento de sistemas",
      ],
    },
    title: "WICA",
    subTitle: "Palestras",
    year: "2016",
  },
  {
    tags: {
      type: "list",
      content: [
        "• Projetos com Accelerated Mobile Pages Project AMP",
        "• Por dentro do UX nos portais de notícias brasileiros",
        "• Integração Twitter/NodeRED",
      ],
    },
    title: "DevFest São Paulo",
    subTitle: "WorkShop e Palestras",
    year: undefined,
  },
];

const EXPERIENCE = [
  {
    title: "Red Ventures Brasil",
    subTitle: "Desenvolvedor Front-end",
    year: "2022 - Atual",
    endAt: "Atual",
    tags: [0, 1, 2, 3, 4, 6, 7, 8, 10, 11],
    link: {
      href: "https://redventures.com.br/",
      beauty: "www.redventures.com.br",
    },
  },
  {
    title: "Construmarket",
    subTitle: "Desenvolvedor Front-end",
    year: "2020 - 2021",
    tags: [0, 1, 2, 3, 4, 9],
    link: {
      href: "https://construmarket.com.br/",
      beauty: "www.construmarket.com.br",
    },
  },
  {
    title: "Hive Solutions Cloud System",
    subTitle: "Desenvolvedor Front-end",
    year: "2020 - 2020",
    tags: [0, 1, 2, 3, 5],
    link: {
      href: "https://hivesolution.com.br/",
      beauty: "www.hivesolution.com.br",
    },
  },
  {
    title: "Tesla Tecnologia e Comunicação",
    subTitle: "Desenvolvedor Front-end Jr.",
    year: "2017 - 2020",
    tags: [0, 1, 2, 3],
    link: {
      href: "https://tesla.com.br/",
      beauty: "www.tesla.com.br",
    },
  },
  {
    title: "MMD Software Network Web",
    subTitle: "Desenvolvedor Trainee",
    year: "2015 - 2017",
    tags: [0, 1, 2, 3],
    link: {
      href: "https://www.linkedin.com/company/mmd-comercio-de-hardware-e-software-ltda/about/",
      beauty: "www.linkedin.com/mmd",
    },
  },
];

const KNOWLEDGE = [
  {
    name: "html5",
    id: 0,
  },
  {
    name: "css3",
    id: 1,
  },
  {
    name: "scss",
    id: 2,
  },
  {
    name: "javascript",
    id: 3,
  },
  {
    name: "typescript",
    id: 4,
  },
  {
    name: "vue",
    id: 5,
  },
  {
    name: "react",
    id: 6,
  },
  {
    name: "gatsby",
    id: 7,
  },
  {
    name: "next",
    id: 8,
  },
  {
    name: "angular",
    id: 9,
  },
  {
    name: "jest",
    id: 10,
  },
  {
    name: "testing-library",
    id: 11,
  },
];

const SECTIONS = {
  knowledge: {
    title: "Conhecimento Técnico",
    subTitle: "Linguagens, frameworks e bibliotecas",
    color: "cyan",
  },
  educational: {
    title: "Formação Técnica",
    subTitle: "Análise e desenvolvimento de sistemas",
    color: "cyan",
  },
  experience: {
    title: "Experiências Profissionais",
    subTitle: undefined,
    color: "orange",
  },
  events: {
    title: "Eventos da Comunidade",
    subTitle: undefined,
    color: "red",
  },
};

export { EVENTS, EXPERIENCE, KNOWLEDGE, SECTIONS };
