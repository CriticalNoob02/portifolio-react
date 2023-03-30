import "./cardsInit.sass"
import CardsVignette from "../../cards/CardsVignette"

function CardsInit(props){
    return(
        <div className="bodySection">
            <div className='cards'>
               <CardsVignette
                    title={props.title}
                    text={props.text}
                    img={props.img}
               />
            </div>
        </div>
    )
}

export default CardsInit