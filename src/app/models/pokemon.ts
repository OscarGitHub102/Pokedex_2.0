export interface Pokemon {
  id: number;
  name: string;
  types: string[];
  height: number;
  weight: number;
  image: string;
}

export const POKEMONS: Pokemon[] = [
  {
    "id": 1,
    "name": "Bulbasaur",
    "types": ["planta", "veneno"],
    "height": 0.7,
    "weight": 6.9,
    "image": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/001.png"
  },
  {
    "id": 2,
    "name": "Ivysaur",
    "types": ["planta", "veneno"],
    "height": 1.0,
    "weight": 13.0,
    "image": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/002.png"
  },
  {
    "id": 3,
    "name": "Venusaur",
    "types": ["planta", "veneno"],
    "height": 2.0,
    "weight": 100.0,
    "image": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/003.png",
  },
  {
    "id": 4,
    "name": "Charmander",
    "types": ["fuego"],
    "height": 0.6,
    "weight": 8.5,
    "image": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/004.png"
  },
  {
    "id": 5,
    "name": "Charmeleon",
    "types": ["fuego"],
    "height": 1.1,
    "weight": 19.0,
    "image": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/005.png"
  },
  {
    "id": 6,
    "name": "Charizard",
    "types": ["fuego", "volador"],
    "height": 1.7,
    "weight": 90.5,
    "image": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/006.png"
  },
  {
    "id": 7,
    "name": "Squirtle",
    "types": ["agua"],
    "height": 0.5,
    "weight": 9.0,
    "image": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/007.png"
  },
  {
    "id": 8,
    "name": "Wartortle",
    "types": ["agua"],
    "height": 1.0,
    "weight": 22.5,
    "image": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/008.png"
  },
  {
    "id": 9,
    "name": "Blastoise",
    "types": ["agua"],
    "height": 1.6,
    "weight": 85.5,
    "image": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/009.png",
  },
  {
    "id": 10,
    "name": "Caterpie",
    "types": ["bicho"],
    "height": 0.3,
    "weight": 2.9,
    "image": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/010.png"
  },
  {
    "id": 11,
    "name": "Metapod",
    "types": ["bicho"],
    "height": 0.7,
    "weight": 9.9,
    "image": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/011.png"
  },
  {
    "id": 12,
    "name": "Butterfree",
    "types": ["bicho", "volador"],
    "height": 1.1,
    "weight": 32.0,
    "image": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/012.png"
  },
  {
    "id": 13,
    "name": "Weedle",
    "types": ["bicho", "veneno"],
    "height": 0.3,
    "weight": 3.2,
    "image": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/013.png"
  },
  {
    "id": 14,
    "name": "Kakuna",
    "types": ["bicho", "veneno"],
    "height": 0.6,
    "weight": 10.0,
    "image": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/014.png"
  },
  {
    "id": 15,
    "name": "Beedrill",
    "types": ["bicho", "veneno"],
    "height": 1.0,
    "weight": 29.5,
    "image": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/015.png"
  },
  {
    "id": 16,
    "name": "Pidgey",
    "types": ["normal", "volador"],
    "height": 0.3,
    "weight": 1.8,
    "image": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/016.png"
  },
  {
    "id": 17,
    "name": "Pidgeotto",
    "types": ["normal", "volador"],
    "height": 1.1,
    "weight": 30.0,
    "image": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/017.png"
  },
  {
    "id": 18,
    "name": "Pidgeot",
    "types": ["normal", "volador"],
    "height": 1.5,
    "weight": 39.5,
    "image": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/018.png"
  },
  {
    "id": 19,
    "name": "Rattata",
    "types": ["normal"],
    "height": 0.3,
    "weight": 3.5,
    "image": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/019.png"
  },
  {
    "id": 20,
    "name": "Raticate",
    "types": ["normal"],
    "height": 0.7,
    "weight": 18.5,
    "image": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/020.png"
  },
  {
    "id": 21,
    "name": "Spearow",
    "types": ["normal", "volador"],
    "height": 0.3,
    "weight": 2.0,
    "image": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/021.png"
  },
  {
    "id": 22,
    "name": "Fearow",
    "types": ["normal", "volador"],
    "height": 1.2,
    "weight": 38.0,
    "image": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/022.png"
  },
  {
    "id": 23,
    "name": "Ekans",
    "types": ["veneno"],
    "height": 2.0,
    "weight": 6.9,
    "image": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/023.png"
  },
  {
    "id": 24,
    "name": "Arbok",
    "types": ["veneno"],
    "height": 3.5,
    "weight": 65.0,
    "image": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/024.png"
  },
  {
    "id": 25,
    "name": "Pikachu",
    "types": ["eléctrico"],
    "height": 0.4,
    "weight": 6.0,
    "image": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/025.png"
  },
  {
    "id": 26,
    "name": "Raichu",
    "types": ["eléctrico"],
    "height": 0.8,
    "weight": 30.0,
    "image": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/026.png"
  },
  {
    "id": 27,
    "name": "Sandshrew",
    "types": ["tierra"],
    "height": 0.6,
    "weight": 12.0,
    "image": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/027.png"
  },
  {
    "id": 28,
    "name": "Sandslash",
    "types": ["tierra"],
    "height": 1.0,
    "weight": 29.5,
    "image": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/028.png"
  },
  {
    "id": 29,
    "name": "Nidoran♀",
    "types": ["veneno"],
    "height": 0.4,
    "weight": 7.0,
    "image": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/029.png"
  },
  {
    "id": 30,
    "name": "Nidorina",
    "types": ["veneno"],
    "height": 0.8,
    "weight": 20.0,
    "image": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/030.png"
  },
  {
    "id": 31,
    "name": "Nidoqueen",
    "types": ["veneno", "tierra"],
    "height": 1.3,
    "weight": 60.0,
    "image": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/031.png"
  },
  {
    "id": 32,
    "name": "Nidoran♂",
    "types": ["veneno"],
    "height": 0.5,
    "weight": 9.0,
    "image": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/032.png"
  },
  {
    "id": 33,
    "name": "Nidorino",
    "types": ["veneno"],
    "height": 0.9,
    "weight": 19.5,
    "image": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/033.png"
  },
  {
    "id": 34,
    "name": "Nidoking",
    "types": ["veneno", "tierra"],
    "height": 1.4,
    "weight": 62.0,
    "image": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/034.png"
  },
  {
    "id": 35,
    "name": "Clefairy",
    "types": ["hada"],
    "height": 0.6,
    "weight": 7.5,
    "image": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/035.png"
  },
  {
    "id": 36,
    "name": "Clefable",
    "types": ["hada"],
    "height": 1.3,
    "weight": 40.0,
    "image": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/036.png"
  },
  {
    "id": 37,
    "name": "Vulpix",
    "types": ["fuego"],
    "height": 0.6,
    "weight": 9.9,
    "image": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/037.png"
  },
  {
    "id": 38,
    "name": "Ninetales",
    "types": ["fuego"],
    "height": 1.1,
    "weight": 19.9,
    "image": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/038.png"
  },
  {
    "id": 39,
    "name": "Jigglypuff",
    "types": ["normal", "hada"],
    "height": 0.5,
    "weight": 5.5,
    "image": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/039.png"
  },
  {
    "id": 40,
    "name": "Wigglytuff",
    "types": ["normal", "hada"],
    "height": 1.0,
    "weight": 12.0,
    "image": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/040.png"
  },
  {
    "id": 41,
    "name": "Zubat",
    "types": ["veneno", "volador"],
    "height": 0.8,
    "weight": 7.5,
    "image": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/041.png"
  },
  {
    "id": 42,
    "name": "Golbat",
    "types": ["veneno", "volador"],
    "height": 1.6,
    "weight": 55.0,
    "image": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/042.png"
  },
  {
    "id": 43,
    "name": "Oddish",
    "types": ["planta", "veneno"],
    "height": 0.5,
    "weight": 5.4,
    "image": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/043.png"
  },
  {
    "id": 44,
    "name": "Gloom",
    "types": ["planta", "veneno"],
    "height": 0.8,
    "weight": 8.6,
    "image": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/044.png"
  },
  {
    "id": 45,
    "name": "Vileplume",
    "types": ["planta", "veneno"],
    "height": 1.2,
    "weight": 18.6,
    "image": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/045.png"
  },
  {
    "id": 46,
    "name": "Paras",
    "types": ["bicho", "planta"],
    "height": 0.3,
    "weight": 5.4,
    "image": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/046.png"
  },
  {
    "id": 47,
    "name": "Parasect",
    "types": ["bicho", "planta"],
    "height": 1.0,
    "weight": 29.5,
    "image": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/047.png"
  },
  {
    "id": 48,
    "name": "Venonat",
    "types": ["bicho", "veneno"],
    "height": 1.0,
    "weight": 30.0,
    "image": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/048.png"
  },
  {
    "id": 49,
    "name": "Venomoth",
    "types": ["bicho", "veneno"],
    "height": 1.5,
    "weight": 12.5,
    "image": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/049.png"
  },
  {
    "id": 50,
    "name": "Diglett",
    "types": ["tierra"],
    "height": 0.2,
    "weight": 0.8,
    "image": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/050.png"
  },
  {
    "id": 51,
    "name": "Dugtrio",
    "types": ["tierra"],
    "height": 0.7,
    "weight": 33.3,
    "image": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/051.png"
  },
  {
    "id": 52,
    "name": "Meowth",
    "types": ["normal"],
    "height": 0.4,
    "weight": 4.2,
    "image": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/052.png"
  },
  {
    "id": 53,
    "name": "Persian",
    "types": ["normal"],
    "height": 1.0,
    "weight": 32.0,
    "image": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/053.png"
  },
  {
    "id": 54,
    "name": "Psyduck",
    "types": ["agua"],
    "height": 0.8,
    "weight": 19.6,
    "image": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/054.png"
  },
  {
    "id": 55,
    "name": "Golduck",
    "types": ["agua"],
    "height": 1.7,
    "weight": 76.6,
    "image": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/055.png"
  },
  {
    "id": 56,
    "name": "Mankey",
    "types": ["lucha"],
    "height": 0.5,
    "weight": 28.0,
    "image": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/056.png"
  },
  {
    "id": 57,
    "name": "Primeape",
    "types": ["lucha"],
    "height": 1.0,
    "weight": 32.0,
    "image": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/057.png"
  },
  {
    "id": 58,
    "name": "Growlithe",
    "types": ["fuego"],
    "height": 0.7,
    "weight": 19.0,
    "image": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/058.png"
  },
  {
    "id": 59,
    "name": "Arcanine",
    "types": ["fuego"],
    "height": 1.9,
    "weight": 155.0,
    "image": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/059.png"
  },
  {
    "id": 60,
    "name": "Poliwag",
    "types": ["agua"],
    "height": 0.6,
    "weight": 12.4,
    "image": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/060.png"
  },
  {
    "id": 61,
    "name": "Poliwhirl",
    "types": ["agua"],
    "height": 1.0,
    "weight": 20.0,
    "image": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/061.png"
  },
  {
    "id": 62,
    "name": "Poliwrath",
    "types": ["agua", "lucha"],
    "height": 1.3,
    "weight": 54.0,
    "image": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/062.png"
  },
  {
    "id": 63,
    "name": "Abra",
    "types": ["psíquico"],
    "height": 0.9,
    "weight": 19.5,
    "image": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/063.png"
  },
  {
    "id": 64,
    "name": "Kadabra",
    "types": ["psíquico"],
    "height": 1.3,
    "weight": 56.5,
    "image": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/064.png"
  },
  {
    "id": 65,
    "name": "Alakazam",
    "types": ["psíquico"],
    "height": 1.5,
    "weight": 48.0,
    "image": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/065.png"
  },
  {
    "id": 66,
    "name": "Machop",
    "types": ["lucha"],
    "height": 0.8,
    "weight": 19.5,
    "image": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/066.png"
  },
  {
    "id": 67,
    "name": "Machoke",
    "types": ["lucha"],
    "height": 1.5,
    "weight": 70.5,
    "image": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/067.png"
  },
  {
    "id": 68,
    "name": "Machamp",
    "types": ["lucha"],
    "height": 1.6,
    "weight": 130.0,
    "image": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/068.png"
  },
  {
    "id": 69,
    "name": "Bellsprout",
    "types": ["planta", "veneno"],
    "height": 0.7,
    "weight": 4.0,
    "image": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/069.png"
  },
  {
    "id": 70,
    "name": "Weepinbell",
    "types": ["planta", "veneno"],
    "height": 1.0,
    "weight": 6.4,
    "image": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/070.png"
  },
  {
    "id": 71,
    "name": "Victreebel",
    "types": ["planta", "veneno"],
    "height": 1.7,
    "weight": 15.5,
    "image": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/071.png"
  },
  {
    "id": 72,
    "name": "Tentacool",
    "types": ["agua", "veneno"],
    "height": 0.9,
    "weight": 45.5,
    "image": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/072.png"
  },
  {
    "id": 73,
    "name": "Tentacruel",
    "types": ["agua", "veneno"],
    "height": 1.6,
    "weight": 55.0,
    "image": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/073.png"
  },
  {
    "id": 74,
    "name": "Geodude",
    "types": ["roca", "tierra"],
    "height": 0.4,
    "weight": 20.0,
    "image": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/074.png"
  },
  {
    "id": 75,
    "name": "Graveler",
    "types": ["roca", "tierra"],
    "height": 1.0,
    "weight": 105.0,
    "image": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/075.png"
  },
  {
    "id": 76,
    "name": "Golem",
    "types": ["roca", "tierra"],
    "height": 1.4,
    "weight": 300.0,
    "image": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/076.png"
  },
  {
    "id": 77,
    "name": "Ponyta",
    "types": ["fuego"],
    "height": 1.0,
    "weight": 30.0,
    "image": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/077.png"
  },
  {
    "id": 78,
    "name": "Rapidash",
    "types": ["fuego"],
    "height": 1.7,
    "weight": 95.0,
    "image": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/078.png"
  },
  {
    "id": 79,
    "name": "Slowpoke",
    "types": ["agua", "psíquico"],
    "height": 1.2,
    "weight": 36.0,
    "image": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/079.png"
  },
  {
    "id": 80,
    "name": "Slowbro",
    "types": ["agua", "psíquico"],
    "height": 1.6,
    "weight": 78.5,
    "image": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/080.png"
  },
  {
    "id": 81,
    "name": "Magnemite",
    "types": ["eléctrico", "acero"],
    "height": 0.3,
    "weight": 6.0,
    "image": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/081.png"
  },
  {
    "id": 82,
    "name": "Magneton",
    "types": ["eléctrico", "acero"],
    "height": 1.0,
    "weight": 60.0,
    "image": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/082.png"
  },
  {
    "id": 83,
    "name": "Farfetch’d",
    "types": ["normal", "volador"],
    "height": 0.8,
    "weight": 15.0,
    "image": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/083.png"
  },
  {
    "id": 84,
    "name": "Doduo",
    "types": ["normal", "volador"],
    "height": 1.4,
    "weight": 39.2,
    "image": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/084.png"
  },
  {
    "id": 85,
    "name": "Dodrio",
    "types": ["normal", "volador"],
    "height": 1.8,
    "weight": 85.2,
    "image": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/085.png"
  },
  {
    "id": 86,
    "name": "Seel",
    "types": ["agua"],
    "height": 1.1,
    "weight": 90.0,
    "image": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/086.png"
  },
  {
    "id": 87,
    "name": "Dewgong",
    "types": ["agua", "hielo"],
    "height": 1.7,
    "weight": 120.0,
    "image": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/087.png"
  },
  {
    "id": 88,
    "name": "Grimer",
    "types": ["veneno"],
    "height": 0.9,
    "weight": 30.0,
    "image": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/088.png"
  },
  {
    "id": 89,
    "name": "Muk",
    "types": ["veneno"],
    "height": 1.2,
    "weight": 30.0,
    "image": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/089.png"
  },
  {
    "id": 90,
    "name": "Shellder",
    "types": ["agua"],
    "height": 0.3,
    "weight": 4.0,
    "image": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/090.png"
  },
  {
    "id": 91,
    "name": "Cloyster",
    "types": ["agua", "hielo"],
    "height": 1.5,
    "weight": 132.5,
    "image": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/091.png"
  },
  {
    "id": 92,
    "name": "Gastly",
    "types": ["fantasma", "veneno"],
    "height": 1.3,
    "weight": 0.1,
    "image": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/092.png"
  },
  {
    "id": 93,
    "name": "Haunter",
    "types": ["fantasma", "veneno"],
    "height": 1.6,
    "weight": 0.1,
    "image": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/093.png"
  },
  {
    "id": 94,
    "name": "Gengar",
    "types": ["fantasma", "veneno"],
    "height": 1.5,
    "weight": 40.5,
    "image": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/094.png"
  },
  {
    "id": 95,
    "name": "Onix",
    "types": ["roca", "tierra"],
    "height": 8.8,
    "weight": 210.0,
    "image": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/095.png"
  },
  {
    "id": 96,
    "name": "Drowzee",
    "types": ["psíquico"],
    "height": 1.0,
    "weight": 32.4,
    "image": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/096.png"
  },
  {
    "id": 97,
    "name": "Hypno",
    "types": ["psíquico"],
    "height": 1.6,
    "weight": 75.6,
    "image": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/097.png"
  },
  {
    "id": 98,
    "name": "Krabby",
    "types": ["agua"],
    "height": 0.4,
    "weight": 6.5,
    "image": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/098.png"
  },
  {
    "id": 99,
    "name": "Kingler",
    "types": ["agua"],
    "height": 1.3,
    "weight": 60.0,
    "image": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/099.png"
  },
  {
    "id": 100,
    "name": "Voltorb",
    "types": ["eléctrico"],
    "height": 0.5,
    "weight": 10.4,
    "image": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/100.png"
  },
  {
    "id": 101,
    "name": "Electrode",
    "types": ["eléctrico"],
    "height": 1.2,
    "weight": 66.6,
    "image": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/101.png"
  },
  {
    "id": 102,
    "name": "Exeggcute",
    "types": ["planta", "psíquico"],
    "height": 0.4,
    "weight": 2.5,
    "image": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/102.png"
  },
  {
    "id": 103,
    "name": "Exeggutor",
    "types": ["planta", "psíquico"],
    "height": 2.0,
    "weight": 120.0,
    "image": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/103.png"
  },
  {
    "id": 104,
    "name": "Cubone",
    "types": ["tierra"],
    "height": 0.4,
    "weight": 6.5,
    "image": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/104.png"
  },
  {
    "id": 105,
    "name": "Marowak",
    "types": ["tierra"],
    "height": 1.0,
    "weight": 45.0,
    "image": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/105.png"
  },
  {
    "id": 106,
    "name": "Hitmonlee",
    "types": ["lucha"],
    "height": 1.5,
    "weight": 49.8,
    "image": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/106.png"
  },
  {
    "id": 107,
    "name": "Hitmonchan",
    "types": ["lucha"],
    "height": 1.4,
    "weight": 50.2,
    "image": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/107.png"
  },
  {
    "id": 108,
    "name": "Lickitung",
    "types": ["normal"],
    "height": 1.2,
    "weight": 65.5,
    "image": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/108.png"
  },
  {
    "id": 109,
    "name": "Koffing",
    "types": ["veneno"],
    "height": 0.6,
    "weight": 1.0,
    "image": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/109.png"
  },
  {
    "id": 110,
    "name": "Weezing",
    "types": ["veneno"],
    "height": 1.2,
    "weight": 9.5,
    "image": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/110.png"
  },
  {
    "id": 111,
    "name": "Rhyhorn",
    "types": ["tierra", "roca"],
    "height": 1.0,
    "weight": 115.0,
    "image": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/111.png"
  },
  {
    "id": 112,
    "name": "Rhydon",
    "types": ["tierra", "roca"],
    "height": 1.9,
    "weight": 120.0,
    "image": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/112.png"
  },
  {
    "id": 113,
    "name": "Chansey",
    "types": ["normal"],
    "height": 1.1,
    "weight": 34.6,
    "image": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/113.png"
  },
  {
    "id": 114,
    "name": "Tangela",
    "types": ["planta"],
    "height": 1.0,
    "weight": 35.0,
    "image": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/114.png"
  },
  {
    "id": 115,
    "name": "Kangaskhan",
    "types": ["normal"],
    "height": 2.2,
    "weight": 80.0,
    "image": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/115.png"
  },
  {
    "id": 116,
    "name": "Horsea",
    "types": ["agua"],
    "height": 0.4,
    "weight": 8.0,
    "image": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/116.png"
  },
  {
    "id": 117,
    "name": "Seadra",
    "types": ["agua"],
    "height": 1.2,
    "weight": 25.0,
    "image": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/117.png"
  },
  {
    "id": 118,
    "name": "Goldeen",
    "types": ["agua"],
    "height": 0.6,
    "weight": 15.0,
    "image": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/118.png"
  },
  {
    "id": 119,
    "name": "Seaking",
    "types": ["agua"],
    "height": 1.3,
    "weight": 39.0,
    "image": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/119.png"
  },
  {
    "id": 120,
    "name": "Staryu",
    "types": ["agua"],
    "height": 0.8,
    "weight": 34.5,
    "image": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/120.png"
  },
  {
    "id": 121,
    "name": "Starmie",
    "types": ["agua", "psíquico"],
    "height": 1.1,
    "weight": 80.0,
    "image": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/121.png"
  },
  {
    "id": 122,
    "name": "Mr. Mime",
    "types": ["psíquico", "hada"],
    "height": 1.3,
    "weight": 54.5,
    "image": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/122.png"
  },
  {
    "id": 123,
    "name": "Scyther",
    "types": ["bicho", "volador"],
    "height": 1.5,
    "weight": 56.0,
    "image": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/123.png"
  },
  {
    "id": 124,
    "name": "Jynx",
    "types": ["hielo", "psíquico"],
    "height": 1.4,
    "weight": 40.6,
    "image": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/124.png"
  },
  {
    "id": 125,
    "name": "Electabuzz",
    "types": ["eléctrico"],
    "height": 1.1,
    "weight": 30.0,
    "image": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/125.png"
  },
  {
    "id": 126,
    "name": "Magmar",
    "types": ["fuego"],
    "height": 1.3,
    "weight": 44.5,
    "image": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/126.png"
  },
  {
    "id": 127,
    "name": "Pinsir",
    "types": ["bicho"],
    "height": 1.5,
    "weight": 55.0,
    "image": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/127.png"
  },
  {
    "id": 128,
    "name": "Tauros",
    "types": ["normal"],
    "height": 1.4,
    "weight": 88.4,
    "image": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/128.png"
  },
  {
    "id": 129,
    "name": "Magikarp",
    "types": ["agua"],
    "height": 0.9,
    "weight": 10.0,
    "image": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/129.png"
  },
  {
    "id": 130,
    "name": "Gyarados",
    "types": ["agua", "volador"],
    "height": 6.5,
    "weight": 235.0,
    "image": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/130.png"
  },
  {
    "id": 131,
    "name": "Lapras",
    "types": ["agua", "hielo"],
    "height": 2.5,
    "weight": 220.0,
    "image": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/131.png"
  },
  {
    "id": 132,
    "name": "Ditto",
    "types": ["normal"],
    "height": 0.3,
    "weight": 4.0,
    "image": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/132.png"
  },
  {
    "id": 133,
    "name": "Eevee",
    "types": ["normal"],
    "height": 0.3,
    "weight": 6.5,
    "image": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/133.png"
  },
  {
    "id": 134,
    "name": "Vaporeon",
    "types": ["agua"],
    "height": 1.0,
    "weight": 29.0,
    "image": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/134.png"
  },
  {
    "id": 135,
    "name": "Jolteon",
    "types": ["eléctrico"],
    "height": 0.8,
    "weight": 24.5,
    "image": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/135.png"
  },
  {
    "id": 136,
    "name": "Flareon",
    "types": ["fuego"],
    "height": 0.9,
    "weight": 25.0,
    "image": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/136.png"
  },
  {
    "id": 137,
    "name": "Porygon",
    "types": ["normal"],
    "height": 0.8,
    "weight": 36.5,
    "image": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/137.png"
  },
  {
    "id": 138,
    "name": "Omanyte",
    "types": ["roca", "agua"],
    "height": 0.4,
    "weight": 7.5,
    "image": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/138.png"
  },
  {
    "id": 139,
    "name": "Omastar",
    "types": ["roca", "agua"],
    "height": 1.0,
    "weight": 35.0,
    "image": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/139.png"
  },
  {
    "id": 140,
    "name": "Kabuto",
    "types": ["roca", "agua"],
    "height": 0.5,
    "weight": 11.5,
    "image": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/140.png"
  },
  {
    "id": 141,
    "name": "Kabutops",
    "types": ["roca", "agua"],
    "height": 1.3,
    "weight": 40.5,
    "image": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/141.png"
  },
  {
    "id": 142,
    "name": "Aerodactyl",
    "types": ["roca", "volador"],
    "height": 1.8,
    "weight": 59.0,
    "image": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/142.png"
  },
  {
    "id": 143,
    "name": "Snorlax",
    "types": ["normal"],
    "height": 2.1,
    "weight": 460.0,
    "image": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/143.png"
  },
  {
    "id": 144,
    "name": "Articuno",
    "types": ["hielo", "volador"],
    "height": 1.7,
    "weight": 55.4,
    "image": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/144.png"
  },
  {
    "id": 145,
    "name": "Zapdos",
    "types": ["eléctrico", "volador"],
    "height": 1.6,
    "weight": 52.6,
    "image": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/145.png"
  },
  {
    "id": 146,
    "name": "Moltres",
    "types": ["fuego", "volador"],
    "height": 2.0,
    "weight": 60.0,
    "image": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/146.png"
  },
  {
    "id": 147,
    "name": "Dratini",
    "types": ["dragón"],
    "height": 1.8,
    "weight": 3.3,
    "image": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/147.png"
  },
  {
    "id": 148,
    "name": "Dragonair",
    "types": ["dragón"],
    "height": 4.0,
    "weight": 16.5,
    "image": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/148.png"
  },
  {
    "id": 149,
    "name": "Dragonite",
    "types": ["dragón", "volador"],
    "height": 2.2,
    "weight": 210.0,
    "image": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/149.png"
  },
  {
    "id": 150,
    "name": "Mewtwo",
    "types": ["psíquico"],
    "height": 2.0,
    "weight": 122.0,
    "image": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/150.png"
  },
  {
    "id": 151,
    "name": "Mew",
    "types": ["psíquico"],
    "height": 0.4,
    "weight": 4.0,
    "image": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/151.png"
  }
];