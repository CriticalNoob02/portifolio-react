import "./cardsRepos.sass"
import React ,{ useRef, useEffect, useState } from "react"
import { motion } from "framer-motion"
import CardsDark from "../../../components/cards/CardsDark"

function CardRepos(){
    const cardsBox = useRef(null)

    const [repositories, setRepos] = useState()
    const [isLoading, setisLoading] = useState(true)
    const [width, setWidth] = useState(0)

    useEffect(() => {
        fetch("http://localhost:5100/CriticalNoob02/repos")
        .then( res => res.json() )
        .then( resData => {
            setRepos(resData)
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
                        obj={repositories}
                        buttonTitle={"Lets code!"}
                        link={repositories}
                    />
                </motion.div>}

            </div>
        </div>
    )
}

export default CardRepos