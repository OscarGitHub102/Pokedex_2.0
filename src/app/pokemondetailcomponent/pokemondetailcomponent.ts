import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Pokemon } from '../models/pokemon';
import { CommonModule } from '@angular/common';
import { PokemonMegaevolution, POKEMONS_MEGAEVOLUTIONS } from '../models/pokemonMegaevolution';
import { PokemonGigamax, POKEMONS_GIGAMAX } from '../models/pokemonGigamax';

@Component({
  selector: 'app-pokemondetailcomponent',
  imports: [CommonModule],
  templateUrl: './pokemondetailcomponent.html',
  styleUrl: './pokemondetailcomponent.scss'
})

export class pokemondetailcomponent implements OnChanges {

  // Mapa de colores para los tipos de Pokémon
  typeColors: { [key: string]: string } = {
    normal: '#adad96ff',
    fuego: '#df955cff',
    agua: '#8daceeff',
    eléctrico: '#e9cc5aff',
    planta: '#BDFF9C',
    hielo: '#96D9D6',
    lucha: '#d35652ff',
    veneno: '#a84ea7ff',
    tierra: '#dabd76ff',
    volador: '#A98FF3',
    psíquico: '#fa6491ff',
    bicho: '#b1c03cff',
    roca: '#bba952ff',
    fantasma: '#836ca1ff',
    dragón: '#7f4efaff',
    acero: '#c6c6ccff',
    hada: '#da95b7ff',
  };

  @Input() pokemon: Pokemon | null = null;

  //currentID: number | null = null;
  currentName: string = '';
  currentTypes: string[] = [];
  currentHeight: number | null = null;
  currentWeight: number | null = null;
  currentImage: string = '';

  backgroundColor: string = '#f5f5f5';

  // Megaevolutions
  pokemonsMegaevolutions: PokemonMegaevolution[] = [];
  pokemonMegaevolution: PokemonMegaevolution | null = null;
  pokemonMegaevolution2: PokemonMegaevolution | null = null;
  hasMegaevolution: boolean = false;
  isMegaActive: boolean = false;
  isMegaActive2: boolean = false;

  // Gigamax
  pokemonsGigamax: PokemonGigamax[] = [];
  pokemonGigamax: PokemonGigamax | null = null;
  hasGigamax: boolean = false;
  isGigamaxActive: boolean = false;
  currentHeightGigamax: string = '';
  currentMovement: string = '';

  ngOnInit(): void {
    this.pokemonsMegaevolutions = POKEMONS_MEGAEVOLUTIONS;
    this.pokemonsGigamax = POKEMONS_GIGAMAX;
  }

  ngOnChanges(changes: SimpleChanges): void {

    if (changes['pokemon'] && changes['pokemon'].currentValue) {

      //this.currentID = changes['pokemon'].currentValue.id;
      this.currentName = changes['pokemon'].currentValue.name;
      this.currentTypes = changes['pokemon'].currentValue.types;
      this.currentHeight = changes['pokemon'].currentValue.height;
      this.currentWeight = changes['pokemon'].currentValue.weight;
      this.currentImage = changes['pokemon'].currentValue.image;

      // Megaevolutions

      const matchingMegas = this.pokemonsMegaevolutions.filter(mega => mega.name.startsWith('Mega-' + changes['pokemon'].currentValue.name + ' ') ||  mega.name.substring(5) == changes['pokemon'].currentValue.name) || null;

      this.pokemonMegaevolution = matchingMegas[0] || null;
      this.pokemonMegaevolution2 = matchingMegas.length > 1 ? matchingMegas[1] : null;
      
      this.hasMegaevolution = this.pokemonMegaevolution !== null;
      this.isMegaActive = false;
      this.isMegaActive2 = false;

      // Gigamax
      this.pokemonGigamax = this.pokemonsGigamax.filter(gigamax => gigamax.name.includes(changes['pokemon'].currentValue.name))[0] || null;
      this.hasGigamax = this.pokemonGigamax !== null;
      this.isGigamaxActive = false;

      // Background color
      this.updateBackgroundColor();
      console.log('Pokémon recibido en detalle:', changes['pokemon'].currentValue);

    } else if (changes['pokemon'] && !changes['pokemon'].currentValue) {

      //this.currentID = null;
      this.currentName = '';
      this.currentTypes = [];
      this.currentHeight = null;
      this.currentWeight = null;
      this.currentImage = '';

      // Megaevolutions
      this.pokemonMegaevolution = null;
      this.pokemonMegaevolution2 = null;
      this.hasMegaevolution = false;

      // Gigamax
      this.pokemonGigamax = null;
      this.hasGigamax = false;

      // Background color
      this.backgroundColor = '#f5f5f5';

    }
  }

