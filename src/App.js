import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/navbar.component";
import Home from "./pages/home/home.component";

function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Routes>
          <Route to='/' index element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
