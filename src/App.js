import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/navbar.component";
import Footer from "./components/footer/footer.component";
import Home from "./pages/home/home.component";
import Menu from "./pages/menu/menu.component";
import About from "./pages/about/about.component";
import Contact from "./pages/contact/contact.component";

function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/menu' element={<Menu />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
