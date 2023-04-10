import "./summary.sass"

function Summary(){
    var version = '1.2.0'
    var title = "Bem-vindo ao meu Portifólio!!"
    var text = `Me chamo Adriel e iniciei minha jornada na área da tecnologia em abril/2022, desde então tenho atualizado esse repositório para mostrar tudo o que aprendi nesse tempo, atualmente estou na versão ${version}`
    
    return(
        <div className="summary">
            <h1>{title}</h1>
            <p>{text}</p>
        </div>
    )
}

export default Summary