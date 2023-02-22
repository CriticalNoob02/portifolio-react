import '../../style/components/footer/footer.sass'
import Selo from '../../assets/Selo.png'

function Footer(){
    return(
        <div className="footerBox">
            <p className='signature'>
                Criado por <a href="https://github.com/CriticalNoob02" target="_blank">CriticalNoob02</a>
            </p>
            <img src={Selo} alt="Selo" className='stamp' />
        </div>
    )
}

export default Footer