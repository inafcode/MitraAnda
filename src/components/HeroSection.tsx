import './HeroSection.css';

function HeroSection() {
  return (
    <div className="hero-container">
      <h1 className="hero-title">
        Solusi Lengkap untuk <br />
        <span className="hero-highlight">Fotokopi, ATK & Cetak Foto</span>
      </h1>
      
      <p className="hero-subtitle">
        Pesan online, ambil di toko atau diantar langsung. Tersedia sistem bon
        bulanan untuk instansi.
      </p>
      
      <div className="hero-buttons">
        <button className="btn-primary">Lihat Produk ➔</button>
        <button className="btn-outline">Daftar Instansi</button>
      </div>
    </div>
  );
}

export default HeroSection;