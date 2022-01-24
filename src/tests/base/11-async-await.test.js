import { getDummyData } from "../../base/11-async-await";

describe('Pruebas con async/await y fectch en 11-async-await.js', () => {
  test('Debe de retornar un objeto el url', async () => {
    
    const {data, status} = await getDummyData();
    expect(typeof data.title).toBe('string')
    expect(status).toBe(200);
  });
  
});
