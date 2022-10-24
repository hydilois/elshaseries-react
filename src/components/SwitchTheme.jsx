import React, { useContext } from "react";
import { themeContext } from "../contexts/themeContext";
import { TYPE_OF_THEME } from '../enum';

function SwitchTheme() {
  const { switchTheme, theme } = useContext(themeContext);

  return (
    <>
      <li>
        <input onChange={() => switchTheme(theme)} type="checkbox" id="toggle" checked={theme === TYPE_OF_THEME.DARK_MODE} />
      </li>
    </>
  );
}

export default SwitchTheme;
