import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CounterApp = ({ value = 3000 }) => {

    const [ counter, setCounter ] = useState(value); // []

    // handleAdd
    const handleAdd = (e) => {
        setCounter(counter + 1);
    }

    // handleSub
    const handleSubtract = (e) => {
        // setCounter(counter + 1);
        setCounter( (c) => c - 1 )
    }

    return (<>
        <h1>Wellcome to first CounterApp</h1>
        <h2>{ counter }</h2>

        <button onClick={ handleAdd }>+1</button>
        <button onClick={ () => setCounter( value ) }>Reset</button>
        <button onClick={ handleSubtract }>-1</button>
    </>);
}

CounterApp.prototypes = {
    value: PropTypes.number
}

export default CounterApp;