import "./cardsRepos.sass"
import React ,{ useRef, useEffect, useState } from "react"
import requestRepos from "../../../service/setGithubDataRepos"
import CardsDark from "../../cards/CardsDark"

function CardRepos(){
    const cardsBox = useRef(null)

    const [repositories, setRepos] = useState()

    useEffect(() => {
        Promise.resolve(requestRepos)
        .then( res => setRepos(res))
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
            <div className="cardContainer">
                <p className="arrow" onClick={leftClick}>ᐊ</p>

                <div className="cardsBox" ref={cardsBox}>
                    <CardsDark
                        length={14}
                        title={'Titles'}
                        text={'Text Paragraph'}
                        buttonTitle={'Button Title'}
                    />
                </div>

                <p className="arrow" onClick={rightClick}>ᐅ</p>
            </div>
        </div>
    )
}

export default CardRepos