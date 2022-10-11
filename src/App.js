import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navigation from "./Components/Navigation/Navigation";
import Footer from "./Components/Footer/Footer";
import Home from "./Pages/Home/Home";
import ScrollTop from "./Components/ScrollTop/ScrollTop";
import Projects from "./Pages/Projects/Projects";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
        <ScrollTop />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
