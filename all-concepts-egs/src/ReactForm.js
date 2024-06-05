import React, { Fragment, useState } from 'react'

export default function ReactForm() {
    const [name, setName] = useState("")
    var [email, setEmail] = useState("")
    var [password, setPassword] = useState("")
    var [confirmPass, setConfirmPass] = useState("")
    var [like, setLike] = useState(null)
    var [TNC, setTNC] = useState(false)

    function resetAll() {
        setName("")
        setEmail("")
        setPassword("")
        setConfirmPass("")
        setLike("")
        setTNC(false)
    }
    return (
        //Instead of "div" tag we can use "Frangment" import or empty tag "<>---</>" and minimise the DOM height.
        //Mostly used when using the component where we cannot use div tag, example inside the tr/td/table tag.
        <div>
            <>
                <Fragment>
                    <h1>This is React form example</h1>
                    <form onSubmit={(event) => { event.preventDefault(); console.log(name, email, password, confirmPass, like, TNC); }}>
                        Name: <input type='text' placeholder='Enter name' value={name} onChange={(event) => { setName(event.target.value) }} /><br />
                        Email: <input type='email' placeholder='Enter email' value={email} onChange={(event) => { setEmail(event.target.value) }} /><br />
                        Password: <input type='password' placeholder='Enter Password' value={password} onChange={(event) => { setPassword(event.target.value) }} /><br />
                        Confirm Pass: <input type='password' placeholder='Confirm Password' value={confirmPass} onChange={(event) => { setConfirmPass(event.target.value) }} /><br />
                        Select what you like: <select onChange={(event) => { setLike(event.target.value) }} >
                            <option value={null}>Select one</option>
                            <option>Movies</option>
                            <option>Web series</option>
                            <option>Daily soap</option>
                            <option>Animation</option>
                        </select> <br />
                        <input type='checkbox' className={TNC} onChange={(event) => { setTNC(event.target.checked) }} /> Term and Conditions <br />
                        <button type='submit'>Submit</button> <button type='reset' onClick={resetAll}>Reset</button>
                    </form>
                </Fragment>
            </>
        </div>
    );
}