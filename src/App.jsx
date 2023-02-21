import './style/main.sass'
import Header from './components/header/header'
import Avatar from './assets/Avatar.jpg'

function App() {
    return (
        <div className='app'>
            <Header foto={Avatar}
                    nome={'Shrek da Silva'}
            />
        </div>
    )
}
export default App