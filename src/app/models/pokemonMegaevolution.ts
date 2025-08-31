export interface PokemonMegaevolution {
  id: number;
  name: string;
  stone: string;
  types: string[];
  height: number;
  weight: number;
  image: string;
}

export const POKEMONS_MEGAEVOLUTIONS: PokemonMegaevolution[] = [
    {
        id: 1,
        name: 'Mega-Venusaur',
        stone: "https://static.wikia.nocookie.net/espokemon/images/1/19/Venusaurita_%28Dream_World%29.png",
        types: ['planta', 'veneno'],
        height: 2.4,
        weight: 155.5,
        image: 'https://images.wikidexcdn.net/mwuploads/wikidex/thumb/3/3d/latest/20230120025214/Mega-Venusaur.png/520px-Mega-Venusaur.png',

    },
    {
        id: 2,
        name: 'Mega-Charizard X',
        stone: "https://static.wikia.nocookie.net/espokemon/images/5/59/Charizardita_X_%28Dream_World%29.png",
        types: ['fuego', 'dragón'],
        height: 1.7,
        weight: 110.5,
        image: 'https://images.wikidexcdn.net/mwuploads/wikidex/thumb/8/88/latest/20150301123501/Mega-Charizard_X.png/520px-Mega-Charizard_X.png',

    },
    {
        id: 3,
        name: 'Mega-Charizard Y',
        stone: "https://static.wikia.nocookie.net/espokemon/images/6/69/Charizardita_Y_%28Dream_World%29.png",
        types: ['fuego', 'volador'],
        height: 1.7,
        weight: 100.5,
        image: 'https://images.wikidexcdn.net/mwuploads/wikidex/thumb/3/39/latest/20160309232803/Mega-Charizard_Y.png/520px-Mega-Charizard_Y.png',

    },
    {
        id: 4,
        name: 'Mega-Blastoise',
        stone: "https://static.wikia.nocookie.net/espokemon/images/f/fd/Blastoisita_%28Dream_World%29.png",
        types: ['agua'],
        height: 1.6,
        weight: 101.1,
        image: 'https://images.wikidexcdn.net/mwuploads/wikidex/thumb/3/39/latest/20160309232803/Mega-Charizard_Y.png/520px-Mega-Charizard_Y.png',

    },
    {
        id: 5,
        name: 'Mega-Beedrill',
        stone: "https://static.wikia.nocookie.net/espokemon/images/9/9b/Beedrillita_%28dream_world%29.png",
        types: ['bicho', 'veneno'],
        height: 1.4,
        weight: 40.5,
        image: 'https://images.wikidexcdn.net/mwuploads/wikidex/thumb/f/f0/latest/20200428210308/Mega-Beedrill.png/520px-Mega-Beedrill.png',
    },
    {
        id: 6,
        name: 'Mega-Pidgeot',
        stone: "https://static.wikia.nocookie.net/espokemon/images/7/7b/Pidgeotita_%28dream_world%29.png",
        types: ['normal', 'volador'],
        height: 2.2,
        weight: 50.5,
        image: 'https://images.wikidexcdn.net/mwuploads/wikidex/6/6b/latest/20141014154121/Mega-Pidgeot.png',
    },
    {
        id: 7,
        name: 'Mega-Alakazam',
        stone: "https://static.wikia.nocookie.net/espokemon/images/0/0c/Alakazamita_%28Dream_World%29.png",
        types: ['psíquico'],
        height: 1.2,
        weight: 40,
        image: 'https://images.wikidexcdn.net/mwuploads/wikidex/d/d2/latest/20200428210207/Mega-Alakazam.png',
    },
    {
        id: 8,
        name: 'Mega-Victreebel',
        stone: "https://www.pokewiki.de/images/3/32/Artwork_Schlüssel-Stein.png",
        types: ['planta', 'veneno'],
        height: 4.5,
        weight: 125.5,
        image: 'https://images.wikidexcdn.net/mwuploads/wikidex/thumb/9/9b/latest/20250821132434/Mega-Victreebel.png/520px-Mega-Victreebel.png',
    },
    {
        id: 9,
        name: 'Mega-Slowbro',
        stone: "https://static.wikia.nocookie.net/espokemon/images/1/16/Slowbronita_%28dream_world%29.png",
        types: ['agua', 'psíquico'],
        height: 2,
        weight: 120,
        image: 'https://images.wikidexcdn.net/mwuploads/wikidex/thumb/7/76/latest/20141013115645/Mega-Slowbro.png/520px-Mega-Slowbro.png',
    },
    {
        id: 10,
        name: 'Mega-Gengar',
        stone: "https://static.wikia.nocookie.net/espokemon/images/9/9c/Gengarita_%28Dream_World%29.png",
        types: ['fantasma', 'veneno'],
        height: 1.4,
        weight: 40.5,
        image: 'https://images.wikidexcdn.net/mwuploads/wikidex/thumb/2/28/latest/20190430164721/Mega-Gengar.png/520px-Mega-Gengar.png',
    },
    {
        id: 11,
        name: 'Mega-Kangaskhan',
        stone: "https://static.wikia.nocookie.net/espokemon/images/3/35/Kangaskhanita_%28Dream_World%29.png",
        types: ['normal'],
        height: 2.2,
        weight: 100,
        image: 'https://images.wikidexcdn.net/mwuploads/wikidex/thumb/e/e9/latest/20190430165416/Mega-Kangaskhan.png/520px-Mega-Kangaskhan.png',
    },
    {
        id: 12,
        name: 'Mega-Pinsir',
        stone: "https://static.wikia.nocookie.net/espokemon/images/5/5c/Pinsirita_%28Dream_World%29.png",
        types: ['bicho', 'volador'],
        height: 1.7,
        weight: 59,
        image: 'https://images.wikidexcdn.net/mwuploads/wikidex/thumb/0/0c/latest/20190430193105/Mega-Pinsir.png/520px-Mega-Pinsir.png',
    },
    {
        id: 13,
        name: 'Mega-Gyarados',
        stone: "https://static.wikia.nocookie.net/espokemon/images/3/30/Gyaradosita_%28Dream_World%29.png",
        types: ['agua', 'siniestro'],
        height: 6.5,
        weight: 305,
        image: 'https://images.wikidexcdn.net/mwuploads/wikidex/2/23/latest/20200428203216/Mega-Gyarados.png',
    },
    {
        id: 14,
        name: 'Mega-Aerodactyl',
        stone: "https://static.wikia.nocookie.net/espokemon/images/9/94/Aerodactylita_%28Dream_World%29.png",
        types: ['roca', 'volador'],
        height: 2.1,
        weight: 79,
        image: 'https://images.wikidexcdn.net/mwuploads/wikidex/thumb/b/b0/latest/20160831130800/Mega-Aerodactyl.png/520px-Mega-Aerodactyl.png',
    },
    {
        id: 15,
        name: 'Mega-Dragonite',
        stone: "https://www.pokewiki.de/images/3/32/Artwork_Schlüssel-Stein.png",
        types: ['dragón', 'volador'],
        height: 2.2,
        weight: 290,
        image: 'https://images.wikidexcdn.net/mwuploads/wikidex/thumb/c/cc/latest/20250722221047/Mega-Dragonite.png/520px-Mega-Dragonite.png',
    },
    {
        id: 16,
        name: 'Mega-Mewtwo X',
        stone: "https://static.wikia.nocookie.net/espokemon/images/b/bd/Mewtwoita_X_%28Dream_World%29.png",
        types: ['psíquico', 'lucha'],
        height: 2.3,
        weight: 127,
        image: 'https://images.wikidexcdn.net/mwuploads/wikidex/thumb/e/e2/latest/20190430185345/Mega-Mewtwo_X.png/520px-Mega-Mewtwo_X.png',
    },
    {
        id: 17,
        name: 'Mega-Mewtwo Y',
        stone: "https://static.wikia.nocookie.net/espokemon/images/9/92/Mewtwoita_Y_%28Dream_World%29.png",
        types: ['psíquico'],
        height: 1.5,
        weight: 33,
        image: 'https://images.wikidexcdn.net/mwuploads/wikidex/thumb/7/76/latest/20190430190952/Mega-Mewtwo_Y.png/520px-Mega-Mewtwo_Y.png',
    }
];
