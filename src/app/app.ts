import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header-component/header-component';
import { PokemonListComponent } from './pokemon-list-component/pokemon-list-component';
import { Pokemondetailcomponent } from "./pokemondetailcomponent/pokemondetailcomponent";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, PokemonListComponent, Pokemondetailcomponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'Pokedex';
}
