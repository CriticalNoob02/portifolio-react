import './footer.sass'
import { useContext } from "react"
import { ThemeContext } from '../../context/ThemeParent'

function Footer(props){

    const { globalTheme } = useContext(ThemeContext)

    return(
        <div className={`footerBox ${globalTheme}`}>
            <p>
                Criado por <a href={props.link} target="_blank" className={`signature ${globalTheme}`}>{props.nome}</a>
            </p>
            <img src={props.selo} alt="Selo" className={`stamp ${globalTheme}`}/>
        </div>
    )
}

export default Footer