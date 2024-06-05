import React, { Component } from 'react'
import FunctionalComponent from './functionalComponent'
import ModuleerCss from './FC.module.css'; //Importing module css file for using external css.

//Must extend Component class to make it statefull (class-based)
// WAY-1: class App extends React.Component
// WAY-2: class App extends Component after using import {Component}/React, {Component} from 'react'
class App extends Component {
    constructor(props) {
        //if cause error put state out of constructor.
        super(props);
        console.log(props);
        //When using class based components we do not need to use var/let/const keywords.
        //To make the stateful comp work as statefull we have to use changing data in the Componet's method state()
        this.state = {
            showDatass: true,
            constArrObj: [
                { empID: 1001, empName: 'Ujjwal', empLastName: 'pandey', empDesignation: 'HR', salary: 45000, totalPunches: 1 },
                { empID: 1002, empName: 'Ujjwal 2', empLastName: 'pandey', empDesignation: 'Engineer', salary: 57000, totalPunches: 1 },
                { empID: 1003, empName: 'Ujjwal 3', empLastName: 'pandey', empDesignation: 'Engineer', salary: 57000, totalPunches: 1 },
                { empID: 1004, empName: 'Ujjwal 4', empLastName: 'pandey', empDesignation: 'Fixer', salary: 20000, totalPunches: 1 },
                { empID: 1005, empName: 'Ujjwal 5', empLastName: 'pandey', empDesignation: 'IT', salary: 22000, totalPunches: 1 },
                { empID: 1006, empName: 'Ujjwal 6', empLastName: 'pandey', empDesignation: 'IOT', salary: 45000, totalPunches: 1 },
                { empID: 1007, empName: 'Ujjwal 7', empLastName: 'pandey', empDesignation: 'MAnager', salary: 30000, totalPunches: 1 }]
        }
    }
    onclickbtn = () => {
        console.log('btn clicket - ' + this.state.showDatass);
        // let toggleData = this.state.showDatass ? false : true;
        let toggleData = !this.state.showDatass;
        this.setState({ showDatass: toggleData });   //To change date in the state method (must to save), and reRender the component
        //Or we can use better approach
        /* this.setState((prevState, props)=>{
            return{showDatass: !prevState.showDatass}
        }); */
    }

    //We can't use direct a return statement, thus we use this.
    // render(props if have props) {}
    render(props) {
        //Data to show
        const writtenData = [<FunctionalComponent className={[ModuleerCss.cardView, ModuleerCss.set]} />, "This line comes after 1st component rendered"]
        return (
            <div className='CBRoot' style={{ margin: '35px' }}>
                <div>This is classed based example</div>
                <button onClick={this.onclickbtn}>{this.state.showDatass ? "Hide data" : "Show data"}</button><br></br>
                {this.state.showDatass ? writtenData : null}
                {/* {this.state.showDatass ? writtenData : null} */}
                <h3> This line is a: {this.props.propExample}</h3>
                {console.log('This is the html tag which was passing the props to component-->', this.props.children)}
                ff{"dafd" + this.props.children}
            </div>
        );
    }
}

export default App;