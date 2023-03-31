import "./cardsRepos.sass"
import React ,{ useRef, useEffect, useState } from "react"
import { motion } from "framer-motion"
import requestRepos from "../../../service/setGithubDataRepos"
import CardsDark from "../../../components/cards/CardsDark"

function CardRepos(){
    const cardsBox = useRef(null)

    const [repositories, setRepos] = useState()
    const [isLoading, setisLoading] = useState(true)
    const [width, setWidth] = useState(0)

    useEffect(() => {
        Promise.resolve(requestRepos)
        .then( res => {
            setRepos(res)
            setisLoading(false)
        })
        .catch(erro => console.log(erro))
    }, [])

    useEffect(() => {
        setWidth(cardsBox.current?.scrollWidth - cardsBox.current?.offsetWidth)
    }, [isLoading,false])

    return(
        <div className="cardDarkSection">
            <h1 className="titleReposGit">Meus repositórios publicos</h1>
            <div className="cardContainer">

                {isLoading 
                    ?
                <p></p>
                    : 
                <motion.div 
                className="cardsBox" 
                ref={cardsBox} 
                drag="x"
                dragConstraints={{right: 0, left: -width}}
                >
                    <CardsDark
                        id={repositories}
                        length={repositories.length}
                        title={repositories}
                        text={repositories}
                        buttonTitle={"Lets code!"}
                        link={repositories}
                    />
                </motion.div>}

            </div>
        </div>
    )
}

export default CardRepos