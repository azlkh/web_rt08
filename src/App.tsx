import { NavigationBar } from "./components/NavigationBar";
import { AboutSection } from "./section/AboutSection";
import { ActivitySection } from "./section/ActivitySection";
import { CommitteeSection } from "./section/CommitteeSection";
import { FooterSection } from "./section/FooterSection";
import { GallerySection } from "./section/GalerySection";
import { HeroSection } from "./section/HeroSection";

export function App() {
  return (
    <>
      <NavigationBar />
      <HeroSection />
      <AboutSection />
      <CommitteeSection />
      <ActivitySection />
      <GallerySection />
      <FooterSection />
    </>
  );
}
