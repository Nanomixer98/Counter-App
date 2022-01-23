describe('Pruebas en el archivo demo.test.js', () => {
  test('Debe de ser iguales los string',() => {
      
      // 1. Inicialización
      const message = 'Hola mundo';
  
      // 2. Estimulo
      const message2 = `Hola mundo`
  
      // 3. Onservar el comportamiento
      expect(message).toBe(message2)
  
  });
});

const can = {
    name: 'pamplemousse',
    ounces: 12,
  };
  
  describe('the can', () => {
    test('has 12 ounces', () => {
      expect(can.ounces).toBe(12);
    });
  
    test('has a sophisticated name', () => {
      expect(can.name).toBe('pamplemousse');
    });
  });