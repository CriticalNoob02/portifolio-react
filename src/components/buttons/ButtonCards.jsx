import "./ButtonCards.sass"
import { Fragment } from "react"

function ButtonCards(props) {
    return(
        <Fragment>
            <button className="buttonRepos">{props.title}</button>
        </Fragment>
    )
}

export default ButtonCards