import "./Base.scss"
import { useContext } from "react"
import { ThemeContext } from "../../context/ThemeParent"

function Base(props) {

    const { globalTheme } = useContext(ThemeContext)
    
    return(
        <div className={`Base ${globalTheme}`}>
            {props.children}
        </div>
    )
}

export default Base