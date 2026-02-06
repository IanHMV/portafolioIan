
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Inicio from "./pages/Inicio"
import LayInicio from "./Layout/LayInicio"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayInicio/>}>
          <Route  index element={<Inicio/>}/>
        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App
