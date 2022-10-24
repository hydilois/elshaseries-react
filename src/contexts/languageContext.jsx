import { createContext, useState } from "react";

export const languageContext = createContext();

const languageContextProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");
  const switchLanguage = (updatedLanguage) => {
    setLanguage(updatedLanguage);
  };
  return (
    <languageContext.Provider value={{ language, switchLanguage }}>
      {children}
    </languageContext.Provider>
  );
};

export default languageContextProvider;
