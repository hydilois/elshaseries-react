import React, { useContext, useState } from 'react'

import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from './components/partials/ScrollToTop';
import { ToastContainer, toast } from "react-toastify";
import authAPI from './services/AuthAPI';
import AuthContext from './contexts/AuthContext';
import NavBar from './components/partials/NavBar';
import Preloader from './components/partials/Preloader';
import Discover from './components/partials/Discover';
import About from './components/partials/About';
import Services from './components/partials/Services';
import Resume from './components/partials/Resume';
import Skills from './components/partials/Skills';
import Portfolio from './components/partials/Portfolio';
import Facts from './components/partials/Facts';
import Testimonials from './components/partials/Testimonials';
import Blog from './components/partials/Blog';
import Contact from './components/partials/Contact';
import Footer from './components/partials/Footer';
import LanguageContextProvider from './contexts/languageContext';
import ThemeContextProvider, { themeContext } from './contexts/themeContext';
// import { TYPE_OF_THEME } from './enum';


//STEP 1:
//create components using React.lazy
const LightTheme = React.lazy(() => import('./themes/LightTheme'));
const DarkTheme = React.lazy(() => import('./themes/DarkTheme'));

//STEP 2:
//create a parent component that will load the components conditionally using React.Suspense
const ThemeSelector = ({ children }) => {
  const { theme } = useContext(themeContext);
  return (
    <>
      <React.Suspense fallback={<></>}>
        {theme === 'LIGHT_MODE' && <LightTheme />}
        {theme === 'DARK_MODE' && <DarkTheme />}
      </React.Suspense>
      {children}
    </>
  )
}


function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(
    authAPI.isAuthenticated()
  );

  return (
    <>
      <ThemeContextProvider>
        <ThemeSelector>
          <LanguageContextProvider>
            <AuthContext.Provider
              value={{
                isAuthenticated,
                setIsAuthenticated
              }}
            >
              <BrowserRouter>
                <Preloader />
                <NavBar />
                <Discover />
                <About />
                <Services />
                <Resume />
                <Skills />
                <Portfolio />
                <Facts />
                <Testimonials />
                <Blog />
                <Contact />
                <Footer />
                <ScrollToTop />
                <ToastContainer position={toast.POSITION.BOTTOM_RIGHT} />
              </BrowserRouter>
            </AuthContext.Provider>
          </LanguageContextProvider>
        </ThemeSelector>
      </ThemeContextProvider>
    </>
  );
}

export default App;
