import { Routes, Route } from "react-router-dom"

import Home from "./Layout/Home";
import PageLogin from "./Layout/compte";
import PageCompte from "./Layout/compte";

function App() {
  return (
    <div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<PageLogin />} />
       <Route path="/compte" element={<PageCompte />} />
      </Routes>
    </div>
  )
}
export default App;