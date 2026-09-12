import { Component, inject, signal } from '@angular/core';
import { Character } from './domain/character';
import { Characters } from './services/characters';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
})
export class App {
  private readonly characters = inject(Characters);

  /** La lista empieza vacía y se llena cuando la API responde. */
  readonly list = signal<Character[]>([]);

  constructor() {
    this.search('');
  }

  /** Pide al servicio los personajes con ese nombre. Si no hay ninguno, la API responde 404. */
  search(name: string) {
    this.characters.list(name).subscribe({
      next: (page) => this.list.set(page.results),
      error: () => this.list.set([]),
    });
  }

  /** La API habla en inglés; la pantalla, en español. */
  status(character: Character): string {
    switch (character.status) {
      case 'Alive':
        return 'Vivo';
      case 'Dead':
        return 'Muerto';
      default:
        return 'Desconocido';
    }
  }
}
