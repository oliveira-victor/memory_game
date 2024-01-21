import Footer from "./containers/Footer"
import MainMenu from "./containers/MainMenu"
import GlobalStyle, { Wrapper } from "./styles"

function App() {

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <MainMenu />
        <Footer />
      </Wrapper>
    </>
  )
}

export default App
