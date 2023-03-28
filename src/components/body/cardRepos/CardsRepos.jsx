import "./cardsRepos.sass"
import CardsDark from "../../cards/CardsDark"


function CardRepos(){
    return(
        <div className="bodySection">
            <div className="cardBox">

                <p className="arrow">ᐊ</p>

                <CardsDark
                    length={3}
                    title={'Titles'}
                    text={'Text Paragraph'}
                    buttonTitle={'Button Title'}
                />

                <p className="arrow">ᐅ</p>

            </div>
        </div>
    )
}

export default CardRepos