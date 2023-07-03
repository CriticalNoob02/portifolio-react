import './DropdownMenu.scss'
import { useContext } from "react"
import { ThemeContext } from '../../context/ThemeParent'

function DropdownMenu(props){
    
    const { globalTheme } = useContext(ThemeContext)

    return(
        <div className={`menuDropdown ${globalTheme}`}>
            {props.itens}
        </div>
    )
}

export default DropdownMenu