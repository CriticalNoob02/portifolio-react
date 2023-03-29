import ButtonCards from "../buttons/ButtonCards"
import { Fragment } from "react"
import "./CardsDark.sass"

function CardsDark(props) {
    return Array.from({ length: props.length }, (v, k) => k)
        .map((i) => ([
        <Fragment key={props.id}>
            <div className="cardDarkBorder" >
                <div className="cardDarkBody">
                    <h1 className="cardDarkTitle">{props.title}</h1>
                    <p className="cardDarkParagraph">{props.text}</p>
                    <ButtonCards
                        title={props.buttonTitle}
                    />
                </div>
            </div>
        </Fragment> ]
        ))
}

export default CardsDark