import { useState } from 'react';
import { Menu } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Header.css';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="menu-icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <Menu size={50} /> Menu
      </div>

      {isMenuOpen && (
        <nav className="dropdown-menu">
          <Link to="/" className="nav-item" onClick={() => setIsMenuOpen(false)}>Home</Link>
          <Link to="/sare-ecologica" className="nav-item" onClick={() => setIsMenuOpen(false)}>Sare ecologică</Link>
          <Link to="/spuma-de-sare-marina"className="nav-item" onClick={() => setIsMenuOpen(false)}>Spumă de sare</Link>
          <Link to="/fulgi-de-sare-marina" className="nav-item" onClick={() => setIsMenuOpen(false)}>Fulgi de sare</Link>
        </nav>
      )}

      {/* Right Side - Image */}
      <div className="header-image">
        <img src="https://www.brasdelport.com/wp-content/uploads/logo_header.png" alt="Profile" />
      </div>
    </header>
  );
}