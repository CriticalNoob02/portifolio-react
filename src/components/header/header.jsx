import '../../style/components/header/header.sass'
import { DiJsBadge,DiReact,DiPython,DiSass } from "react-icons/di"


function Header(props) {
    return (
        <div className="headerBox">
            <div className='avatar'>
                <div className='color'></div>
                <img src={props.foto} className='img' />
            </div>
            <div className='title'>
                <h1>{props.nome}</h1>
            </div>
            <div className='icons'>
                <DiJsBadge className='icon1'/>
                <DiReact className='icon2'/>
                <DiPython className='icon3'/>
                <DiSass className='icon4'/>
            </div>
        </div>
    )
}
export default Header