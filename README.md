# first-api

El proyecto más chico posible que **consume una API** desde Angular 22.
Pide los personajes de Rick y Morty a `https://rickandmortyapi.com/api/character`
y los muestra en tarjetas.

```bash
npm install
npm start        # http://localhost:4200
npm test         # una prueba, pasa
```

## Los archivos, en el orden en que se dictan

1. `src/app/app.config.ts` — se enciende `provideHttpClient()`. Sin esto no hay HTTP.
2. `src/app/domain/character.ts` — la forma del dato: solo los campos que usamos.
3. `src/app/services/characters.ts` — el servicio: el único que conoce la URL.
4. `src/app/app.ts` — el componente pide la lista al servicio y la guarda en una señal. El buscador llama al mismo método con el nombre escrito.
5. `src/app/app.html` — `@for` dibuja una tarjeta por personaje.

Estilos: Tailwind, solo para la disposición. No hay ningún `.css` por componente.
