import { BrowserRouter } from "react-router-dom"
import { Navbar, Welcome, MyPublications, CustomerReviews, Events } from "./components"
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyle from "./components/style/GlobalStyle";
import mobileWidth from "./components/style/mobileWidth";
import Footer from "./components/layouts/footer/Footer"
import { useState } from "react";



const App = () => {

  const [isDark, setDark] = useState(false)

  return (
    <BrowserRouter>

      <ThemeProvider theme={mobileWidth}>
        <GlobalStyle />
        <div className={`relative z-0 bg-${isDark ? 'www' : 'primary'}`}>
          <Navbar
            isDark={isDark}
            setDark={setDark}
          />
          <Welcome />
          <MyPublications />
          <CustomerReviews />
          <Events />
          <Footer />
        </div>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App