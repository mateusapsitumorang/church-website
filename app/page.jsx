import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import PastorLetter from "../components/PastorLetter";
import MilestoneUpdate from "../components/MilestoneUpdate";
import Gallery from "../components/Gallery";
import DonationSection from "../components/DonationSection";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <PastorLetter />
        <MilestoneUpdate />
        <Gallery />
        <DonationSection />
      </main>
      <Footer />
    </>
  );
}
