import { useState } from 'react';
import './HalamanLogin.css';

function HalamanLogin() {
  // Brankas State untuk menentukan tab mana yang aktif ('umum' atau 'instansi')
  const [tabAktif, setTabAktif] = useState('umum');

  return (
    <div className="login-container">
      <div className="login-card">
        
        {/* Sisi Kiri: Branding */}
        <div className="login-left">
          <h2><span>🖨️</span> Mitra Anda</h2>
          <p>
            Masuk ke akun Anda untuk mulai memesan kebutuhan ATK, fotokopi, 
            dan cetak foto dengan mudah dan cepat.
          </p>
        </div>

        {/* Sisi Kanan: Formulir */}
        <div className="login-right">
          <div className="login-header">
            <h3>Selamat Datang Kembali</h3>
            <p style={{ color: '#6B7280', fontSize: '14px', marginTop: '5px' }}>
              Silakan masukkan detail akun Anda
            </p>
          </div>

          {/* Area Tab Switcher */}
          <div className="login-tabs">
            <button 
              className={`tab-btn ${tabAktif === 'umum' ? 'active' : ''}`}
              onClick={() => setTabAktif('umum')}
            >
              Pengguna Umum
            </button>
            <button 
              className={`tab-btn ${tabAktif === 'instansi' ? 'active' : ''}`}
              onClick={() => setTabAktif('instansi')}
            >
              Portal Instansi
            </button>
          </div>

          {/* Area Formulir Dinamis */}
          <form>
            <div className="form-group">
              <label>Email</label>
              <input type="email" className="form-input" placeholder="contoh@email.com" />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input type="password" className="form-input" placeholder="••••••••" />
            </div>

            {/* Jika tab instansi yang dipilih, munculkan kolom tambahan ini! */}
            {tabAktif === 'instansi' && (
              <div className="form-group">
                <label>Kode Bon Instansi</label>
                <input type="text" className="form-input" placeholder="Masukkan kode instansi Anda" />
              </div>
            )}

            <button type="button" className="btn-submit">Masuk Sekarang</button>
          </form>

          <p style={{ textAlign: 'center', marginTop: '20px', fontSize: '14px', color: '#6B7280' }}>
            Belum punya akun? <a href="#" style={{ color: '#1A365D', fontWeight: 'bold', textDecoration: 'none' }}>Daftar di sini</a>
          </p>

        </div>
      </div>
    </div>
  );
}

export default HalamanLogin;