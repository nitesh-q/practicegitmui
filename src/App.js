import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Create from "./pages/Create";
import Contact from "./pages/Contact";
import { BrowserRouter } from "react-router-dom";
function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="create" element={<Create />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
