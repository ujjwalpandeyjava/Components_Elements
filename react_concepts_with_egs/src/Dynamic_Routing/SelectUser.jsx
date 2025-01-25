function SelectUser(props) {
    return (
        <div className="linkView">
            {props.name.substr(0, 1).concat(". ")}{props?.lName?.substr(0, 1).concat(". ")}{props?.email?.substr(0, 1).concat(". ")}
        </div>
    )
}

export default SelectUser