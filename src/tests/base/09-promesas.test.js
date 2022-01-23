import { getHeroeByIdAsync } from "../../base/09-promesas";
import heroes from "../../data/heroes";

describe('Pruebas con promesas en 09-promesas.js', () => {
    
  test('getHeroeByIdAsync debe de retornar un Héroe async', (done) => {
    
    const id = 1;
    
    getHeroeByIdAsync(id)
        .then(heroe => {
            expect(heroe).toBe(heroes[0]);
            done();
        });
  });

  test('getHeroeByIdAsync debe obtener un errro si el Héroe no exite', (done) => {
    
    const id = 10;
    
    getHeroeByIdAsync(id)
        .then()
        .catch(error => {
            expect(error).toBe('No se pudo encontrar el héroe!!!');
            done();
        });
  });

});
