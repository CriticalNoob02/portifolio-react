import ButtonCards from "../buttons/ButtonCards"
import { Fragment } from "react"
import { motion } from "framer-motion"
import "./CardsDark.sass"

function CardsDark(props) {
    const obj = props.obj
    return Array.from({ length: obj.length }, (v, k) => k)
        .map((i) => ([
        <Fragment key={ obj[i].id }>
            <motion.div className="cardDarkBorder" whileTap={{cursor: "grabbing"}} >
                <div className="cardDarkBody">
                    <h1 className="cardDarkTitle">{ obj[i].name }</h1>
                    <p className="cardDarkParagraph">{ obj[i].language ?? "Readme"}</p>
                    <ButtonCards
                        title={ props.buttonTitle }
                        link={ obj[i].link }
                    />
                </div>
            </motion.div>
        </Fragment> ]
        ))
}

export default CardsDark