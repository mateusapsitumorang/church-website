import Hero from "../components/Hero";
import PastorLetter from "../components/PastorLetter";
import MilestoneUpdate from "../components/MilestoneUpdate";
import DonationSection from "../components/DonationSection";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <PastorLetter />
      <MilestoneUpdate />
      <DonationSection />
    </main>
  );
}
