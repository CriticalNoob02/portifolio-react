import './header.sass'
import { useContext } from "react"
import ButtonTheme from '../../components/buttons/ButtonTheme'
import DropdownMenu from '../../components/dropdown/DropdownMenu'
import { DARK_THEME, LIGHT_THEME, ThemeContext } from '../../context/ThemeParent'

function Header(props) {

    const { globalTheme } = useContext(ThemeContext)

    return (
        <div className={`headerBox ${globalTheme}`}>
            <div className={`avatar ${globalTheme}`}>
                <div className='color'></div>
                <img src={props.foto} className={`img ${globalTheme}`} alt='Foto-Perfil' />
            </div>
            <div className={`title ${globalTheme}`}>
                <h1>{props.nome}</h1>
            </div>
            <ButtonTheme changeTheme={LIGHT_THEME}>Light</ButtonTheme>
            <ButtonTheme changeTheme={DARK_THEME}>Dark</ButtonTheme>
            <DropdownMenu/>
        </div>
    )
}
export default Header