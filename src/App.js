import './App.css';
import Inicio from './Components/Inicio';
import Navbar from './Components/Navbar';
import Futbol from './Components/Futbol';
import Tenis from './Components/Tenis';
import Voley from './Components/Voley'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Footer from './Components/Footer';
function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/Futbol" element={<Futbol />} />
        <Route path="/Tenis" element={<Tenis />} />
        <Route path="/Voley" element={<Voley />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
