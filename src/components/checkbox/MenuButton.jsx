import './MenuButton.scss'

function MenuButton(){
    
    return(
        <label class="burger" for="burger">
            <input type="checkbox" id="burger" onChange={ (e) => {console.log(10)} }/>
            <span></span>
            <span></span>
            <span></span>
        </label>
    )
}

export default MenuButton