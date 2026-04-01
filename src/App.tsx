import { NavigationBar } from "./components/NavigationBar";
import { AboutSection } from "./section/AboutSection";
import { HeroSection } from "./section/HeroSection";

export function App() {
  return (
    <>
      <NavigationBar />
      <HeroSection />
      <AboutSection />
    </>
  );
}
