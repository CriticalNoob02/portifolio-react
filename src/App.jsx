import './style/main.sass'
import Header from './components/header/header'
import Avatar from './assets/Avatar.jpg'
import Footer from './components/footer/footer'

function App() {
    return (
        <div className='app'>
            <Header foto={Avatar}
                    nome={'Shrek da Silva'}
            />
            <Footer/>
        </div>
    )
}
export default App