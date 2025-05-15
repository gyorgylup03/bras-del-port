import SaltFlakes from './Components/FulgiDeSare';
import Header from './Components/Header';
import SpumaDeSare from './Components/SpumaDeSareMarina';
import Home from './Components/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EcoSaltPage from './Components/SareEcologica';

function App() {
  return (
    <Router>
    <Header /> {/* A navigációs sáv minden oldalon látható */}
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sare-ecologica" element={<EcoSaltPage />} />
      <Route path="/spuma-de-sare-marina" element={<SpumaDeSare />} />
      <Route path="/fulgi-de-sare-marina" element={<SaltFlakes />} />
    </Routes>
  </Router>
  );
}

export default App;
