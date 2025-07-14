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
    id: 1,
    name: 'bulbasaur',
    types: ['grass', 'poison'],
    height: 7,
    weight: 69,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'
  },
  {
    id: 4,
    name: 'charmander',
    types: ['fire'],
    height: 6,
    weight: 85,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png'
  },
  {
    id: 7,
    name: 'squirtle',
    types: ['water'],
    height: 5,
    weight: 90,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png'
  },
  {
    id: 25,
    name: 'pikachu',
    types: ['electric'],
    height: 4,
    weight: 60,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png'
  },
  {
    id: 39,
    name: 'jigglypuff',
    types: ['normal', 'fairy'],
    height: 5,
    weight: 55,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/39.png'
  }
];