import "../../../style/components/body/summary/summary.sass"


function Summary(props){
    return(
        <div className="summary">
            <h1>{props.title}</h1>
            <p>{props.text}</p>
        </div>
    )
}

export default Summary