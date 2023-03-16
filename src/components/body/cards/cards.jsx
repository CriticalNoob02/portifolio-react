import "./cards.sass"

function Card(props) {
    return Array.from({length: 5}, (v, k) => k)
        .map( (i) => (
            [<div className={`card${i+1}`}>
                <img src={props.img[i]} className='imgCard' alt='Foto-Perfil' />
                <div className="gradienteBackground">
                    <div className="textCard">
                        <h1>{props.title[i]}</h1>
                        <p>{props.text[i]}</p>
                    </div>
                </div>
            </div>]
            ))
}

function Cards(props){
    return(
        <div>
            <div className='cards'>
               <Card title={props.title}
                     text={props.text}
                     img={props.img}
               />
            </div>
        </div>
    )
}

export default Cards