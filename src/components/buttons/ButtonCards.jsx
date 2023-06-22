import "./ButtonCards.sass"
import { Fragment, useContext } from "react"
import { ThemeContext } from '../../context/ThemeParent';

function ButtonCards(props) {
    
    const { globalTheme } = useContext(ThemeContext)
    
    return(
        <Fragment>
            <a href={props.link} target={"_blank"}>
                <button className={`buttonRepos ${globalTheme}`}>{props.title}</button>
            </a>
        </Fragment>
    )
}

export default ButtonCards