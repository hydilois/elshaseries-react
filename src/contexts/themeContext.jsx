import { createContext, useState } from "react";
import { TYPE_OF_THEME } from "../enum";

export const themeContext = createContext();

const themeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(
    localStorage.getItem("TYPE_OF_THEME") || TYPE_OF_THEME.LIGHT_MODE
  );

  const switchTheme = (updatedTheme) => {
    if (updatedTheme === TYPE_OF_THEME.LIGHT_MODE) {
      setTheme(TYPE_OF_THEME.DARK_MODE);
      localStorage.setItem("TYPE_OF_THEME", TYPE_OF_THEME.DARK_MODE)
    } else {
      setTheme(TYPE_OF_THEME.LIGHT_MODE);
      localStorage.setItem("TYPE_OF_THEME", TYPE_OF_THEME.LIGHT_MODE)
    }

    window.location.reload(true);

  };

  return (
    <themeContext.Provider value={{ theme, switchTheme }}>
      {children}
    </themeContext.Provider>
  );
};

export default themeContextProvider;
