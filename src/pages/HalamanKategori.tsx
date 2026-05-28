import { useState, useEffect } from 'react';
import './HalamanKategori.css';
// Mengimpor CSS yang lama agar kita bisa meminjam desain kotaknya!
import '../components/KategoriLayanan.css'; 

const databaseKategori = [
  { id: 1, ikon: "🖊️", judul: "Alat Tulis Kantor", deskripsi: "Pulpen, buku, kertas, dan perlengkapan kantor lainnya", jumlah: "5 produk" },
  { id: 2, ikon: "🖨️", judul: "Fotokopi & Jilid", deskripsi: "Layanan fotokopi hitam putih, warna, dan jilid", jumlah: "3 produk" },
  { id: 3, ikon: "📸", judul: "Cetak Foto", deskripsi: "Cetak foto berbagai ukuran dengan kualitas terbaik", jumlah: "2 produk" },
  { id: 4, ikon: "📄", judul: "Foto Formal", deskripsi: "Jasa foto formal untuk keperluan dokumen resmi", jumlah: "2 produk" }
];

function HalamanKategori() {
  const [kategori, setKategori] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setKategori(databaseKategori);
      setLoading(false);
    }, 1000); // Simulasi loading 1 detik
  }, []);

  return (
    <div className="halaman-kategori">
      <div className="kategori-page-header">
        <h1>Kategori Produk</h1>
        <p>Pilih kategori untuk melihat produk</p>
      </div>

      {loading ? (
        <div style={{ color: "#1A365D", fontSize: "18px", fontWeight: "bold" }}>
          ⏳ Memuat kategori layanan...
        </div>
      ) : (
        <div className="kategori-page-grid">
          {kategori.map((item) => (
            // Kita pakai class "kategori-card" yang sudah pernah kamu desain!
            <div key={item.id} className="kategori-card">
              <div className="kategori-icon">{item.ikon}</div>
              <h3 className="kategori-title">{item.judul}</h3>
              <p className="kategori-desc">{item.deskripsi}</p>
              <span className="kategori-badge">{item.jumlah}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default HalamanKategori;