import "./Base.scss"

function Base(props) {
    return(
        <div className="Base" background='#121212'>
            {props.children}
        </div>
    )
}

export default Base