import './Footer.css';

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        
        {/* Kolom 1: Brand */}
        <div className="footer-brand">
          <h3><span>🖨️</span> Mitra Anda</h3>
          <p>Solusi lengkap untuk kebutuhan fotokopi, ATK, cetak foto, dan foto formal Anda.</p>
        </div>

        {/* Kolom 2: Navigasi */}
        <div className="footer-links">
          <h4>Navigasi</h4>
          <ul>
            <li><a href="#produk">Produk</a></li>
            <li><a href="#kategori">Kategori</a></li>
            <li><a href="#masuk">Masuk / Daftar</a></li>
          </ul>
        </div>

        {/* Kolom 3: Kontak */}
        <div className="footer-contact">
          <h4>Kontak</h4>
          <p>📞 0812-3456-7890</p>
          <p>✉️ info@mitraanda.com</p>
          <p>📍 Jl. Contoh No. 123, Kota</p>
        </div>

      </div>

      {/* Bagian Hak Cipta bawah */}
      <div className="footer-bottom">
        <p>© 2026 Mitra Anda. Semua hak dilindungi.</p>
      </div>
    </footer>
  );
}

export default Footer;