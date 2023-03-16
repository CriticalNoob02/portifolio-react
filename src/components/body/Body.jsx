import './body.sass'
import Summary from './summary/Summary'
import Cards from './cards/cards'
import Graphics from './graphics/Graphics'

import Img1 from '../../assets/img1.png'
import Img2 from '../../assets/img2.png'
import Img3 from '../../assets/img3.png'
import Img4 from '../../assets/img4.png'
import Img5 from '../../assets/img5.png'

function Body(){
    const titlesCards = ['Algo55','Algo','Algo','Algo2','Algo2']
    const textsCards = ['Algo2','Algo2','Algo2','Algo2','Algo2']
    const imgsCards = [Img1,Img2,Img3,Img4,Img5]
    const titleSummary = 'Titulo da porra do summary'
    const textSummary = 'Texto base do summary dsfnoldnffodnfodsnf jdfnondofnojdksnfdsofnokldjsn dfdsifodifndsof fdseiofosdif nsdofndiosf    fnofndsofnf'

    return(
        <div className="body">
            <Summary title={titleSummary}
                     text={textSummary}
            />
            <Cards title={titlesCards}
                   text={textsCards}
                   img={imgsCards}
            />
            <Graphics user={'CriticalNoob02'}
            />
        </div>
    )
}

export default Body