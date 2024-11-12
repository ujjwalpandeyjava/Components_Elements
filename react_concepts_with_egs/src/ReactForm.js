import { Fragment, useState } from 'react'

export default function ReactForm() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPass, setConfirmPass] = useState("")
    const [like, setLike] = useState(null)
    const [tnc, setTNC] = useState(false)

    function resetAll() {
        setName("")
        setEmail("")
        setPassword("")
        setConfirmPass("")
        setLike("")
        setTNC(false)
    }
    return (
        //Instead of "div" tag we can use "Fragment" import or empty tag "<>---</>" and minimize the DOM height.
        //Mostly used when using the component where we cannot use div tag, example inside the tr/td/table tag.
        <Fragment>
            <h1>This is React form example</h1>
            <form onSubmit={(event) => { event.preventDefault(); console.log(name, email, password, confirmPass, like, tnc); }}>
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
                <input type='checkbox' className={tnc} onChange={(event) => { setTNC(event.target.checked) }} /> Term and Conditions <br />
                <button type='submit'>Submit</button> <button type='reset' onClick={resetAll}>Reset</button>
            </form>
        </Fragment>
    );
}