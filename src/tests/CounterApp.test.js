import CounterApp from "../CounterApp";
import "@testing-library/jest-dom";
import React from 'react';
import { shallow } from 'enzyme';

let wrapper = shallow(<CounterApp/>);
beforeEach(() => {
    wrapper = shallow(<CounterApp />);
})

describe('Pruebas en el componente CounterApp', () => {

  test('Mostrar correctamente <CounterApp /> con valores por defecto', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('Mostrar correctamente <CounterApp /> con valor de 100', () => {
        const value = 100;
        const wrapper = shallow(<CounterApp value={value}/>);

        const valueRendered = wrapper.find('h2').text().trim();
        expect(parseInt(valueRendered)).toBe(value);
  });

});

describe('Funcionamiento de botones', () => {
  
    test('Debe incrementar en +1', () => {
        // const wrapper = shallow(<CounterApp/>);
        wrapper.find('button').at(0).simulate('click');

        const valueRendered = wrapper.find('h2').text().trim();
        expect(parseInt(valueRendered)).toBe(3001);
    });
  
    test('Debe disminuir -1', () => {
        // const wrapper = shallow(<CounterApp/>);
        wrapper.find('button').at(2).simulate('click');

        const valueRendered = wrapper.find('h2').text().trim();
        expect(parseInt(valueRendered)).toBe(2999);
    });
  
    test('Debe de regresar el valor a defecto "100"', () => {
        const value = 100;
        const wrapper = shallow(<CounterApp value={value}/>);
        // const wrapper = shallow(<CounterApp/>);
        for (let index = 0; index < 8; index++) {
            wrapper.find('button').at(2).simulate('click');
        }
        for (let index = 0; index < 3; index++) {
            wrapper.find('button').at(0).simulate('click');
        }
        wrapper.find('button').at(1).simulate('click');

        const valueRendered = wrapper.find('h2').text().trim();
        expect(parseInt(valueRendered)).toBe(100);
    });

});