  updateBackgroundColor(type?: string): void {

    const primaryType = type || (this.pokemon && this.pokemon.types && this.pokemon.types.length > 0 ? this.pokemon.types[0].toLowerCase() : null);
    const primaryTypeMega1 = type || (this.pokemonMegaevolution && this.pokemonMegaevolution.types && this.pokemonMegaevolution.types.length > 0 ? this.pokemonMegaevolution.types[0].toLowerCase() : null);
    const primaryTypeMega2 = type || (this.pokemonMegaevolution2 && this.pokemonMegaevolution2.types && this.pokemonMegaevolution2.types.length > 0 ? this.pokemonMegaevolution2.types[0].toLowerCase() : null);
    const primaryTypeGigamax = type || (this.pokemonGigamax && this.pokemonGigamax.types && this.pokemonGigamax.types.length > 0 ? this.pokemonGigamax.types[0].toLowerCase() : null);

    if (!this.isMegaActive){

      if (primaryType) {
        this.backgroundColor = this.typeColors[primaryType] || '#f5f5f5';
      } else {
        this.backgroundColor = '#f5f5f5';
      }

    }else if (this.isMegaActive){

      if (primaryTypeMega1) {
        this.backgroundColor = this.typeColors[primaryTypeMega1] || '#f5f5f5';
      } else {
        this.backgroundColor = '#f5f5f5';
      }

    }else if (!this.isMegaActive2){

      if (primaryType) {
        this.backgroundColor = this.typeColors[primaryType] || '#f5f5f5';
      } else {
        this.backgroundColor = '#f5f5f5';
      }

    }else if (this.isMegaActive2){

      if (primaryTypeMega2) {
        this.backgroundColor = this.typeColors[primaryTypeMega2] || '#f5f5f5';
      } else {
        this.backgroundColor = '#f5f5f5';
      }

    }else if (this.isGigamaxActive){

      if (primaryTypeGigamax) {
        this.backgroundColor = this.typeColors[primaryTypeGigamax] || '#f5f5f5';
      } else {
        this.backgroundColor = '#f5f5f5';
      }

    }else if (this.isMegaActive2){

      if (primaryTypeGigamax) {
        this.backgroundColor = this.typeColors[primaryTypeGigamax] || '#f5f5f5';
      } else {
        this.backgroundColor = '#f5f5f5';
      }

    }

  }

  toggleMega(): void {

    if (this.pokemon && this.pokemonMegaevolution) {

      this.isMegaActive = !this.isMegaActive;
      this.isMegaActive2 = false;
      this.isGigamaxActive = false;

      if (this.isMegaActive) {
        
        //this.currentID = this.pokemonMegaevolution.id;
        this.currentName = this.pokemonMegaevolution.name;
        this.currentTypes = this.pokemonMegaevolution.types;
        this.currentHeight = this.pokemonMegaevolution.height;
        this.currentWeight = this.pokemonMegaevolution.weight;
        this.currentImage = this.pokemonMegaevolution.image;

        this.updateBackgroundColor(this.pokemonMegaevolution.types[0]);

      } else {
        
        //this.currentID = this.pokemon.id;
        this.currentName = this.pokemon.name;
        this.currentTypes = this.pokemon.types;
        this.currentHeight = this.pokemon.height;
        this.currentWeight = this.pokemon.weight;
        this.currentImage = this.pokemon.image;
        
        this.updateBackgroundColor(this.pokemon.types[0]);

      }
    }
  }

  toggleMega2(): void {

    if (this.pokemon && this.pokemonMegaevolution2) {

      this.isMegaActive2 = !this.isMegaActive2;
      this.isMegaActive = false;
      this.isGigamaxActive = false;

      if (this.isMegaActive2) {
        
        //this.currentID = this.pokemonMegaevolution.id;
        this.currentName = this.pokemonMegaevolution2.name;
        this.currentTypes = this.pokemonMegaevolution2.types;
        this.currentHeight = this.pokemonMegaevolution2.height;
        this.currentWeight = this.pokemonMegaevolution2.weight;
        this.currentImage = this.pokemonMegaevolution2.image;

        this.updateBackgroundColor(this.pokemonMegaevolution2.types[0]);

      } else {
        
        //this.currentID = this.pokemon.id;
        this.currentName = this.pokemon.name;
        this.currentTypes = this.pokemon.types;
        this.currentHeight = this.pokemon.height;
        this.currentWeight = this.pokemon.weight;
        this.currentImage = this.pokemon.image;
        
        this.updateBackgroundColor(this.pokemon.types[0]);

      }
    }
  }

  toggleGigamax(): void {

    if (this.pokemon && this.pokemonGigamax) {

      this.isGigamaxActive = !this.isGigamaxActive;
      this.isMegaActive = false;
      this.isMegaActive2 = false;

      if (this.isGigamaxActive) {
        
        //this.currentID = this.pokemonMegaevolution.id;
        this.currentName = this.pokemonGigamax.name;
        this.currentTypes = this.pokemonGigamax.types;
        this.currentHeightGigamax = this.pokemonGigamax.height;
        this.currentMovement = this.pokemonGigamax.movement;
        this.currentImage = this.pokemonGigamax.image;

        this.updateBackgroundColor(this.pokemonGigamax.types[0]);

      } else {
        
        //this.currentID = this.pokemon.id;
        this.currentName = this.pokemon.name;
        this.currentTypes = this.pokemon.types;
        this.currentHeight = this.pokemon.height;
        this.currentWeight = this.pokemon.weight;
        this.currentImage = this.pokemon.image;
        
        this.updateBackgroundColor(this.pokemon.types[0]);

      }
    }
  }

  getPokemonTypes(types: string[]): string {
    return types.map(type => type.charAt(0).toUpperCase() + type.slice(1)).join(' / ');
  }
}