import { useState, useEffect } from 'react';

// 1. Buat cetakan tipe data TypeScript agar sejajar dengan database Prisma-mu
interface Produk {
  id: number;
  kategori: string;
  nama: string;
  harga: number;
  stok: number;
  isUnlimited: boolean;
  gambar: string | null;
}

function HalamanProduk() {
  // 2. Siapkan wadah (state) kosong untuk menampung data dari Backend
  const [daftarProduk, setDaftarProduk] = useState<Produk[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // 3. Gunakan useEffect untuk "menelepon" API saat halaman pertama kali dibuka
  useEffect(() => {
    const ambilDataDariServer = async () => {
      try {
        // Menelepon Pintu API yang baru saja kamu buat!
        const response = await fetch('http://localhost:3000/api/produk');
        const dataAsli = await response.json();
        
        // Memasukkan data asli ke dalam wadah React
        setDaftarProduk(dataAsli);
      } catch (error) {
        console.error("Gagal mengambil data dari server:", error);
      } finally {
        setLoading(false); // Matikan efek loading
      }
    };

    ambilDataDariServer();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Katalog Produk Mitra Anda</h2>
      
      {/* 4. Tampilkan tulisan Loading jika data masih dalam perjalanan */}
      {loading ? (
        <p>Memuat produk dari brankas server... ⏳</p>
      ) : (
        <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
          
          {/* 5. Tampilkan data aslinya ke layar! */}
          {daftarProduk.map((produk) => (
            <div key={produk.id} style={{ border: "1px solid #ccc", padding: "15px", borderRadius: "8px" }}>
              <h3>{produk.nama}</h3>
              <p>Kategori: {produk.kategori}</p>
              <p>Harga: Rp {produk.harga.toLocaleString('id-ID')}</p>
              <p>Stok: {produk.isUnlimited ? (
                  <span style={{ color: "green", fontWeight: "bold" }}>∞ Unlimited (Jasa)</span>
                ) : (
                  produk.stok
                )}
              </p>
              <button style={{ padding: "8px 12px", cursor: "pointer" }}>
                + Keranjang
              </button>
            </div>
          ))}

        </div>
      )}
    </div>
  );
}

export default HalamanProduk;