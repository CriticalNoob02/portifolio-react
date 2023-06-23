import "./loader.sass"
import { useContext } from "react"
import { ThemeContext } from '../../context/ThemeParent';

function Loader(props) {
    
    const { globalTheme } = useContext(ThemeContext)
    
    return(
        <div className={`baseSpinner ${globalTheme}`} style={{height: props.height ?? '100%'}}>
        <div className={`spinner ${globalTheme}`}></div>
        </div>
    )
}

export default Loader