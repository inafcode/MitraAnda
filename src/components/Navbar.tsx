import { Link, NavLink } from 'react-router-dom';
import { useCart } from '../context/CartContext'; // 1. IMPORT HOOK GLOBAL KITA
import './Navbar.css';

function Navbar() {
  const { totalBarang } = useCart(); // 2. AMBIL VARIABEL TOTAL BARANG

  return (
    <nav className="navbar-container">
      <div className="navbar-logo">
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span>🖨️</span> Mitra Anda
        </Link>
      </div>

      <div className="navbar-menu">
        <NavLink to="/" className="menu-item" end>Beranda</NavLink>
        <NavLink to="/produk" className="menu-item">Produk</NavLink>
        <NavLink to="/kategori" className="menu-item">Kategori</NavLink>
      </div>

      <div className="navbar-actions">
        <Link to="/keranjang" style={{ position: "relative", cursor: "pointer", textDecoration: 'none', color: 'inherit' }}>
          🛒
          {/* 3. PASANG VARIABELNYA DI SINI! */}
          <span style={{ position: "absolute", top: "-10px", right: "-10px", backgroundColor: "#F59E0B", color: "white", borderRadius: "50%", padding: "2px 6px", fontSize: "10px", fontWeight: "bold" }}>
            {totalBarang}
          </span>
        </Link>
        <Link to="/login" className="btn-masuk" style={{ textDecoration: 'none', display: 'inline-block' }}>
          👤 Masuk
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;