import './components/style/main.sass'
import React, { useEffect, useState } from 'react'
import GithubEndpoint from './service/client'
import Header from './components/header/header'
import Footer from './components/footer/footer'
import Avatar from './assets/Avatar.jpg'
import Selo from './assets/Selo.png'
import Body from './components/body/Body'


function App() {
    //Função que ira guardar os dados da requisição
    const [data, setData] = useState([])

    //Função para recuperar as informações da API
    async function getBaseGithub(){
        try {
            const response = await GithubEndpoint.get(`/CriticalNoob02`)
            const data = response.data
            setData(data)
        } catch (error) {
            console.log("Erro ao recuperar informações da API \n" + error)
        }
    }

    //Função para gerar um estado logo quando é carregado o app
    useEffect(() => {
        getBaseGithub()
    }, [])

    return (
        <div className='app'>
            <Header foto={data.avatar_url ?? Avatar}
                    nome={data.name ?? 'Shrekão da Silva'}
            />
            <Body/>           
            <Footer selo={data.avatar_url ?? Selo}
                    link={data.html_url ?? 'https://github.com/CriticalNoob02'}
                    nome={data.login ?? "CriticalNoob02"}
            />
        </div>
    )
}
export default App