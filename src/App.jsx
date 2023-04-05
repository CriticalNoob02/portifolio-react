import './components/style/main.sass'
import React, { useEffect, useState } from 'react'
import Header from './feature/header/header'
import Footer from './feature/footer/footer'
import Avatar from './assets/Avatar.jpg'
import Selo from './assets/Selo.png'
import Body from './feature/body/Body'


function App() {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch("http://localhost:21262/CriticalNoob02/base")
        .then( res => res.json() )
        .then( resData => setData(resData) )
        .catch(erro => console.log(erro))
    }, [])

    return (
        <div className='app'>
            <Header
                foto={data.avatar ?? Avatar}
                nome={data.name ?? 'Shrekão da Silva'}
            />
            <Body/>           
            <Footer 
                selo={data.avatar ?? Selo}
                link={data.url ?? 'https://github.com/CriticalNoob02'}
                nome={data.login ?? "CriticalNoob02"}
            />
        </div>
    )
}
export default App