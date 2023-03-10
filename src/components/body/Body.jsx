import '../../style/components/body/body.sass'
import Summary from './summary/Summary'
import Cards from './cards/cards'
import Img1 from '../../assets/img1.png'
import Img2 from '../../assets/img2.png'
import Img3 from '../../assets/img3.png'
import Img4 from '../../assets/img4.png'
import Img5 from '../../assets/img5.png'

function Body(){
    const titles = ['Algo55','Algo','Algo','Algo2','Algo2']
    const texts = ['Algo2','Algo2','Algo2','Algo2','Algo2']
    const imgs = [Img1,Img2,Img3,Img4,Img5]

    return(
        <div className="body">
            <Cards title={titles}
                    text={texts}
                    img={imgs}
                    />
            <Summary/>
        </div>
    )
}

export default Body