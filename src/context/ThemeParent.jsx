import React, {createContext, useState} from "react";

export const DARK_THEME = 'DARK';
export const LIGHT_THEME = 'LIGHT';

export const ThemeContext = createContext({
    globalTheme: '',
    setGlobalTheme: () => {}
});

const ThemeContextParent = (props) => {
    const [theme, setTheme] = useState(DARK_THEME);

    const value = {
        globalTheme: theme,
        setGlobalTheme: setTheme
    }

    return(
        <ThemeContext.Provider value={value}>
            {props.children}
        </ThemeContext.Provider>
    )
};

export default ThemeContextParent;