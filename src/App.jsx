import React, { useEffect, useState, Fragment, useContext } from 'react'
import { isLoading } from './context/isLoading'
import ThemeContextParent  from './context/ThemeParent'
import Loader from './components/loaders/loader'
import Header from './feature/header/header'
import Footer from './feature/footer/footer'
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
        <ThemeContextParent>
            <Fragment>
                    {loading3
                        ?
                    <Loader height={'100vh'} />
                        :
                    <Fragment>
                    <Header
                        foto={data.avatar}
                        nome={data.name}
                    />
                    <Body />
                    <Footer 
                        selo={data.avatar}
                        link={data.url}
                        nome={data.login}
                    />
                    </Fragment>}
            </Fragment>
        </ThemeContextParent>
    )
}
export default App