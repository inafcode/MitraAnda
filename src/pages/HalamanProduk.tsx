import { useState, useEffect } from 'react';
import './HalamanProduk.css';

// 1. Data Base Simulasi (Dibuat lebih banyak agar filternya terasa)
const databaseLengkap = [
  { id: 1, kategori: "ATK", nama: "Pulpen Pilot G-2 0.5mm", harga: "Rp 15.000", stok: 120, gambar: "https://placehold.co/400x300/7DA5A5/FFFFFF?text=Pulpen" },
  { id: 2, kategori: "ATK", nama: "Buku Tulis 58 Lembar", harga: "Rp 5.000", stok: 200, gambar: "https://placehold.co/400x300/E5E5E5/333333?text=Buku" },
  { id: 3, kategori: "ATK", nama: "Kertas HVS A4 70gsm (1 rim)", harga: "Rp 45.000", stok: 50, gambar: "https://placehold.co/400x300/F0F0F0/333333?text=Kertas" },
  { id: 4, kategori: "Fotokopi", nama: "Fotokopi Hitam Putih (per lembar)", harga: "Rp 300", stok: 999, gambar: "https://placehold.co/400x300/D0D4DB/1A365D?text=Fotokopi" },
  { id: 5, kategori: "Cetak Foto", nama: "Cetak Foto 4x6", harga: "Rp 5.000", stok: 999, gambar: "https://placehold.co/400x300/E2E8F0/1A365D?text=Foto+4x6" },
  { id: 6, kategori: "Foto Formal", nama: "Foto Formal 3x4 (6 lembar)", harga: "Rp 25.000", stok: 999, gambar: "https://placehold.co/400x300/CBD5E1/1A365D?text=Formal+3x4" },
];

// Daftar tab kategori dari desainmu
const daftarTab = ["Semua", "ATK", "Fotokopi", "Cetak Foto", "Foto Formal"];

function HalamanProduk() {
  // Brankas State
  const [produk, setProduk] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  
  // Brankas Filter
  const [kataKunci, setKataKunci] = useState("");
  const [kategoriAktif, setKategoriAktif] = useState("Semua");

  // Tarik Data (Simulasi)
  useEffect(() => {
    setTimeout(() => {
      setProduk(databaseLengkap);
      setLoading(false);
    }, 1000); // Loading 1 detik saja
  }, []);

  // LOGIKA PENJAGA GERBANG GANDA 🛡️🛡️
  const produkYangDitampilkan = produk.filter((item) => {
    // Gerbang 1: Teks
    const lolosTeks = item.nama.toLowerCase().includes(kataKunci.toLowerCase());
    // Gerbang 2: Tab Kategori
    const lolosKategori = kategoriAktif === "Semua" || item.kategori === kategoriAktif;
    
    return lolosTeks && lolosKategori;
  });

  return (
    <div className="halaman-produk">
      
      <div className="header-produk">
        <h1>Semua Produk</h1>
        <p>Temukan produk dan layanan yang Anda butuhkan</p>
      </div>

      {/* Area Filter */}
      <div className="filter-bar">
        <input 
          type="text" 
          placeholder="🔍 Cari produk..." 
          className="search-input"
          value={kataKunci}
          onChange={(e) => setKataKunci(e.target.value)}
        />

        <div className="kategori-pills">
          {daftarTab.map((tab) => (
            <button 
              key={tab}
              onClick={() => setKategoriAktif(tab)}
              // Jika tab ini sama dengan state kategoriAktif, berikan class 'active', jika tidak 'inactive'
              className={`pill-btn ${kategoriAktif === tab ? 'active' : 'inactive'}`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Area Menampilkan Produk */}
      {loading ? (
        <div style={{ textAlign: "center", color: "#1A365D" }}><h3>⏳ Memuat katalog...</h3></div>
      ) : (
        <div className="produk-grid">
          {/* Loop data yang SUDAH LOLOS filter */}
          {produkYangDitampilkan.map((item) => (
            <div key={item.id} className="produk-card">
              <img src={item.gambar} alt={item.nama} className="produk-image" />
              <div className="produk-info">
                <div className="produk-kategori">{item.kategori}</div>
                <h3 className="produk-nama">{item.nama}</h3>
                <div className="produk-bawah">
                  <div>
                    <div className="produk-harga">{item.harga}</div>
                    <div className="produk-stok">Stok: {item.stok}</div>
                  </div>
                  <button className="btn-keranjang">🛒</button>
                </div>
              </div>
            </div>
          ))}

          {/* Menampilkan pesan jika pencarian tidak membuahkan hasil */}
          {produkYangDitampilkan.length === 0 && (
            <div className="produk-kosong">
              😕 Maaf, produk "{kataKunci}" di kategori "{kategoriAktif}" tidak ditemukan.
            </div>
          )}
        </div>
      )}

    </div>
  );
}

export default HalamanProduk;