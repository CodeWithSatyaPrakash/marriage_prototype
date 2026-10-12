import HeroSection from './components/HeroSection';
import LoveStorySection from './components/LoveStorySection';
import InvitationSection from './components/InvitationSection';
import WeddingEventsSection from './components/WeddingEventsSection';
import VenueSection from './components/VenueSection';
import RSVPSection from './components/RSVPSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#4A3728] overflow-x-hidden">
      <HeroSection />
      <LoveStorySection />
      <InvitationSection />
      <WeddingEventsSection />
      <VenueSection />
      <RSVPSection />
      <Footer />
    </div>
  );
}
