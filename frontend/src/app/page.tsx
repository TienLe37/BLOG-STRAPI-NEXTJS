import AboutSection from '@/component/feature/AboutSection';
import FavoriteDestinations from '@/component/feature/FavoriteDestinations';
import HighlightFeatures from '@/component/feature/HighlightFeatures';
import LatestNews from '@/component/feature/LatestNews';
import Promotions from '@/component/feature/Promotions';
import HeroBanner from '@/component/HeroBanner';

export default function Home() {
  return (
    <div className='min-h-screen '>
      <HeroBanner />
      <AboutSection />
      {/* Thông tin thêm */}
      <HighlightFeatures />
      {/* Thông tin thêm */}
      <Promotions />
      <FavoriteDestinations />
      <LatestNews/>
    </div>
  );
}
