import { useState } from "react"

const styles = {
    div: { backgroundColor: '#e5e5e5', height: '60px', width: '250px', margin: '5px', borderRadius: '10px', padding: '10px' },
    div2: {
        height: '100px',
        width: '300px',
        backgroundColor: 'pink',
        margin: '20px',
        borderRadius: '10px',
        padding: '10px'
    }
}

function HighOrderComponent() {
    return (
        <div>
            HOC normal <hr />
            <CountComp />
            <HOCRed com={<CountComp />} />
            <HOCGreen com={CountComp} />
        </div>
    )
}
function HOCRed(props) {
    return <div style={styles.div2}> Prop as Element <br />{props.com}</div>
}
function HOCGreen(props) {
    return <div style={styles.div2}> Prop as value <br /><props.com /></div>
}
function CountComp() {
    const [count, setCount] = useState(0)
    return (
        <div style={styles.div}>
            <p>Count : {count}</p>
            <p><button onClick={() => setCount(count + 1)}>Increse by one</button></p>
        </div>
    )
}

export default HighOrderComponent;