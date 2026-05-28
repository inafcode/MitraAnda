import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext'; 

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Beranda from './pages/Beranda';
import HalamanProduk from './pages/HalamanProduk';
import HalamanKeranjang from './pages/HalamanKeranjang';
import HalamanKategori from './pages/HalamanKategori';
import HalamanLogin from './pages/HalamanLogin';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
          <Navbar />
          <div style={{ flex: 1 }}>
            <Routes>
              <Route path="/" element={<Beranda />} />
              <Route path="/produk" element={<HalamanProduk />} />
              <Route path="/keranjang" element={<HalamanKeranjang />} />
              <Route path="/kategori" element={<HalamanKategori />} />
              <Route path="/login" element={<HalamanLogin />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;