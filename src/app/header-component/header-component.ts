import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header-component',
  imports: [],
  templateUrl: './header-component.html',
  styleUrl: './header-component.scss'
})
export class HeaderComponent {

  // Emite el término de búsqueda que escuchará el componente padre
  @Output() searchEvent = new EventEmitter<string>();

  onSearch(event: Event){
    // event.target -> elemento del DOM que disparó el evento
    // as HTMLInputElement -> tratar al target como un input HTML
    const searchTerm = (event.target as HTMLInputElement).value;
    // Emite el texto al padre
    this.searchEvent.emit(searchTerm);
  }

}
