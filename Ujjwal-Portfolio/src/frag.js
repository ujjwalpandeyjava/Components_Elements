import './frag.css';


export default function Frag({ percent }) {
    return (
        <div className="meter orange nostripes">
            <span style={{ width: percent }}></span>
        </div>
    )
}