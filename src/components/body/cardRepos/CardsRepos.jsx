import "./cardsRepos.sass"
import { Fragment } from "react"


function CardsDark (){
    return(
        <div className="bodySection">
            <div class="cardDarkBorder">
                <div class="cardDarkBody">
                    <h1 className="cardDarkTitle">Title</h1>
                    <p className="cardDarkParagraph">Paragrafos</p>
                    <button className="buttonRepos">Algo aqui!</button>
                </div>
            </div>
        </div>
    )
}

export default CardsDark