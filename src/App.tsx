
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./pages/Inicio"



function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route >
          <Route index element={<Inicio />} />
        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App
