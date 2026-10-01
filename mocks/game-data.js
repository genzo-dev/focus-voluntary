export const platforms = {
  pc: {
    name: "PC",
    icon: "assets/images/platforms/pc.svg",
  },

  playstation: {
    name: "PlayStation",
    icon: "assets/images/platforms/playstation.svg",
  },

  xbox: {
    name: "Xbox",
    icon: "/assets/images/platforms/xbox.svg",
  },

  nintendo: {
    name: "Nintendo",
    icon: "/assets/images/platforms/nintendo.svg",
  },
};

export const games = [
  {
    id: 1,
    name: "The Legend of Zelda: Breath of the Wild",
    genre: "Ação e aventura",
    platforms: ["nintendo"],
    releaseDate: "3 de Março, 2017",
    price: 299.9,
    description:
      "Um jogo de mundo aberto de ação e aventura ambientado no reino de Hyrule.",
    imageUrl: "/assets/images/games/zelda.avif",
    qtdCart: 0,
  },
  {
    id: 2,
    name: "God of War",
    genre: "Ação e aventura",
    platforms: ["pc", "playstation"],
    releaseDate: "20 de Abril, 2018",

    price: 114.9,
    description:
      "Kratos e Atreus viajam por um mundo mitológico nórdico para espalhar as cinzas de Faye, sua falecida mãe.",
    imageUrl: "/assets/images/games/gow2018.avif",
    qtdCart: 0,
  },
  {
    id: 3,
    name: "Final Fantasy XII The Zodiac Age",
    genre: "RPG",
    platforms: ["pc", "playstation", "xbox", "nintendo"],
    releaseDate: "11 de Julho, 2017",

    price: 219.9,
    description:
      "Final Fantasy XII: The Zodiac Age se passa no mundo de Ivalice, onde o pequeno reino de Dalmasca foi conquistado e anexado pelo Império Arcadiano.",
    imageUrl: "/assets/images/games/ff12.avif",
    qtdCart: 0,
  },
  {
    id: 4,
    name: "Hollow Knight Silksong",
    genre: "Metroidvania",
    platforms: ["pc", "playstation", "xbox", "nintendo"],
    releaseDate: "4 de Setembro, 2025",
    price: 59.99,
    description:
      "A história de Hollow Knight: Silksong acompanha a princesa-protetora Hornet após ser capturada e levada para Pharloom, um reino desconhecido e dominado por seda e música.",
    imageUrl: "/assets/images/games/silksong.avif",
    qtdCart: 0,
  },
  {
    id: 5,
    name: "Outer Wilds",
    genre: "Exploração",
    platforms: ["pc", "playstation", "xbox", "nintendo"],
    releaseDate: "28 de Maio, 2019",

    price: 92.45,
    description:
      "Outer Wilds é um jogo de mistério e exploração espacial em mundo aberto onde você fica preso em um loop temporal, repetindo o mesmo período até descobrir como impedir que o sol exploda em uma supernova.",
    imageUrl: "/assets/images/games/outerwilds.jpg",
    qtdCart: 0,
  },
  {
    id: 6,
    name: "Final Fantasy VII Remake",
    genre: "RPG",
    platforms: ["pc", "playstation", "xbox", "nintendo"],
    releaseDate: "10 de Abril, 2020",

    price: 149.5,
    description:
      "Final Fantasy VII Remake conta a história do mercenário Cloud Strife em sua luta contra a megacorporação Shinra na metrópole de Midgar.",
    imageUrl: "/assets/images/games/ff7remake.jpeg",
    qtdCart: 0,
  },
];
