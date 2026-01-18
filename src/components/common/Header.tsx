import { Link } from '@tanstack/react-router';

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <Link to="/">
            <img src="/images/logos/seal.svg" alt="TDFC Logo" className="logo-image" />
          </Link>
        </div>
        <nav className="nav">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/about" className="nav-link">
            About
          </Link>
          <Link to="/players" className="nav-link">
            Players
          </Link>
          <Link to="/stats" className="nav-link">
            Stats
          </Link>
          <Link to="/contact" className="nav-link">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
