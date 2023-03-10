import "../../../style/components/body/cards/cards.sass"

function Card(props) {
    return Array.from({length: 5}, (v, k) => k)
        .map( (i) => (
            [<div className={`card${i+1}`}>
                <h1>{props.title[i]}</h1>
                <h6>{props.text[i]}</h6>
                <img src={props.img[i]} className='imgCard' alt='Foto-Perfil' />
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