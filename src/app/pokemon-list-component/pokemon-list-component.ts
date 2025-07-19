import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Pokemon, POKEMONS } from '../models/pokemon';

@Component({
  selector: 'app-pokemon-list-component',
  imports: [],
  templateUrl: './pokemon-list-component.html',
  styleUrl: './pokemon-list-component.scss'
})
export class PokemonListComponent implements OnInit/*, OnChanges*/{
  
  // Lista de todos los pokemon
  pokemons: Pokemon[] = [];
  // Lista de pokemon filtrados
  filteredPokemons: Pokemon[] = [];
  // string con el tipo para filtrar ('all' valor por defecto)
  selectedType: string = 'all';

  // Emite el pokemon seleccionado que escuchará el componente padre
  @Output() pokemonSelected = new EventEmitter<Pokemon>();

  // Recibe el término de búsqueda del componente padre
  @Input() searchTerm: string | null = null;

  @Input() selectedPokemonInList: Pokemon | null = null; 

  ngOnInit(): void {

    // Inicializa la lista de todos los pokemon
    this.pokemons = POKEMONS;

    // Aplica el filtro inicial (mostrar todos)
    this.filterPokemons();
  }

  /*
  ngOnChanges(changes: SimpleChanges): void {
    // Este hook se ejecuta cuando cualquier propiedad @Input() cambia.
    // Verificamos si la propiedad 'searchTerm' ha cambiado.
    if (changes['searchTerm']) {
      // Re-aplica todos los filtros cuando el término de búsqueda cambia
      this.filterPokemons();
    }
  }*/

  // Método para filtrar
  filterPokemons(): void {
    if (this.selectedType === 'all') {

      // Muestra todos si el tipo es 'all'
      this.filteredPokemons = this.pokemons;
    } else {

      // Filtra por tipo
      this.filteredPokemons = this.pokemons.filter(pokemon =>
        pokemon.types.includes(this.selectedType)
      );
    }

    if (this.searchTerm) {
      this.filteredPokemons = this.filteredPokemons.filter(pokemon =>
        pokemon.name.toLowerCase().includes(this.searchTerm!.toLowerCase())
      );
    }

  }

  // Método para recoger y aplicar el filtro
  onTypeChange(event: Event): void {

    // Obtiene el valor seleccionado
    this.selectedType = (event.target as HTMLSelectElement).value;

    // Aplica el nuevo filtro
    this.filterPokemons();
  }

  // Método que emite el Pokémon cuando se hace clic
  selectPokemon(pokemon: Pokemon): void {
    this.pokemonSelected.emit(pokemon);
  }
}
