import './header.sass'
import React ,{ useContext } from "react"
import ButtonTheme from '../../components/buttons/ButtonTheme'
import { DARK_THEME, LIGHT_THEME, ThemeContext } from '../../context/ThemeParent'

function Header(props) {

    const { globalTheme } = useContext(ThemeContext)

    return (
        <div className={`headerBox ${globalTheme}`}>
            <div className='avatar'>
                <div className='color'></div>
                <img src={props.foto} className={`img ${globalTheme}`} alt='Foto-Perfil' />
            </div>
            <div className={`title ${globalTheme}`}>
                <h1>{props.nome}</h1>
            </div>
            <ButtonTheme changeTheme={LIGHT_THEME}>Light</ButtonTheme>
            <ButtonTheme changeTheme={DARK_THEME}>Dark</ButtonTheme>
        </div>
    )
}
export default Header