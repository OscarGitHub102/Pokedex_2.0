import { Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header-component/header-component';
import { PokemonListComponent } from './pokemon-list-component/pokemon-list-component';
import { pokemondetailcomponent } from './pokemondetailcomponent/pokemondetailcomponent';
import { Pokemon, POKEMONS } from './models/pokemon';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, PokemonListComponent, pokemondetailcomponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {

  protected title = 'Pokedex';
  selectedPokemon: Pokemon | null = null; // El Pokémon que se mostrará en el detalle

  @ViewChild(PokemonListComponent) pokemonListComponent!: PokemonListComponent; // Acceso al componente de lista

  constructor() {
    // Opcional: Mostrar un Pokémon por defecto al inicio
    //this.selectedPokemon = POKEMONS[0];
  }

  onSearchTermChange(searchTerm: string): void {
    // Cuando el HeaderComponent emite un término de búsqueda,
    // llamamos al método applySearchFilter del PokemonListComponent
    this.pokemonListComponent.searchTerm = searchTerm; // Actualiza el @Input en PokemonListComponent
    this.pokemonListComponent.filterPokemons(); // Dispara el filtrado en la lista

    // Opcional: Si se busca un Pokémon por nombre, muestra el primer resultado en el detalle
    /*if (searchTerm) {
        const foundPokemon = this.pokemonListComponent.filteredPokemons.find(p =>
            p.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        this.selectedPokemon = foundPokemon || null;
    } else {
        // Si el buscador se vacía, puedes decidir si quieres limpiar el detalle
        this.selectedPokemon = null;
    }*/
  }

  onPokemonSelected(pokemon: Pokemon): void {
    // Cuando PokemonListComponent emite un Pokémon seleccionado
    this.selectedPokemon = pokemon; // Actualiza el Pokémon para el detalle
  }

}
