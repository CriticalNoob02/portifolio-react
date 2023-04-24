import "./loader.sass"

function Loader(props) {
    return(
        <div className="baseSpinner" style={{height: props.height ?? '100%'}}>
        <div className="spinner"></div>
        </div>
    )
}

export default Loader