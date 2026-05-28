import { createContext, useContext, useState, type ReactNode } from 'react';

// 1. Tentukan bentuk cetak biru data di dalam brankas
interface CartItem {
  id: number;
  nama: string;
  kategori: string;
  harga: number;
  qty: number;
  gambar: string;
}

interface CartContextType {
  keranjang: CartItem[];
  tambahQty: (id: number) => void;
  kurangQty: (id: number) => void;
  hapusItem: (id: number) => void;
  totalBarang: number;
  totalBelanja: number;
}

// 2. Buat objek Context asli
const CartContext = createContext<CartContextType | undefined>(undefined);

// 3. Buat Provider (Komponen yang akan menjaga dan menyebarkan data)
export function CartProvider({ children }: { children: ReactNode }) {
  // Pindahkan data awal keranjang dari HalamanKeranjang ke sini agar menjadi global
  const [keranjang, setKeranjang] = useState<CartItem[]>([
    { id: 1, nama: "Pulpen Pilot G-2 0.5mm", kategori: "ATK", harga: 15000, qty: 2, gambar: "https://placehold.co/100x100/7DA5A5/FFF?text=Pen" },
    { id: 2, nama: "Kertas HVS A4 70gsm (1 rim)", kategori: "ATK", harga: 45000, qty: 1, gambar: "https://placehold.co/100x100/F0F0F0/333?text=HVS" },
    { id: 3, nama: "Foto Formal 3x4 (6 lembar)", kategori: "Foto Formal", harga: 25000, qty: 3, gambar: "https://placehold.co/100x100/CBD5E1/1A3?text=Foto" }
  ]);

  // Logika matematika penambah jumlah
  const tambahQty = (id: number) => {
    setKeranjang(keranjang.map(item => item.id === id ? { ...item, qty: item.qty + 1 } : item));
  };

  // Logika matematika pengurang jumlah
  const kurangQty = (id: number) => {
    setKeranjang(keranjang.map(item => item.id === id && item.qty > 1 ? { ...item, qty: item.qty - 1 } : item));
  };

  // Logika penghapus barang
  const hapusItem = (id: number) => {
    setKeranjang(keranjang.filter(item => item.id !== id));
  };

  // Rumus otomatis: Menghitung jumlah total PCS barang di keranjang untuk angka di Navbar
  const totalBarang = keranjang.reduce((sum, item) => sum + item.qty, 0);

  // Rumus otomatis: Menghitung total harga belanja keseluruhan
  const totalBelanja = keranjang.reduce((sum, item) => sum + (item.harga * item.qty), 0);

  return (
    <CartContext.Provider value={{ keranjang, tambahQty, kurangQty, hapusItem, totalBarang, totalBelanja }}>
      {children}
    </CartContext.Provider>
  );
}

// 4. Kunci Rahasia: Custom Hook agar halaman lain tinggal panggil dengan satu baris kode
export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart harus digunakan di dalam CartProvider');
  }
  return context;
}