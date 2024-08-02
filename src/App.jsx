import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Brothers from "./pages/Brothers";
import FAQ from "./pages/FAQ";
import About from "./pages/About";
import Recruitment from "./pages/Recruitment";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="brothers" element={<Brothers />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="about" element={<About />} />
          <Route path="recruitment" element={<Recruitment />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
