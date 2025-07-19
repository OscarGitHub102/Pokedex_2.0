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
    "types": ["grass", "poison"],
    "height": 7,
    "weight": 69,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
  },
  {
    "id": 2,
    "name": "Ivysaur",
    "types": ["grass", "poison"],
    "height": 10,
    "weight": 130,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png"
  },
  {
    "id": 3,
    "name": "Venusaur",
    "types": ["grass", "poison"],
    "height": 20,
    "weight": 1000,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png"
  },
  {
    "id": 4,
    "name": "Charmander",
    "types": ["fire"],
    "height": 6,
    "weight": 85,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"
  },
  {
    "id": 5,
    "name": "Charmeleon",
    "types": ["fire"],
    "height": 11,
    "weight": 190,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png"
  },
  {
    "id": 6,
    "name": "Charizard",
    "types": ["fire", "flying"],
    "height": 17,
    "weight": 905,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png"
  },
  {
    "id": 7,
    "name": "Squirtle",
    "types": ["water"],
    "height": 5,
    "weight": 90,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png"
  },
  {
    "id": 8,
    "name": "Wartortle",
    "types": ["water"],
    "height": 10,
    "weight": 225,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png"
  },
  {
    "id": 9,
    "name": "Blastoise",
    "types": ["water"],
    "height": 16,
    "weight": 855,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png"
  },
  {
    "id": 10,
    "name": "Caterpie",
    "types": ["bug"],
    "height": 3,
    "weight": 29,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png"
  },
  {
    "id": 11,
    "name": "Metapod",
    "types": ["bug"],
    "height": 7,
    "weight": 99,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png"
  },
  {
    "id": 12,
    "name": "Butterfree",
    "types": ["bug", "flying"],
    "height": 11,
    "weight": 320,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png"
  },
  {
    "id": 13,
    "name": "Weedle",
    "types": ["bug", "poison"],
    "height": 3,
    "weight": 32,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png"
  },
  {
    "id": 14,
    "name": "Kakuna",
    "types": ["bug", "poison"],
    "height": 6,
    "weight": 100,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/14.png"
  },
  {
    "id": 15,
    "name": "Beedrill",
    "types": ["bug", "poison"],
    "height": 10,
    "weight": 295,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png"
  },
  {
    "id": 16,
    "name": "Pidgey",
    "types": ["normal", "flying"],
    "height": 3,
    "weight": 18,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png"
  },
  {
    "id": 17,
    "name": "Pidgeotto",
    "types": ["normal", "flying"],
    "height": 11,
    "weight": 300,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/17.png"
  },
  {
    "id": 18,
    "name": "Pidgeot",
    "types": ["normal", "flying"],
    "height": 15,
    "weight": 395,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/18.png"
  },
  {
    "id": 19,
    "name": "Rattata",
    "types": ["normal"],
    "height": 3,
    "weight": 35,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png"
  },
  {
    "id": 20,
    "name": "Raticate",
    "types": ["normal"],
    "height": 7,
    "weight": 185,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/20.png"
  },
  {
    "id": 21,
    "name": "Spearow",
    "types": ["normal", "flying"],
    "height": 3,
    "weight": 20,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/21.png"
  },
  {
    "id": 22,
    "name": "Fearow",
    "types": ["normal", "flying"],
    "height": 12,
    "weight": 380,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/22.png"
  },
  {
    "id": 23,
    "name": "Ekans",
    "types": ["poison"],
    "height": 20,
    "weight": 69,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/23.png"
  },
  {
    "id": 24,
    "name": "Arbok",
    "types": ["poison"],
    "height": 35,
    "weight": 650,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/24.png"
  },
  {
    "id": 25,
    "name": "Pikachu",
    "types": ["electric"],
    "height": 4,
    "weight": 60,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
  },
  {
    "id": 26,
    "name": "Raichu",
    "types": ["electric"],
    "height": 8,
    "weight": 300,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/26.png"
  },
  {
    "id": 27,
    "name": "Sandshrew",
    "types": ["ground"],
    "height": 6,
    "weight": 120,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/27.png"
  },
  {
    "id": 28,
    "name": "Sandslash",
    "types": ["ground"],
    "height": 10,
    "weight": 295,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/28.png"
  },
  {
    "id": 29,
    "name": "Nidoran♀",
    "types": ["poison"],
    "height": 4,
    "weight": 70,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/29.png"
  },
  {
    "id": 30,
    "name": "Nidorina",
    "types": ["poison"],
    "height": 8,
    "weight": 200,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/30.png"
  },
  {
    "id": 31,
    "name": "Nidoqueen",
    "types": ["poison", "ground"],
    "height": 13,
    "weight": 600,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/31.png"
  },
  {
    "id": 32,
    "name": "Nidoran♂",
    "types": ["poison"],
    "height": 5,
    "weight": 90,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/32.png"
  },
  {
    "id": 33,
    "name": "Nidorino",
    "types": ["poison"],
    "height": 9,
    "weight": 195,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/33.png"
  },
  {
    "id": 34,
    "name": "Nidoking",
    "types": ["poison", "ground"],
    "height": 14,
    "weight": 620,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/34.png"
  },
  {
    "id": 35,
    "name": "Clefairy",
    "types": ["fairy"],
    "height": 6,
    "weight": 75,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/35.png"
  },
  {
    "id": 36,
    "name": "Clefable",
    "types": ["fairy"],
    "height": 13,
    "weight": 400,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/36.png"
  },
  {
    "id": 37,
    "name": "Vulpix",
    "types": ["fire"],
    "height": 6,
    "weight": 99,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/37.png"
  },
  {
    "id": 38,
    "name": "Ninetales",
    "types": ["fire"],
    "height": 11,
    "weight": 199,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/38.png"
  },
  {
    "id": 39,
    "name": "Jigglypuff",
    "types": ["normal", "fairy"],
    "height": 5,
    "weight": 55,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/39.png"
  },
  {
    "id": 40,
    "name": "Wigglytuff",
    "types": ["normal", "fairy"],
    "height": 10,
    "weight": 120,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/40.png"
  },
  {
    "id": 41,
    "name": "Zubat",
    "types": ["poison", "flying"],
    "height": 8,
    "weight": 75,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/41.png"
  },
  {
    "id": 42,
    "name": "Golbat",
    "types": ["poison", "flying"],
    "height": 16,
    "weight": 550,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/42.png"
  },
  {
    "id": 43,
    "name": "Oddish",
    "types": ["grass", "poison"],
    "height": 5,
    "weight": 54,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/43.png"
  },
  {
    "id": 44,
    "name": "Gloom",
    "types": ["grass", "poison"],
    "height": 8,
    "weight": 86,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/44.png"
  },
  {
    "id": 45,
    "name": "Vileplume",
    "types": ["grass", "poison"],
    "height": 12,
    "weight": 186,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/45.png"
  },
  {
    "id": 46,
    "name": "Paras",
    "types": ["bug", "grass"],
    "height": 3,
    "weight": 54,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/46.png"
  },
  {
    "id": 47,
    "name": "Parasect",
    "types": ["bug", "grass"],
    "height": 10,
    "weight": 295,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/47.png"
  },
  {
    "id": 48,
    "name": "Venonat",
    "types": ["bug", "poison"],
    "height": 10,
    "weight": 300,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/48.png"
  },
  {
    "id": 49,
    "name": "Venomoth",
    "types": ["bug", "poison"],
    "height": 15,
    "weight": 125,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/49.png"
  },
  {
    "id": 50,
    "name": "Diglett",
    "types": ["ground"],
    "height": 2,
    "weight": 8,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/50.png"
  },
  {
    "id": 51,
    "name": "Dugtrio",
    "types": ["ground"],
    "height": 7,
    "weight": 333,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/51.png"
  },
  {
    "id": 52,
    "name": "Meowth",
    "types": ["normal"],
    "height": 4,
    "weight": 42,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/52.png"
  },
  {
    "id": 53,
    "name": "Persian",
    "types": ["normal"],
    "height": 10,
    "weight": 320,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/53.png"
  },
  {
    "id": 54,
    "name": "Psyduck",
    "types": ["water"],
    "height": 8,
    "weight": 196,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/54.png"
  },
  {
    "id": 55,
    "name": "Golduck",
    "types": ["water"],
    "height": 17,
    "weight": 766,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/55.png"
  },
  {
    "id": 56,
    "name": "Mankey",
    "types": ["fighting"],
    "height": 5,
    "weight": 280,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/56.png"
  },
  {
    "id": 57,
    "name": "Primeape",
    "types": ["fighting"],
    "height": 10,
    "weight": 320,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/57.png"
  },
  {
    "id": 58,
    "name": "Growlithe",
    "types": ["fire"],
    "height": 7,
    "weight": 190,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/58.png"
  },
  {
    "id": 59,
    "name": "Arcanine",
    "types": ["fire"],
    "height": 19,
    "weight": 1550,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/59.png"
  },
  {
    "id": 60,
    "name": "Poliwag",
    "types": ["water"],
    "height": 6,
    "weight": 124,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/60.png"
  },
  {
    "id": 61,
    "name": "Poliwhirl",
    "types": ["water"],
    "height": 10,
    "weight": 200,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/61.png"
  },
  {
    "id": 62,
    "name": "Poliwrath",
    "types": ["water", "fighting"],
    "height": 13,
    "weight": 540,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/62.png"
  },
  {
    "id": 63,
    "name": "Abra",
    "types": ["psychic"],
    "height": 9,
    "weight": 195,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/63.png"
  },
  {
    "id": 64,
    "name": "Kadabra",
    "types": ["psychic"],
    "height": 13,
    "weight": 565,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/64.png"
  },
  {
    "id": 65,
    "name": "Alakazam",
    "types": ["psychic"],
    "height": 15,
    "weight": 480,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/65.png"
  },
  {
    "id": 66,
    "name": "Machop",
    "types": ["fighting"],
    "height": 8,
    "weight": 195,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/66.png"
  },
  {
    "id": 67,
    "name": "Machoke",
    "types": ["fighting"],
    "height": 15,
    "weight": 705,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/67.png"
  },
  {
    "id": 68,
    "name": "Machamp",
    "types": ["fighting"],
    "height": 16,
    "weight": 1300,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/68.png"
  },
  {
    "id": 69,
    "name": "Bellsprout",
    "types": ["grass", "poison"],
    "height": 7,
    "weight": 40,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/69.png"
  },
  {
    "id": 70,
    "name": "Weepinbell",
    "types": ["grass", "poison"],
    "height": 10,
    "weight": 64,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/70.png"
  },
  {
    "id": 71,
    "name": "Victreebel",
    "types": ["grass", "poison"],
    "height": 17,
    "weight": 155,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/71.png"
  },
  {
    "id": 72,
    "name": "Tentacool",
    "types": ["water", "poison"],
    "height": 9,
    "weight": 455,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/72.png"
  },
  {
    "id": 73,
    "name": "Tentacruel",
    "types": ["water", "poison"],
    "height": 16,
    "weight": 550,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/73.png"
  },
  {
    "id": 74,
    "name": "Geodude",
    "types": ["rock", "ground"],
    "height": 4,
    "weight": 200,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/74.png"
  },
  {
    "id": 75,
    "name": "Graveler",
    "types": ["rock", "ground"],
    "height": 10,
    "weight": 1050,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/75.png"
  },
  {
    "id": 76,
    "name": "Golem",
    "types": ["rock", "ground"],
    "height": 14,
    "weight": 3000,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/76.png"
  },
  {
    "id": 77,
    "name": "Ponyta",
    "types": ["fire"],
    "height": 10,
    "weight": 300,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/77.png"
  },
  {
    "id": 78,
    "name": "Rapidash",
    "types": ["fire"],
    "height": 17,
    "weight": 950,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/78.png"
  },
  {
    "id": 79,
    "name": "Slowpoke",
    "types": ["water", "psychic"],
    "height": 12,
    "weight": 360,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/79.png"
  },
  {
    "id": 80,
    "name": "Slowbro",
    "types": ["water", "psychic"],
    "height": 16,
    "weight": 785,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/80.png"
  },
  {
    "id": 81,
    "name": "Magnemite",
    "types": ["electric", "steel"],
    "height": 3,
    "weight": 60,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/81.png"
  },
  {
    "id": 82,
    "name": "Magneton",
    "types": ["electric", "steel"],
    "height": 10,
    "weight": 600,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/82.png"
  },
  {
    "id": 83,
    "name": "Farfetch’d",
    "types": ["normal", "flying"],
    "height": 8,
    "weight": 150,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/83.png"
  },
  {
    "id": 84,
    "name": "Doduo",
    "types": ["normal", "flying"],
    "height": 14,
    "weight": 392,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/84.png"
  },
  {
    "id": 85,
    "name": "Dodrio",
    "types": ["normal", "flying"],
    "height": 18,
    "weight": 852,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/85.png"
  },
  {
    "id": 86,
    "name": "Seel",
    "types": ["water"],
    "height": 11,
    "weight": 900,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/86.png"
  },
  {
    "id": 87,
    "name": "Dewgong",
    "types": ["water", "ice"],
    "height": 17,
    "weight": 1200,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/87.png"
  },
  {
    "id": 88,
    "name": "Grimer",
    "types": ["poison"],
    "height": 9,
    "weight": 300,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/88.png"
  },
  {
    "id": 89,
    "name": "Muk",
    "types": ["poison"],
    "height": 12,
    "weight": 300,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/89.png"
  },
  {
    "id": 90,
    "name": "Shellder",
    "types": ["water"],
    "height": 3,
    "weight": 40,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/90.png"
  },
  {
    "id": 91,
    "name": "Cloyster",
    "types": ["water", "ice"],
    "height": 15,
    "weight": 1325,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/91.png"
  },
  {
    "id": 92,
    "name": "Gastly",
    "types": ["ghost", "poison"],
    "height": 13,
    "weight": 1,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/92.png"
  },
  {
    "id": 93,
    "name": "Haunter",
    "types": ["ghost", "poison"],
    "height": 16,
    "weight": 1,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/93.png"
  },
  {
    "id": 94,
    "name": "Gengar",
    "types": ["ghost", "poison"],
    "height": 15,
    "weight": 405,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png"
  },
  {
    "id": 95,
    "name": "Onix",
    "types": ["rock", "ground"],
    "height": 88,
    "weight": 2100,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/95.png"
  },
  {
    "id": 96,
    "name": "Drowzee",
    "types": ["psychic"],
    "height": 10,
    "weight": 324,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/96.png"
  },
  {
    "id": 97,
    "name": "Hypno",
    "types": ["psychic"],
    "height": 16,
    "weight": 756,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/97.png"
  },
  {
    "id": 98,
    "name": "Krabby",
    "types": ["water"],
    "height": 4,
    "weight": 65,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/98.png"
  },
  {
    "id": 99,
    "name": "Kingler",
    "types": ["water"],
    "height": 13,
    "weight": 600,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/99.png"
  },
  {
    "id": 100,
    "name": "Voltorb",
    "types": ["electric"],
    "height": 5,
    "weight": 104,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/100.png"
  },
  {
    "id": 101,
    "name": "Electrode",
    "types": ["electric"],
    "height": 12,
    "weight": 666,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/101.png"
  },
  {
    "id": 102,
    "name": "Exeggcute",
    "types": ["grass", "psychic"],
    "height": 4,
    "weight": 25,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/102.png"
  },
  {
    "id": 103,
    "name": "Exeggutor",
    "types": ["grass", "psychic"],
    "height": 20,
    "weight": 1200,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/103.png"
  },
  {
    "id": 104,
    "name": "Cubone",
    "types": ["ground"],
    "height": 4,
    "weight": 65,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/104.png"
  },
  {
    "id": 105,
    "name": "Marowak",
    "types": ["ground"],
    "height": 10,
    "weight": 450,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/105.png"
  },
  {
    "id": 106,
    "name": "Hitmonlee",
    "types": ["fighting"],
    "height": 15,
    "weight": 498,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/106.png"
  },
  {
    "id": 107,
    "name": "Hitmonchan",
    "types": ["fighting"],
    "height": 14,
    "weight": 502,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/107.png"
  },
  {
    "id": 108,
    "name": "Lickitung",
    "types": ["normal"],
    "height": 12,
    "weight": 655,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/108.png"
  },
  {
    "id": 109,
    "name": "Koffing",
    "types": ["poison"],
    "height": 6,
    "weight": 10,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/109.png"
  },
  {
    "id": 110,
    "name": "Weezing",
    "types": ["poison"],
    "height": 12,
    "weight": 95,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/110.png"
  },
  {
    "id": 111,
    "name": "Rhyhorn",
    "types": ["ground", "rock"],
    "height": 10,
    "weight": 1150,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/111.png"
  },
  {
    "id": 112,
    "name": "Rhydon",
    "types": ["ground", "rock"],
    "height": 19,
    "weight": 1200,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/112.png"
  },
  {
    "id": 113,
    "name": "Chansey",
    "types": ["normal"],
    "height": 11,
    "weight": 346,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/113.png"
  },
  {
    "id": 114,
    "name": "Tangela",
    "types": ["grass"],
    "height": 10,
    "weight": 350,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/114.png"
  },
  {
    "id": 115,
    "name": "Kangaskhan",
    "types": ["normal"],
    "height": 22,
    "weight": 800,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/115.png"
  },
  {
    "id": 116,
    "name": "Horsea",
    "types": ["water"],
    "height": 4,
    "weight": 80,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/116.png"
  },
  {
    "id": 117,
    "name": "Seadra",
    "types": ["water"],
    "height": 12,
    "weight": 250,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/117.png"
  },
  {
    "id": 118,
    "name": "Goldeen",
    "types": ["water"],
    "height": 6,
    "weight": 150,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/118.png"
  },
  {
    "id": 119,
    "name": "Seaking",
    "types": ["water"],
    "height": 13,
    "weight": 390,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/119.png"
  },
  {
    "id": 120,
    "name": "Staryu",
    "types": ["water"],
    "height": 8,
    "weight": 345,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/120.png"
  },
  {
    "id": 121,
    "name": "Starmie",
    "types": ["water", "psychic"],
    "height": 11,
    "weight": 800,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/121.png"
  },
  {
    "id": 122,
    "name": "Mr. Mime",
    "types": ["psychic", "fairy"],
    "height": 13,
    "weight": 545,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/122.png"
  },
  {
    "id": 123,
    "name": "Scyther",
    "types": ["bug", "flying"],
    "height": 15,
    "weight": 560,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/123.png"
  },
  {
    "id": 124,
    "name": "Jynx",
    "types": ["ice", "psychic"],
    "height": 14,
    "weight": 406,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/124.png"
  },
  {
    "id": 125,
    "name": "Electabuzz",
    "types": ["electric"],
    "height": 11,
    "weight": 300,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/125.png"
  },
  {
    "id": 126,
    "name": "Magmar",
    "types": ["fire"],
    "height": 13,
    "weight": 445,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/126.png"
  },
  {
    "id": 127,
    "name": "Pinsir",
    "types": ["bug"],
    "height": 15,
    "weight": 550,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/127.png"
  },
  {
    "id": 128,
    "name": "Tauros",
    "types": ["normal"],
    "height": 14,
    "weight": 884,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/128.png"
  },
  {
    "id": 129,
    "name": "Magikarp",
    "types": ["water"],
    "height": 9,
    "weight": 100,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/129.png"
  },
  {
    "id": 130,
    "name": "Gyarados",
    "types": ["water", "flying"],
    "height": 65,
    "weight": 2350,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/130.png"
  },
  {
    "id": 131,
    "name": "Lapras",
    "types": ["water", "ice"],
    "height": 25,
    "weight": 2200,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/131.png"
  },
  {
    "id": 132,
    "name": "Ditto",
    "types": ["normal"],
    "height": 3,
    "weight": 40,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
  },
  {
    "id": 133,
    "name": "Eevee",
    "types": ["normal"],
    "height": 3,
    "weight": 65,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png"
  },
  {
    "id": 134,
    "name": "Vaporeon",
    "types": ["water"],
    "height": 10,
    "weight": 290,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/134.png"
  },
  {
    "id": 135,
    "name": "Jolteon",
    "types": ["electric"],
    "height": 8,
    "weight": 245,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/135.png"
  },
  {
    "id": 136,
    "name": "Flareon",
    "types": ["fire"],
    "height": 9,
    "weight": 250,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/136.png"
  },
  {
    "id": 137,
    "name": "Porygon",
    "types": ["normal"],
    "height": 8,
    "weight": 365,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/137.png"
  },
  {
    "id": 138,
    "name": "Omanyte",
    "types": ["rock", "water"],
    "height": 4,
    "weight": 75,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/138.png"
  },
  {
    "id": 139,
    "name": "Omastar",
    "types": ["rock", "water"],
    "height": 10,
    "weight": 350,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/139.png"
  },
  {
    "id": 140,
    "name": "Kabuto",
    "types": ["rock", "water"],
    "height": 5,
    "weight": 115,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/140.png"
  },
  {
    "id": 141,
    "name": "Kabutops",
    "types": ["rock", "water"],
    "height": 13,
    "weight": 405,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/141.png"
  },
  {
    "id": 142,
    "name": "Aerodactyl",
    "types": ["rock", "flying"],
    "height": 18,
    "weight": 590,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/142.png"
  },
  {
    "id": 143,
    "name": "Snorlax",
    "types": ["normal"],
    "height": 21,
    "weight": 4600,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/143.png"
  },
  {
    "id": 144,
    "name": "Articuno",
    "types": ["ice", "flying"],
    "height": 17,
    "weight": 554,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/144.png"
  },
  {
    "id": 145,
    "name": "Zapdos",
    "types": ["electric", "flying"],
    "height": 16,
    "weight": 526,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/145.png"
  },
  {
    "id": 146,
    "name": "Moltres",
    "types": ["fire", "flying"],
    "height": 20,
    "weight": 600,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/146.png"
  },
  {
    "id": 147,
    "name": "Dratini",
    "types": ["dragon"],
    "height": 18,
    "weight": 33,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/147.png"
  },
  {
    "id": 148,
    "name": "Dragonair",
    "types": ["dragon"],
    "height": 40,
    "weight": 165,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/148.png"
  },
  {
    "id": 149,
    "name": "Dragonite",
    "types": ["dragon", "flying"],
    "height": 22,
    "weight": 2100,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/149.png"
  },
  {
    "id": 150,
    "name": "Mewtwo",
    "types": ["psychic"],
    "height": 20,
    "weight": 1220,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png"
  },
  {
    "id": 151,
    "name": "Mew",
    "types": ["psychic"],
    "height": 4,
    "weight": 40,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/151.png"
  }
]