import { useState, useEffect } from 'react'; // IMPORT HOOKS DARI REACT!
import './KategoriLayanan.css';

// 1. Ini kita anggap sebagai "Database" di server yang diisi oleh Admin.
// (Nanti di dunia nyata, ini diganti dengan link URL API sesungguhnya).
const databaseAdmin = [
  { id: 1, ikon: "🖊️", judul: "Alat Tulis Kantor", deskripsi: "Pulpen, buku, kertas, dll", jumlah: "5 produk" },
  { id: 2, ikon: "🖨️", judul: "Fotokopi & Jilid", deskripsi: "Hitam putih, warna, jilid", jumlah: "3 produk" },
  { id: 3, ikon: "📸", judul: "Cetak Foto", deskripsi: "Berbagai ukuran kualitas terbaik", jumlah: "2 produk" },
  { id: 4, ikon: "📄", judul: "Foto Formal", deskripsi: "Keperluan dokumen resmi", jumlah: "2 produk" }
];

function KategoriLayanan() {
  // 2. Brankas kosong (State) untuk menyimpan data yang nanti datang dari server
  const [kategori, setKategori] = useState<any[]>([]);
  
  // Brankas untuk mengatur animasi Loading (Awalnya true/menyala)
  const [loading, setLoading] = useState(true);

  // 3. useEffect: Mesin penjawab otomatis!
  // Berjalan HANYA SATU KALI saat komponen pertama kali muncul di layar.
  useEffect(() => {
    // Kita gunakan setTimeout untuk MENSIMULASIKAN delay internet selama 2 detik
    setTimeout(() => {
      setKategori(databaseAdmin); // Memasukkan data dari server ke brankas
      setLoading(false); // Mematikan status loading
    }, 2000);
  }, []); // <-- Array kosong di ujung ini sangat penting! Artinya "Jalankan sekali saja".

  return (
    <section className="kategori-section">
      <div className="kategori-header">
        <h2>Kategori Layanan</h2>
        <p>Temukan apa yang Anda butuhkan</p>
      </div>

      {/* 4. Logika Tampilan Berdasarkan Status Loading */}
      {loading ? (
        // JIKA LOADING TRUE: Tampilkan teks ini
        <p style={{ color: "#F59E0B", fontWeight: "bold", fontSize: "18px" }}>
          ⏳ Memuat data dari server Admin...
        </p>
      ) : (
        // JIKA LOADING FALSE: Tampilkan Grid seperti biasa
        <div className="kategori-grid">
          {kategori.map((item) => (
            <div key={item.id} className="kategori-card">
              <div className="kategori-icon">{item.ikon}</div>
              <h3 className="kategori-title">{item.judul}</h3>
              <p className="kategori-desc">{item.deskripsi}</p>
              <span className="kategori-badge">{item.jumlah}</span>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default KategoriLayanan;