import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home.jsx"

function Navigation() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="*" element={<h1>Not found 404</h1>}/>
    </Routes>
  )
}

export default Navigation
