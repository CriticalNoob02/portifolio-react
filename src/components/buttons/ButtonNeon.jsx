import './ButtonNeon.scss'
import { Fragment, useContext } from 'react'
import { ThemeContext } from '../../context/ThemeParent';

function ButtonNeon(props) {

    const { globalTheme } = useContext(ThemeContext)

    return(
    <Fragment>
        <a href={props.link} target={"_blank"}> </a>
            <button className={`neonBtn ${globalTheme}`}>
                {props.title}
            </button>
    </Fragment>
)}

export default ButtonNeon