import './body.sass'
import Summary from './summary/Summary'
import CardsInit from './cardsInit/cardsInit'
import Graphics from './graphics/Graphics'
import CardRepos from './cardRepos/CardsRepos'
import GraphicLine from './graphicsLine/GraphicLine'

import Img1 from '../../assets/img1.jpg'
import Img2 from '../../assets/img2.png'
import Img3 from '../../assets/img3.jpg'
import Img4 from '../../assets/img4.webp'
import Img5 from '../../assets/img5.png'

function Body(){
    const titlesCards = ['Charts.js','Sass','Github','React.js','Algo2']
    const textsCards = ['https://www.chartjs.org/','https://sass-lang.com/','https://docs.github.com/en/rest?apiVersion=2022-11-28','https://react.dev/','Documentação']
    const imgsCards = [Img1,Img2,Img3,Img4,Img5]

    return(
        <div className="body">
            <Summary/>
            <CardsInit 
                title={titlesCards}
                link={textsCards}
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