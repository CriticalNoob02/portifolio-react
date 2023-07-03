import './MenuButton.scss'

function MenuButton(){
    
    return(
        <label class="burger" for="burger">
            <input type="checkbox" id="burger"/>
            <span></span>
            <span></span>
            <span></span>
        </label>
    )
}

export default MenuButton