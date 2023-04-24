import React, { useEffect, useState, Fragment, useContext } from 'react'
import { isLoading } from './context/isLoading'
import Loader from './components/loaders/loader'
import Header from './feature/header/header'
import Footer from './feature/footer/footer'
import Selo from './assets/Selo.png'
import Body from './feature/body/Body'



function App() {
    const {loading3, setLoading3} = useContext(isLoading)

    const [data, setData] = useState([])
    
    useEffect(() => {
        fetch("http://localhost:5100/CriticalNoob02/base")
        .then( res => res.json() )
        .then( resData => {
            setData(resData) 
            setLoading3(false)
        })
        .catch(erro => console.log(erro))
    }, [])

    return (
        <Fragment>
                {loading3
                    ?
                <Loader height={'100vh'} />
                    :
                <Fragment>
                <Header
                    foto={data.avatar ?? Selo}
                    nome={data.name ?? 'Adriel Rodrigues'}
                />
                <Body />
                <Footer 
                    selo={data.avatar ?? Selo}
                    link={data.url ?? 'https://github.com/CriticalNoob02'}
                    nome={data.login ?? "CriticalNoob02"}
                />
                </Fragment>}
        </Fragment>
    )
}
export default App