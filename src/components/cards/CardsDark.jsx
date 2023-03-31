import ButtonCards from "../buttons/ButtonCards"
import { Fragment } from "react"
import { motion } from "framer-motion"
import "./CardsDark.sass"

function CardsDark(props) {
    return Array.from({ length: props.length }, (v, k) => k)
        .map((i) => ([
        <Fragment key={props.id[i][0]}>
            <motion.div className="cardDarkBorder" whileTap={{cursor: "grabbing"}} >
                <div className="cardDarkBody">
                    <h1 className="cardDarkTitle">{props.title[i][1]}</h1>
                    <p className="cardDarkParagraph">{props.text[i][3] ?? "Readme"}</p>
                    <ButtonCards
                        title={props.buttonTitle}
                        link={props.link[i][2]}
                    />
                </div>
            </motion.div>
        </Fragment> ]
        ))
}

export default CardsDark