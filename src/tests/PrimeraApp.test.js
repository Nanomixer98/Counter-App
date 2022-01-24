import "@testing-library/jest-dom";
import PrimeraApp from "../PrimeraApp";
import React from 'react';
import { shallow } from 'enzyme';


describe('Pruebas en <PrimeraApp/>', () => {
    
    // ! Esta prueba fue descartada porque utiliza jest puro, en su lugar usaremos Enzime
    // test('Debe de mostrar el mensaje "Hola! Soy Nanomixer 😎"', () => {
      
    //     const saludo = "Hola! Soy Nanomixer 😎";
    //     const { getByText } = render(<PrimeraApp saludo={saludo}/>);

    //     expect(getByText(saludo)).toBeInTheDocument();
    // });
    
    // * Esta prueba es realizada con Enzime
    test('Debe de mostrar <PrimeraApp /> correctamente', () => {
        const saludo = "Hola! Soy Nanomixer 😎";
        const wrapper = shallow(<PrimeraApp saludo={ saludo }/>);

        expect(wrapper).toMatchSnapshot();
    });
    
    test('Debe de mostrar el subtitulo enviado por props', () => {
        const saludo = "Hola! Soy Nanomixer 😎";
        const subTitulo = "Soy un subtitulo enviado";
        const wrapper = shallow(
            <PrimeraApp 
                saludo={ saludo }
                subtitulo={ subTitulo }
            />
        );
        const textoParrafo = wrapper.find('p').text();
        // console.log(textoParrafo);

        expect(textoParrafo).toBe(subTitulo);
    });
    

});
