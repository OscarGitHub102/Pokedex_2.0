import { Component, inject, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Pokemon } from '../models/pokemon';

@Component({
  selector: 'app-pokemondetailcomponent',
  imports: [],
  templateUrl: './pokemondetailcomponent.html',
  styleUrl: './pokemondetailcomponent.scss'
})
export class pokemondetailcomponent implements OnChanges{

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

  // Propiedad para el color de fondo dinámico
  backgroundColor: string = '#f5f5f5'; // Color por defecto

  // Recibe el pokemon a mostrar
  @Input() pokemon: Pokemon | null = null;

  ngOnChanges(changes: SimpleChanges): void {

    // Esto es útil para depurar o realizar acciones cuando el input 'pokemon' cambia
    if (changes['pokemon'] && changes['pokemon'].currentValue) {

      // Cuando el Pokémon cambia, actualiza el color de fondo
      this.updateBackgroundColor();
      console.log('Pokémon recibido en detalle:', changes['pokemon'].currentValue);
      
    }else if (changes['pokemon'] && !changes['pokemon'].currentValue) {
      // Si no hay Pokémon (es null), vuelve al color por defecto
      this.backgroundColor = '#f5f5f5';
    }
  }

  updateBackgroundColor(): void {
    if (this.pokemon && this.pokemon.types && this.pokemon.types.length > 0) {
      
      // Usamos el primer tipo para determinar el color
      const mainType = this.pokemon.types[0].toLowerCase();
      this.backgroundColor = this.typeColors[mainType] || '#f5f5f5'; // Si el tipo no está en el mapa, usa el color por defecto
    } else {
      this.backgroundColor = '#f5f5f5'; // Si no hay tipos, usa el color por defecto
    }
  }

  getPokemonTypes(types: string[]): string {
    return types.map(type => type.charAt(0).toUpperCase() + type.slice(1)).join(' / ');
  }

}
