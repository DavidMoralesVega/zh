/** Un personaje, tal como lo devuelve la API. Solo los campos que usamos. */
export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  image: string;
}

/** La API no devuelve la lista suelta: la envuelve en una página. */
export interface CharacterPage {
  results: Character[];
}
