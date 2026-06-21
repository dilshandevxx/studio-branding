import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Headline from "@/components/sections/Headline";
import Hero from "@/components/sections/Hero";
import WhoWeAre from "@/components/sections/WhoWeAre";
import SimpleInspiring from "@/components/sections/SimpleInspiring";
import Works from "@/components/sections/Works";
import Services from "@/components/sections/Services";
import StartSmart from "@/components/sections/StartSmart";
import StudioGallery from "@/components/sections/StudioGallery";

export default function Home() {
  return (
    <>
      <main className="min-h-screen">
        <Hero />
        <WhoWeAre />
        <SimpleInspiring />
        <Works />
        <Services />
        <StartSmart />
        <StudioGallery />
        <Headline />
      </main>
      <Footer />
    </>
  );
}
