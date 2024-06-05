import React from 'react'
//import ModuleerCss from './FC.module.css'; //Importing module css file for using external css.

let constArrObj = [
    { empID: 1001, empName: 'Ujjwal', empLastName: 'pandey', empDesignation: 'HR', salary: 45000, totalPunches: 1 },
    { empID: 1002, empName: 'Ujjwal 2', empLastName: 'pandey', empDesignation: 'Engineer', salary: 57000, totalPunches: 1 },
    { empID: 1003, empName: 'Ujjwal 3', empLastName: 'pandey', empDesignation: 'Engineer', salary: 57000, totalPunches: 1 },
    { empID: 1004, empName: 'Ujjwal 4', empLastName: 'pandey', empDesignation: 'Fixer', salary: 20000, totalPunches: 1 },
    { empID: 1005, empName: 'Ujjwal 5', empLastName: 'pandey', empDesignation: 'IT', salary: 22000, totalPunches: 1 },
    { empID: 1006, empName: 'Ujjwal 6', empLastName: 'pandey', empDesignation: 'IOT', salary: 45000, totalPunches: 1 },
    { empID: 1007, empName: 'Ujjwal 7', empLastName: 'pandey', empDesignation: 'MAnager', salary: 30000, totalPunches: 1 }]

const functionalComponent = (props) => {
    console.log('This is react component', props);
    let classes = `funcompo ${props.className}`
    return (
        <div style={{ boxShadow: '0px 2px 5px #ccc', padding: '15px', margin: '15px' }}>
            <div className={classes}>
                <h3>{(props.empNames != null) ? `${props.empNames}` : `Static Data`} </h3>
                <p>key: {props.key} key is not a part of props,don't use here.</p>
                <h2>This is component description</h2>
            </div>
        </div>
    )
}
//Default module
export default functionalComponent;

//multiple module, put export keyword before the let/const/function/var.
// export {functionalComponent, xFunction , yFunction}