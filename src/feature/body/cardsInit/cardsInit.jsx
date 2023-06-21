import "./cardsInit.sass"
import CardsVignette from "../../../components/cards/CardsVignette"
import { useContext } from "react"
import { ThemeContext } from '../../../context/ThemeParent'

function CardsInit(props){

    const { globalTheme } = useContext(ThemeContext)

    return(
        <div className="bodySection">
        <h1 className={`titleBody ${globalTheme}`}>Ferramentas desta aplicação</h1>
            <div className='cards'>
               <CardsVignette
                    title={props.title}
                    link={props.link}
                    img={props.img}
               />
            </div>
        </div>
    )
}

export default CardsInit