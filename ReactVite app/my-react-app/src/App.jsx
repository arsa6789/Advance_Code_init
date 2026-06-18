import { BrowserRouter, Route, Routes } from "react-router";
import HomePage from "./Home/index.jsx"
import './App.css'

function App() {


  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
