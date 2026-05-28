import { useCart } from '../context/CartContext'; // 1. IMPORT HOOK GLOBAL
import './HalamanKeranjang.css';

function HalamanKeranjang() {
  // 2. BONGKAR DATA & FUNGSI DARI BRANKAS GLOBAL
  const { keranjang, tambahQty, kurangQty, hapusItem, totalBelanja } = useCart();

  const formatRupiah = (angka: number) => {
    return "Rp " + angka.toLocaleString('id-ID');
  };

  return (
    <div className="halaman-keranjang">
      <h1 className="keranjang-title">Keranjang Belanja</h1>

      <div className="keranjang-layout">
        <div className="cart-list">
          {keranjang.length === 0 && (
            <div style={{ textAlign: "center", padding: "40px", color: "gray" }}>
              Keranjang Anda masih kosong.
            </div>
          )}

          {keranjang.map((item) => (
            <div key={item.id} className="cart-card">
              <img src={item.gambar} alt={item.nama} className="cart-img" />
              <div className="cart-info">
                <div className="cart-info-nama">{item.nama}</div>
                <div className="cart-info-kategori">{item.kategori}</div>
                <div className="cart-info-harga">{formatRupiah(item.harga)}</div>
              </div>

              <div className="cart-actions">
                <div className="qty-control">
                  <button className="btn-qty" onClick={() => kurangQty(item.id)}>—</button>
                  <span className="qty-angka">{item.qty}</span>
                  <button className="btn-qty" onClick={() => tambahQty(item.id)}>+</button>
                </div>
                <button className="btn-hapus" onClick={() => hapusItem(item.id)}>🗑️</button>
              </div>
            </div>
          ))}
        </div>

        <div className="summary-box">
          <h2 className="summary-title">Ringkasan</h2>
          {keranjang.map((item) => (
            <div key={item.id} className="summary-item">
              <span>{item.nama} x{item.qty}</span>
              <span>{formatRupiah(item.harga * item.qty)}</span>
            </div>
          ))}

          <div className="summary-total">
            <span>Total</span>
            {/* 3. PAKAI VARIABEL TOTAL BELANJA GLOBAL */}
            <span>{formatRupiah(totalBelanja)}</span>
          </div>
          <button className="btn-checkout">Checkout</button>
        </div>
      </div>
    </div>
  );
}

export default HalamanKeranjang;