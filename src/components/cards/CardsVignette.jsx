import "./CardsVignette.sass"
import { useContext } from "react"
import { ThemeContext } from '../../context/ThemeParent'

function CardsVignette(props) {

    const { globalTheme } = useContext(ThemeContext)

    return Array.from({length: 5}, (v, k) => k)
        .map( (i) => (
            [<div className={`card${i+1} ${globalTheme}`} key={i}>
                <img src={props.img[i]} className='imgCard' alt='Foto-Perfil' />
                <div className="gradienteBackground">
                    <div className={`textCard ${globalTheme}`}>
                        <h1>{props.title[i]}</h1>
                        <a href={props.link[i]} target={"_blank"}><p>Documentação</p></a>
                    </div>
                </div>
            </div>]
        ))
}

export default CardsVignette