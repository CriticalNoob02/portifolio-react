import "./cardsInit.sass"
import CardsVignette from "../../../components/cards/CardsVignette"

function CardsInit(props){
    return(
        <div className="bodySection">
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