import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp";
import heroes from "../../data/heroes";

describe('Pruebas en 08-imp-exp.js', () => {
  
    test('Debe de retornar un héroe por id', () => {
      const id = 1;
      const heroe = getHeroeById(id);

      const heroeData = heroes.find(h => h.id === id);
      
        expect(heroe).toEqual(heroeData);
    });
    
    test('Debe de retornar "undefined" ssi el Héroe no existe', () => {
      const id = 10;
      const heroe = getHeroeById(id);

      expect(heroe).toBe(undefined);
    });
    

    test('Debe de retornar un arreglo con los héroes de DC', () => {
      const owner = 'DC',
        dcHeroes = getHeroesByOwner(owner),
        dcHeroesFiltered = heroes.filter(h => h.owner === owner);

        expect(dcHeroes).toEqual(dcHeroesFiltered);
    });
    
    test('Debe de retornar un arreglo con los héroes de Marvel', () => {
        const owner = 'Marvel',
            marvelHeroes = getHeroesByOwner(owner);

        expect(marvelHeroes.length).toBe(2);
    });
    
});
