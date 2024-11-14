import CategoryNavbar from "@/components/CategoryNavbar/CategoryNavbar";
import FaqAccordian from "@/components/FaqAccordian/FaqAccordian";
import HeroSection from "@/components/HeroSection/HeroSection";
import InformationCards from "@/components/InformationCards/InformationCards";
import InformationGrid from "@/components/InformationGrid/InformationGrid";
import Navbar from "@/components/Navbar/Navbar";
import OurInfluencerGrid from "@/components/OurInfluencerGrid/OurInfluencerGrid";
import TravelSection from "@/components/TravelSection/TravelSection";

export default function Home() {
  return (
    <div className="px-28 py-8 max-1.5xl:px-16 max-lg:px-14 max-lg:py-6 max-md:px-6 max-sm:px-4 max-xs:px-3 overflow-x-hidden">
    <Navbar/>
    <HeroSection/>
    <CategoryNavbar/>
    <TravelSection/>
    <InformationGrid/>
    <OurInfluencerGrid/>
    <InformationCards/>
    <FaqAccordian/>
    </div>
  );
}
