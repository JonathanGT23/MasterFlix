import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Footer from "./components/Footer"
import Header from "./components/Header"
import GlobalStyle from "./globalStyles"
import Home from "./Pages/Home"
import NuevoVideo from "./Pages/NuevoVideo"
import NuevaCategoría from "./Pages/NuevaCategoría"
import Error404 from "./Pages/Error404"


function App() {
  
  
  
  return (
    <>
      <GlobalStyle/>
      <Router>
        <Header/>
              <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/NuevoVideo" element={<NuevoVideo/>} />
                <Route path="/NuevaCategoria/" element={<NuevaCategoría/>}/>
                <Route path="*" element={<Error404/>}/>
            </Routes>
          <Footer/>
      </Router>
    </>
  )
}

export default App
