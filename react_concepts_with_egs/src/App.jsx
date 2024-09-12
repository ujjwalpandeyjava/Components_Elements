// import moduleCSS from './FC.module.css'; //Importing module css file for using external css.
// import FunctionalComponent from './functionalComponent'
// import ClassBasedComponent from './ClassBasedComponent'
// import FunctionalComponentState from './functionalCompState';
// import FunctionalTakeInputValue from './FunctionalTakeInputValue';
// import { CustomHookEx } from './customHooks/CustomHookEx';
// import BasicRouting from './BasicRouting';
// import LazyComponent from './LazyComponent/Compound/LazyComponent';
// import LazySimple from './LazyComponent/Simple/LazySimple';
// import InteractionLazyComp from './interactionLazyComp/InteractionLazyComp';
// import {UseReducerExample, UseReducerExample2} from './useReducerExamples/UseReducerExample';
// import ReduxExample from "./reduxEg/ReduxExample";
// import ExampleWithMemo from "./useMemoEg/ExampleWithMemo";
// import ExampleWithoutMemo from "./useMemoEg/ExampleWithoutMemo";
// import UseRefEg from "./useRefEg/UseRefEg";
// import UseRefParent from "./useRefEg/UseRefParent";
// import ExampleWithoutCallback from "./useCallBackEg/ExampleWithoutCallback";
// import ExampleWithCallback from "./useCallBackEg/ExampleWithCallback";
// import UseTransitionEgFilteredItems from "./useTransition/UseTransitionEgFilteredItems";
// import DynamicRouting from './Dynamic_Routing/DynamicRouting';
// import NewRoutingWay from './newRoutingWay/index';
// import ReactForm from './ReactForm';
// import HighOrderComponent from './HighOrderComponent';
// import FetchingAPI from './APIs_play/FetchingAPI';
// import FetchDataFromPublic from './APIs_play/FetchDataFromPublic';
// import { BrowserRouter, Link, Route, Routes } from "react-router-dom"
// import WithDeferredValue from "./useDeferredValueEG/WithDeferredValue";
// import WithoutDeferredValue from "./useDeferredValueEG/WithoutDeferredValue";
import ReactReduxEg from "./redux__thunk/ReactReduxEg";
import { Navbar1 } from "./navbars/Navbar1"


