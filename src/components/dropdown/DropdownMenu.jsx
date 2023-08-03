import './DropdownMenu.scss'
import MenuButton from '../checkbox/MenuButton'
import {  Fragment, useContext } from "react"
import { ThemeContext } from '../../context/ThemeParent'

function DropdownMenu(props){
    
    const { globalTheme } = useContext(ThemeContext)

    return(
        <Fragment>
            <MenuButton/>
            <div className={`menuDropdown ${globalTheme}`}>
                {props.children}
            </div>
        </Fragment>
    )
}

export default DropdownMenu