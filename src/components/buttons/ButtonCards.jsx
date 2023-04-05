import "./ButtonCards.sass"
import { Fragment } from "react"

function ButtonCards(props) {
    return(
        <Fragment>
            <a href={props.link} target={"_blank"}>
                <button className="buttonRepos">{props.title}</button>
            </a>
        </Fragment>
    )
}

export default ButtonCards