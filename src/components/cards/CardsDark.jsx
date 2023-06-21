import "./CardsDark.sass"
import ButtonCards from "../buttons/ButtonCards"
import { Fragment, useContext } from "react"
import { motion } from "framer-motion"
import { ThemeContext } from '../../context/ThemeParent'

function CardsDark(props) {

    const { globalTheme } = useContext(ThemeContext)
    const obj = props.obj


    return Array.from({ length: obj.length }, (v, k) => k)
        .map((i) => ([
        <Fragment key={ obj[i].id }>
            <motion.div className={`cardDarkBorder ${globalTheme}`} whileTap={{cursor: "grabbing"}} >
                <div className={`cardDarkBody ${globalTheme}`}>
                    <h1 className={`cardDarkTitle ${globalTheme}`}>{ obj[i].name }</h1>
                    <p className={`cardDarkParagraph ${globalTheme}`}>{ obj[i].language ?? "Readme"}</p>
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