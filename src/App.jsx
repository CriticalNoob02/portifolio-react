import './components/style/main.sass'
import React, { useEffect } from 'react'
import GithubEndpoint from './service/client'
import Header from './components/header/header'
import Footer from './components/footer/footer'
import Avatar from './assets/Avatar.jpg'
import Selo from './assets/Selo.png'
import Body from './components/body/Body'


function App() {
    async function getDataGithub(){
        try {
            const response = await GithubEndpoint.get(`/CriticalNoob02`)
            console.log(response.data) 
        } catch (error) {
            console.log("Erro ao recuperar informações da API \n" + error)
        }
    }
    useEffect(() => {
        getDataGithub()
    })


    return (
        <div className='app'>
            <Header foto={Avatar}
                    nome={'Shrekão da Silva'}
            />
            <Body/>           
            <Footer selo={Selo}
                    link={'https://github.com/CriticalNoob02'}
                    nome={"CriticalNoob02"}
            />
        </div>
    )
}
export default App