function App() {

  // const fName = 'Ujjwal'
  // const lName = 'Pandey'
  // const age = 22
  // const profession = 'CS Student'
  // const fullName = (fName, lName) => `${fName} ${lName}`
  // const inputPlaceholder = "Dynamic placeholder."
  // const dynamicInput = <input type='search' placeholder='Dynamic input' autoComplete />
  // const arr = [1, 2, 3, 4, 5, 6]
  // const detailsObje = {
  //   fName: 'Ujjwal from object',
  //   lName: 'Pandey from object',
  //   age: 23
  // }
  // let cardStyle = {
  //   margin: '35px',
  //   borderRadius: '5px',
  //   padding: '15px',
  //   boxSizing: 'border-box',
  //   boxShadow: '0px 2px 7px #ffdddd'
  // }
  // let constArrObj = [
  //   { empID: 1001, empName: 'Ujjwal', empLastName: 'pandey', empDesignation: 'HR', salary: 45000 },
  //   { empID: 1002, empName: 'Ujjwal 2', empLastName: 'pandey', empDesignation: 'Engineer', salary: 57000 },
  //   { empID: 1003, empName: 'Ujjwal 3', empLastName: 'pandey', empDesignation: 'Engineer', salary: 57000 },
  //   { empID: 1004, empName: 'Ujjwal 4', empLastName: 'pandey', empDesignation: 'Fixer', salary: 20000 },
  //   { empID: 1005, empName: 'Ujjwal 5', empLastName: 'pandey', empDesignation: 'IT', salary: 22000 },
  //   { empID: 1006, empName: 'Ujjwal 6', empLastName: 'pandey', empDesignation: 'IOT', salary: 45000 },
  //   { empID: 1007, empName: 'Ujjwal 7', empLastName: 'pandey', empDesignation: 'MAnager', salary: 30000 }
  // ]


  /*
//map takes two arguments (the data on the loop and the index value).
const elemetnToPass = constArrObj.map((item) => {
  return (
    <div className='cardView' key={item.empID}>
      Employee Id: {item.empID}<br />
      Employee Full Name: {`${item.empID} ${item.empLastName}`}<br />
      Employee Designation: {item.empDesignation}<br />
      Employee net Salary: ₹{item.salary}<br />
    </div>
  )
});*/

  return (
    <>
      {/* //Html to serve in react app.
         //This is like html with js function allowed, and many more.
        //The parent must be one wrapper otherwise it will throw error.
      <div className="App">
        <h2>Some most common way of using JSX</h2>
        <p>Name: Ujjwal</p>
        <p>First Name: {fName}</p>
        <p>Full name: {fName} {lName}</p>
        <p>Full name: {fName + " " + lName}</p>
        <p>Full name: {`${fName} ${lName}`}</p>
        <p>Full name: {fullName(fName, lName)}</p>
        <input placeholder="hello sir" /><br />
        <input placeholder={inputPlaceholder} /><br />
        {dynamicInput}<br />
        {arr[3]}<br />
        <p>Full name: {detailsObje.fName + " " + detailsObje.lName}</p>
        In curely brackets we can use any predefined function which returns something. like map not anyother loop, ternary nor ifelse
        <br /> {arr.map((item) => item * 2 - 1 + ' ')}
      </div>
      */}

      {    //Applying cSS
        /*  <div className="App">
            <div style={
              {
                margin: '25px',
                borderRadius: '5px',
                padding: '15px',
                boxSizing: 'border-box',
                boxShadow: '0px 2px 7px #ccc'
              }
            }>In JSX we use Inline CSS as object with key value pair.</div>
    
            <div style={cardStyle}>In JSX we use Inline CSS pesuso elements, pesudo classes, Media query and many more does not works.</div>
            External CSS
            <div className='cardView'>In JSX we use External CSS noramlly with a import file once.</div>
          </div> */

        //Creating element (not component) dynamcially with array.
        /**First create an object and then another to pass in the ract app but the main parent html tag stays in ract not object, work and pass */
        /*  <div className='App'>
            {elemetnToPass}
          </div>  //Uncomment elemetnToPass above to work this example.
          */

        // Example Functional-component, passing props and key.
        /*  <div className='App'>
            <FunctionalComponent />
            <FunctionalComponent className={'masterJii'} empNames={constArrObj[1].empName} key={constArrObj[1].empID} />
          </div>*/

        // Example Inline, Extenal and Module CSS.
        /*  <div className='App'>
            <p style={{ fontWeight: 'lighter', margin: '25px' }}> Here all four are cardView class but top 2 are moduleer and other are normal, bcz of which the bottom 2 will be effected by some other class in future but top 2 will not.</p>
            <FunctionalComponent className={[moduleCSS.cardView, moduleCSS.set]} />
            <FunctionalComponent className={moduleCSS.cardView} />
            <FunctionalComponent className='cardView' />
            <FunctionalComponent className='cardView' />
          </div>*/

        //  Example Class-based-component.
        /*  <div className='App'>
            <ClassBasedComponent propExample='Class based props example.' />
          </div>*/}
      {/* // <FunctionalComponentState /> */}
      {/* <FunctionalTakeInputValue /> */}
      {/* <ReactForm></ReactForm> */}
      {/* <HighOrderComponent /> */}
      {/* <CustomHookEx /> */}
      {/* <BasicRouting /> */}
      {/* <DynamicRouting /> */}
      {/* <NewRoutingWay /> */}
      {/* <FetchingAPI /> */}
      {/* <FetchDataFromPublic /> */}
      {/* <LazySimple/> */}
      {/* <LazyComponent/> */}
      {/* <InteractionLazyComp/> */}
      {/* <>
        <UseReducerExample />
        <UseReducerExample2 />
      </> */}
      {/* <ReduxExample /> */}
      {/* <UseRefEg/> */}
      {/* <UseRefParent/> */}
      {/* <div>
        <h3>The memory allocation for the "expensiveValue" should be done only when "number" changes and not when "count" changes.</h3>
        <hr/>
        <ExampleWithoutMemo/>
        <ExampleWithMemo/>
      </div> */}
      {/* <>
        <h1>Check Console for inner working.</h1>
        <hr />
        <ExampleWithoutCallback />
        <ExampleWithCallback />
      </> */}
      {/* <UseTransitionEgFilteredItems /> */}
      {/* <>
        <WithoutDeferredValue />
        <WithDeferredValue />
      </> */}
      <Navbar1 />
      <ReactReduxEg />
    </>
  );
}

export default App;
