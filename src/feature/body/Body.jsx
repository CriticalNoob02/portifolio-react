import './body.sass'
import Summary from './summary/Summary'
import CardsInit from './cardsInit/cardsInit'
import Graphics from './graphics/Graphics'
import CardRepos from './cardRepos/CardsRepos'
import GraphicLine from './graphicsLine/GraphicLine'

import Img1 from '../../assets/img1.png'
import Img2 from '../../assets/img2.png'
import Img3 from '../../assets/img3.png'
import Img4 from '../../assets/img4.png'
import Img5 from '../../assets/img5.png'

function Body(){
    const titlesCards = ['Algo55','Algo','Algo','Algo2','Algo2']
    const textsCards = ['Algo2','Algo2','Algo2','Algo2','Algo2']
    const imgsCards = [Img1,Img2,Img3,Img4,Img5]

    return(
        <div className="body">
            <Summary/>
            <CardsInit 
                title={titlesCards}
                text={textsCards}
                img={imgsCards}
            />
            <Graphics 
                user={'CriticalNoob02'}
            />
            <CardRepos/>
            <GraphicLine
                user={'CriticalNoob02'}
            />
        </div>
    )
}

export default Body