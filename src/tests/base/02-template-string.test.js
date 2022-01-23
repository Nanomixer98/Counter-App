import '@testing-library/jest-dom';

import { getSaludo } from "../../base/02-template-string";

describe('Pruebas en 02-template-string.js', () => {

	test('getSaludo debe de retornar Hola Alexis', () => {
		const nombre = 'Alexis';

		const saludo = getSaludo(nombre);

		expect(saludo).toBe(`Hola ${nombre}`);
		// console.log(saludo);
	});

	test('getSaludo debe de retornar Hola Naty si no hay argumento', () => {
		// const nombre = 'Alexis';

		const saludo = getSaludo();

		expect(saludo).toBe(`Hola Naty`);
		// console.log(saludo);
	});

});
