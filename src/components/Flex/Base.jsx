import "./Base.scss"

function Base(props) {
    return(
        <div className="Base">
            {props.children}
        </div>
    )
}

export default Base