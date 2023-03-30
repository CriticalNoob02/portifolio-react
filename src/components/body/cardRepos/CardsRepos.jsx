import "./cardsRepos.sass"
import React ,{ useRef, useEffect, useState } from "react"
import requestRepos from "../../../service/setGithubDataRepos"
import CardsDark from "../../cards/CardsDark"

function CardRepos(){
    const cardsBox = useRef(null)

    const [repositories, setRepos] = useState()
    const [isLoading, setisLoading] = useState(true)

    useEffect(() => {
        Promise.resolve(requestRepos)
        .then( res => {
            setRepos(res)
            setisLoading(false)
            console.log(res)
        })
        .catch(erro => console.log(erro))
    }, [])

    const leftClick = (e) => {
        e.preventDefault()
        if(cardsBox.current.scrollLeft == 0){cardsBox.current.scrollLeft += cardsBox.current.scrollWidth}
        else{cardsBox.current.scrollLeft -= (cardsBox.current.offsetWidth / 3)}  
    }
    const rightClick = (e) => {
        e.preventDefault()
        if(cardsBox.current.scrollLeft == (cardsBox.current.scrollWidth - cardsBox.current.offsetWidth)){cardsBox.current.scrollLeft = 0}
        else{cardsBox.current.scrollLeft += (cardsBox.current.offsetWidth / 3)}  
    }

    return(
        <div className="bodySection">
            <h1 className="titleReposGit">Meus repositórios publicos</h1>
            <div className="cardContainer">
                <p className="arrow" onClick={leftClick}>ᐊ</p>

                {isLoading 
                    ?
                <p></p>
                    : 
                <div className="cardsBox" ref={cardsBox}>
                    <CardsDark
                        id={repositories}
                        length={repositories.length}
                        title={repositories}
                        text={repositories}
                        buttonTitle={"Lets code!"}
                        link={repositories}
                    />
                </div>}

                <p className="arrow" onClick={rightClick}>ᐅ</p>
            </div>
        </div>
    )
}

export default CardRepos