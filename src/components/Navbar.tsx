import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar-container">
      
      {/* Blok 1: Kiri */}
      <div className="navbar-logo">
        {/* Nanti ikon aslinya bisa kita masukkan ke folder assets */}
        <span>🖨️</span> Mitra Anda
      </div>

      {/* Blok 2: Tengah */}
      <div className="navbar-menu">
        <span className="menu-item active">Beranda</span>
        <span className="menu-item">Produk</span>
        <span className="menu-item">Kategori</span>
      </div>

      {/* Blok 3: Kanan */}
      <div className="navbar-actions">
        <div style={{ position: "relative", cursor: "pointer" }}>
          🛒
          {/* Ini adalah bulatan kuning berisi angka 3 di desainmu */}
          <span style={{ position: "absolute", top: "-10px", right: "-10px", backgroundColor: "#F59E0B", color: "white", borderRadius: "50%", padding: "2px 6px", fontSize: "10px", fontWeight: "bold" }}>
            3
          </span>
        </div>
        <button className="btn-masuk">👤 Masuk</button>
      </div>

    </nav>
  );
}

export default Navbar;