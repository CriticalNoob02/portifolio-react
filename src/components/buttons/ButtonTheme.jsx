import React, { useContext } from "react";
import "./ButtonTheme.scss";
import { ThemeContext } from '../../context/ThemeParent';

const ButtonTheme = (props) => {
  const { children, changeTheme } = props;
  const { globalTheme, setGlobalTheme } = useContext(ThemeContext);

  const onClick = () => {
    setGlobalTheme(changeTheme);
  };

  return (
    <button className={`button ${globalTheme}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default ButtonTheme;
