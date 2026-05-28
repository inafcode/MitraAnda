import HeroSection from '../components/HeroSection';
import KategoriLayanan from '../components/KategoriLayanan';
import ProdukPopuler from '../components/ProdukPopuler';
import BannerInstansi from '../components/BannerInstansi';

function Beranda() {
  return (
    <div>
      <HeroSection />
      <KategoriLayanan />
      <ProdukPopuler />
      <BannerInstansi />
    </div>
  );
}

export default Beranda;