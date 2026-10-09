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
  {
    id: 7,
    name: "Elden Ring",
    genre: "RPG",
    platforms: ["pc", "playstation", "xbox"],
    releaseDate: "25 de Fevereiro, 2022",
    price: 249.9,
    description:
      "Explore as Terras Intermédias, enfrente inimigos desafiadores e descubra os segredos de um mundo de fantasia criado em colaboração com George R. R. Martin.",
    imageUrl: "/assets/images/games/eldenring.jpeg",
    qtdCart: 0,
  },
  {
    id: 8,
    name: "Cyberpunk 2077",
    genre: "RPG",
    platforms: ["pc", "playstation", "xbox"],
    releaseDate: "10 de Dezembro, 2020",
    price: 159.9,
    description:
      "Explore Night City na pele de V, um mercenário em busca de um implante que promete a imortalidade em uma metrópole futurista dominada pela tecnologia.",
    imageUrl: "/assets/images/games/cyberpunk2077.jpg",
    qtdCart: 0,
  },
  {
    id: 9,
    name: "Red Dead Redemption 2",
    genre: "Ação e aventura",
    platforms: ["pc", "playstation", "xbox"],
    releaseDate: "26 de Outubro, 2018",
    price: 199.9,
    description:
      "Acompanhe Arthur Morgan e a gangue Van der Linde em uma jornada pelo Velho Oeste americano durante o declínio da era dos fora da lei.",
    imageUrl: "/assets/images/games/rdr2.jpg",
    qtdCart: 0,
  },
  {
    id: 10,
    name: "The Witcher 3: Wild Hunt",
    genre: "RPG",
    platforms: ["pc", "playstation", "xbox", "nintendo"],
    releaseDate: "19 de Maio, 2015",
    price: 129.9,
    description:
      "Assuma o papel de Geralt de Rívia, um caçador de monstros que percorre um vasto mundo de fantasia em busca de Ciri.",
    imageUrl: "/assets/images/games/witcher3.png",
    qtdCart: 0,
  },
  {
    id: 11,
    name: "Resident Evil 4",
    genre: "Terror",
    platforms: ["pc", "playstation", "xbox"],
    releaseDate: "24 de Março, 2023",
    price: 179.9,
    description:
      "Leon S. Kennedy parte em uma missão para resgatar a filha do presidente dos Estados Unidos em uma região isolada dominada por uma ameaça misteriosa.",
    imageUrl: "/assets/images/games/re4.jpeg",
    qtdCart: 0,
  },
  {
    id: 12,
    name: "Hades",
    genre: "Roguelike",
    platforms: ["pc", "playstation", "xbox", "nintendo"],
    releaseDate: "17 de Setembro, 2020",
    price: 73.9,
    description:
      "Lute para escapar do submundo grego como Zagreus, filho de Hades, enfrentando inimigos e recebendo a ajuda dos deuses do Olimpo.",
    imageUrl: "/assets/images/games/hades.png",
    qtdCart: 0,
  },
  {
    id: 13,
    name: "Stardew Valley",
    genre: "Simulação",
    platforms: ["pc", "playstation", "xbox", "nintendo"],
    releaseDate: "26 de Fevereiro, 2016",
    price: 24.99,
    description:
      "Transforme uma antiga fazenda em um lar, cultive plantações, crie animais, faça amizades e descubra os segredos de uma pequena comunidade.",
    imageUrl: "/assets/images/games/stardew.jpg",
    qtdCart: 0,
  },
  {
    id: 14,
    name: "Forza Horizon 5",
    genre: "Corrida",
    platforms: ["pc", "xbox"],
    releaseDate: "9 de Novembro, 2021",
    price: 99.9,
    description:
      "Participe de um festival automobilístico em um mundo aberto inspirado no México, com paisagens variadas, eventos e centenas de veículos.",
    imageUrl: "/assets/images/games/nfs.jpeg",
    qtdCart: 0,
  },
  {
    id: 15,
    name: "Super Mario Odyssey",
    genre: "Plataforma",
    platforms: ["nintendo"],
    releaseDate: "27 de Outubro, 2017",
    price: 299.9,
    description:
      "Acompanhe Mario e seu companheiro Cappy em uma aventura por reinos variados para impedir os planos de Bowser.",
    imageUrl: "/assets/images/games/marioodyssey.jpg",
    qtdCart: 0,
  },
  {
    id: 16,
    name: "Persona 5 Royal",
    genre: "RPG",
    platforms: ["pc", "playstation", "xbox", "nintendo"],
    releaseDate: "31 de Outubro, 2019",
    price: 199.9,
    description:
      "Viva a rotina de um estudante japonês que, junto de seus amigos, explora um mundo sobrenatural para transformar os corações de pessoas corruptas.",
    imageUrl: "/assets/images/games/p5r.jpeg",
    qtdCart: 0,
  },
  {
    id: 17,
    name: "Dead Cells",
    genre: "Metroidvania",
    platforms: ["pc", "playstation", "xbox", "nintendo"],
    releaseDate: "7 de Agosto, 2018",
    price: 49.9,
    description:
      "Enfrente combates intensos, explore cenários interconectados e descubra novas habilidades em uma aventura de ação com elementos roguelike.",
    imageUrl: "/assets/images/games/deadcells.jpeg",
    qtdCart: 0,
  },
  {
    id: 18,
    name: "Minecraft",
    genre: "Sandbox",
    platforms: ["pc", "playstation", "xbox", "nintendo"],
    releaseDate: "18 de Novembro, 2011",
    price: 99.9,
    description:
      "Explore mundos gerados proceduralmente, reúna recursos, construa estruturas e sobreviva a criaturas em uma aventura que estimula a criatividade.",
    imageUrl: "/assets/images/games/minecraft.jpg",
    qtdCart: 0,
  },
  {
    id: 19,
    name: "Horizon Forbidden West",
    genre: "Ação e aventura",
    platforms: ["pc", "playstation"],
    releaseDate: "18 de Fevereiro, 2022",
    price: 249.9,
    description:
      "Aloy viaja por uma fronteira misteriosa para investigar ameaças que colocam em risco a sobrevivência da humanidade em um mundo dominado por máquinas.",
    imageUrl: "/assets/images/games/horizonforbiddenwest.jpeg",
    qtdCart: 0,
  },
  {
    id: 20,
    name: "Final Fantasy XVI",
    genre: "RPG",
    platforms: ["pc", "playstation", "xbox"],
    releaseDate: "22 de Junho, 2023",
    price: 249.9,
    description:
      "Acompanhe Clive Rosfield em uma jornada de vingança e descobertas por Valisthea, um mundo de fantasia marcado por conflitos entre nações e poderes mágicos.",
    imageUrl: "/assets/images/games/ff16.jpeg",
    qtdCart: 0,
  },
  {
    id: 21,
    name: "Sekiro: Shadows Die Twice",
    genre: "Ação e aventura",
    platforms: ["pc", "playstation", "xbox"],
    releaseDate: "22 de Março, 2019",
    price: 199.9,
    description:
      "Assuma o papel de um shinobi em uma versão fantástica do Japão do período Sengoku e enfrente inimigos desafiadores em uma jornada para resgatar seu mestre e restaurar sua honra.",
    imageUrl: "/assets/images/games/sekiro.jpeg",
    qtdCart: 0,
  },
];
