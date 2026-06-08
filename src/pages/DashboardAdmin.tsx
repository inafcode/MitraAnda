import { useState } from 'react';
import './DashboardAdmin.css';

// Simulasi Database untuk Admin
const dataAwalAdmin = [
  { id: 1, kategori: "ATK", nama: "Pulpen Pilot G-2 0.5mm", harga: 15000, stok: 120 },
  { id: 2, kategori: "ATK", nama: "Buku Tulis 58 Lembar", harga: 5000, stok: 200 },
  { id: 3, kategori: "Fotokopi", nama: "Fotokopi Hitam Putih", harga: 300, stok: 999 },
  { id: 4, kategori: "Foto Formal", nama: "Foto Formal 3x4", harga: 25000, stok: 999 },
];

function DashboardAdmin() {
  const [produkAdmin, setProdukAdmin] = useState(dataAwalAdmin);

  const formatRupiah = (angka: number) => {
    return "Rp " + angka.toLocaleString('id-ID');
  };

  const handleHapus = (id: number, nama: string) => {
    if (window.confirm(`Apakah Anda yakin ingin menghapus ${nama}?`)) {
      setProdukAdmin(produkAdmin.filter(item => item.id !== id));
    }
  };

  return (
    <div className="admin-container">
      
      {/* SIDEBAR KIRI */}
      <div className="admin-sidebar">
        <h3>Menu Admin</h3>
        <ul className="admin-menu">
          <li className="active">📦 Kelola Produk</li>
          <li>🛒 Kelola Pesanan</li>
          <li>🏢 Kelola Instansi</li>
          <li>📊 Laporan Keuangan</li>
        </ul>
      </div>

      {/* KONTEN UTAMA KANAN */}
      <div className="admin-content">
        
        <div className="admin-header">
          <h2>Manajemen Produk</h2>
          <button className="btn-tambah" onClick={() => alert("Fitur Tambah Produk akan membuka form modal!")}>
            + Tambah Produk
          </button>
        </div>

        <div className="admin-card">
          <table className="admin-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Kategori</th>
                <th>Nama Produk</th>
                <th>Harga</th>
                <th>Stok</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody>
              {produkAdmin.map((item) => (
                <tr key={item.id}>
                  <td>#{item.id}</td>
                  <td>{item.kategori}</td>
                  <td style={{ fontWeight: 600 }}>{item.nama}</td>
                  <td>{formatRupiah(item.harga)}</td>
                  <td><span className="badge-stok">{item.stok}</span></td>
                  <td>
                    <div className="action-buttons">
                      <button className="btn-edit" onClick={() => alert(`Edit produk: ${item.nama}`)}>Edit</button>
                      <button className="btn-hapus" onClick={() => handleHapus(item.id, item.nama)}>Hapus</button>
                    </div>
                  </td>
                </tr>
              ))}
              
              {produkAdmin.length === 0 && (
                <tr>
                  <td colSpan={6} style={{ textAlign: "center", padding: "30px", color: "gray" }}>
                    Tidak ada produk di dalam database.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
}

export default DashboardAdmin;