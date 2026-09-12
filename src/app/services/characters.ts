/**
 * El servicio: el único que sabe de dónde salen los datos.
 * Los componentes no conocen la URL; le piden la lista a esta clase.
 */
import { Service, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CharacterPage } from '../domain/character';

@Service()
export class Characters {
  private readonly http = inject(HttpClient);
  private readonly url = 'https://rickandmortyapi.com/api/character';

  /** Pide los personajes cuyo nombre contenga `name`. Vacío trae a todos. */
  list(name: string) {
    return this.http.get<CharacterPage>(this.url, { params: { name } });
  }
}
