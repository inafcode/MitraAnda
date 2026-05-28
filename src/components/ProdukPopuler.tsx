import { useState, useEffect } from 'react';
import './ProdukPopuler.css';

// 1. Data Simulasi dari "Server"
const databaseProduk = [
  {
    id: 1,
    kategori: "ATK",
    nama: "Pulpen Pilot G-2 0.5mm",
    harga: "Rp 15.000",
    stok: 120,
    gambar: "https://placehold.co/400x300/7DA5A5/FFFFFF?text=Pulpen"
  },
  {
    id: 2,
    kategori: "ATK",
    nama: "Buku Tulis 58 Lembar",
    harga: "Rp 5.000",
    stok: 200,
    gambar: "https://placehold.co/400x300/E5E5E5/333333?text=Buku"
  },
  {
    id: 3,
    kategori: "ATK",
    nama: "Kertas HVS A4 70gsm (1 rim)",
    harga: "Rp 45.000",
    stok: 50,
    gambar: "https://placehold.co/400x300/F0F0F0/333333?text=Kertas"
  },
  {
    id: 4,
    kategori: "Fotokopi",
    nama: "Fotokopi Hitam Putih",
    harga: "Rp 300",
    stok: 999,
    gambar: "https://placehold.co/400x300/D0D4DB/1A365D?text=Printer"
  }
];

function ProdukPopuler() {
  // 2. Siapkan brankas State
  const [produk, setProduk] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // 3. Efek tarik data otomatis
  useEffect(() => {
    setTimeout(() => {
      setProduk(databaseProduk);
      setLoading(false);
    }, 2500); // Simulasi loading 2.5 detik
  }, []);

  return (
    <section className="produk-section">
      <div className="produk-container">
        
        {/* Header Bagian Atas */}
        <div className="produk-header">
          <div className="produk-title">
            <h2>Produk Populer</h2>
            <p>Produk paling sering dipesan</p>
          </div>
          <button className="btn-semua">Semua ➔</button>
        </div>

        {/* Tampilan Loading vs Tampilan Data */}
        {loading ? (
          <div style={{ textAlign: "center", padding: "40px", color: "#1A365D" }}>
            <h3>🔄 Menyiapkan etalase toko...</h3>
          </div>
        ) : (
          <div className="produk-grid">
            {/* Mesin .map() bekerja mencetak kartu! */}
            {produk.map((item) => (
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
                    {/* Ikon Keranjang dari bawaan teks emoji dulu */}
                    <button className="btn-keranjang">🛒</button>
                  </div>
                </div>

              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}

export default ProdukPopuler;