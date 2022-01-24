// import React, { Fragment } from 'react';
import React from 'react';
import PropTypes from 'prop-types';


// Functional Component (FC)
const PrimeraApp = ({ 
        saludo, 
        subtitulo 
    }) => {

    // const saludo = 123;
    // const saludo = 124.5654;
    // const saludo = false;
    // const saludo = [1,2,3,4,5,6];
    // const saludo = {
    //     nombre: "Alexis",
    //     edad: 23    
    // };
    // const saludo = "Hola Mundo desde el const";

    // console.log(props);

    // if(!saludo) {
    //     throw new Error("NO hay SALUDO")
    // }

    return (
        <>
            {/* <h1>{ JSON.stringify(saludo) }</h1> */}
            {/* <pre>{ JSON.stringify(saludo, null, 3) }</pre> */}
            <h1>{ saludo }!!!</h1>
            <p>{ subtitulo }</p>
        </>
    );
}

PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired,
};

PrimeraApp.defaultProps = {
    subtitulo: 'Esto es un subtitulo por defecto'
}

export default PrimeraApp;
