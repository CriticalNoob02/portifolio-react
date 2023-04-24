import "./cardsRepos.sass"
import React ,{ useRef, useEffect, useState, useContext } from "react"
import { isLoading } from "../../../context/isLoading"
import { motion } from "framer-motion"
import CardsDark from "../../../components/cards/CardsDark"
import Loader from "../../../components/loaders/loader"

function CardRepos(){
    const cardsBox = useRef(null)

    const {loading1, setLoading1} = useContext(isLoading)

    const [repositories, setRepos] = useState()
    const [width, setWidth] = useState(0)

    useEffect(() => {
        fetch("http://localhost:5100/CriticalNoob02/repos")
        .then( res => res.json() )
        .then( resData => {
            setRepos(resData)
            setLoading1(false)
        })
        .catch(erro => console.log(erro))
    }, [])

    useEffect(() => {
        setWidth(cardsBox.current?.scrollWidth - cardsBox.current?.offsetWidth)
    }, [loading1,false])

    return(
        <div className="cardDarkSection">
            <h1 className="titleReposGit">Meus repositórios publicos</h1>
           
                {loading1
                    ?
                <Loader/>
                    : 
                <div className="cardContainer">
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
                    </motion.div>
                </div>}

        </div>
    )
}

export default CardRepos