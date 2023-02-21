import '../../style/components/header/header.sass'


function Header(props) {
    return(
        <div className="headerBox">
            <div className='avatar'>
                <div className='color'></div>
                <img src={props.foto} className='img'/>
            </div>
            <div className='title'>
                
            </div>
        </div>
)}
export default Header