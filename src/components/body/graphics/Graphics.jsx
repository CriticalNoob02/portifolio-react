import "./graphics"

function Graphics(props){
    const user = props.user
    async function getDataGithub(){
        try {
            const response = await client.get(`/${user}`)
            const {data} = response
            const {avatar_url,public_repos,login} = data
            console.log(data) 
        } catch (error) {
            console.log("Erro ao recuperar informações da API \n" + error)
        }
    }

    return(
        <div onLoad={getDataGithub()}>
            
        </div>
    )
}

export default Graphics