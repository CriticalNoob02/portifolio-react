import './components/style/main.sass'
import Header from './components/header/header'
import Footer from './components/footer/footer'
import Avatar from './assets/Avatar.jpg'
import Selo from './assets/Selo.png'
import Body from './components/body/Body'


function App() {
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