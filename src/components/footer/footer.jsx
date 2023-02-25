import '../../style/components/footer/footer.sass'

function Footer(props){
    return(
        <div className="footerBox">
            <p className='signature'>
                Criado por <a href={props.link} target="_blank">{props.nome}</a>
            </p>
            <img src={props.selo} alt="Selo" className='stamp'/>
        </div>
    )
}

export default Footer