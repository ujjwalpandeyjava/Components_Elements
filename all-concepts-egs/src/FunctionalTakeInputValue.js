import React, { useState } from 'react';

export default function FunctionalTakeInputValue(props) {
    const [inputValue, setInputValue] = useState(null)
    const [showInputValue, setShowInputValue] = useState(false)

    /*  event:-                 gives so much unable to understand.
        event.target:-          gives the full tag without value.
        event.target.value:-    gives the value of the data inserted  */

    function getInputValue(event) {
        console.log('Value changed to:', event.target.value)
        setInputValue(event.target.value)
        setShowInputValue(false)    //Hides the data shown on button click.
    }

    return (
        <div >
            The value entered is: <span style={{ fontWeight: '700' }}>{inputValue}</span> <br />
            <input type='text' className='classe.g.' onChange={getInputValue}></input>
            <button style={{ marginLeft: '25px' }} onClick={() => setShowInputValue(true)}>Show input data</button> <br />
            <span style={{ fontWeight: '700' }}>{showInputValue ? inputValue : null}</span>
        </div>
    );
}