import './style/main.sass'
import Header from './components/header/header'
import Main from './components/main/main'
import Footer from './components/footer/footer'
import Avatar from './assets/Avatar.jpg'
import Selo from './assets/Selo.png'


function App() {
    return (
        <div className='app'>
            <Header foto={Avatar}
                    nome={'Shrekão da Silva'}
            />
            <Footer selo={Selo}
                    link={'https://github.com/CriticalNoob02'}
                    nome={"CriticalNoob02"}/>
        </div>
    )
}
export default App