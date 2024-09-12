import React, { useState } from "react";


const FunctionalComponentState = (props) => {
    //   console.log(props);
    //first is [] is var anothe is to set the var value fo 1 and after '=' is giving value to the first var.
    const [name, nextName] = useState("Function state Name");   //It uses 'array destructing' to give values in name ande nextName.
    const [count, setCount] = useState(0);
    const [listing, setListing] = useState([
        { text: 'text Of 1' }, { text: 'text Of 2' },
        { text: 'text Of 3' }, { text: 'text Of 4' },
        { text: 'text Of 5' }, { text: 'text Of 6' },
    ]);

    const clickingFun = () => {
        nextName("ujjwal " + Math.floor(Math.random() * 10));
        setCount(count + 1);
    }
    const listShowing = listing.map((item, pos) => {
        return (
            <div key={pos}>This is from list at position {pos} : {item.text} <br />
                <button onClick={() => { alert(listing[pos]); console.log(listing[pos]);/* listing[pos](setListing("New text " + 1)) */ }}>Change text</button></div>)
    });
    return (
        <div>
            <h1>Name : {name}</h1>
            <h2>Name updated: {count} times</h2>
            The length of list is:  {listShowing.length}
            {listShowing}<br />
            <button onClick={() => clickingFun()}>Click me</button>

        </div>

    );
}

export default FunctionalComponentState