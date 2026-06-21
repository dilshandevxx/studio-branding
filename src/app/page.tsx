import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Headline from "@/components/sections/Headline";
import Hero from "@/components/sections/Hero";
import SimpleInspiring from "@/components/sections/SimpleInspiring";
import Works from "@/components/sections/Works";
import Services from "@/components/sections/Services";
import StartSmart from "@/components/sections/StartSmart";
import StudioGallery from "@/components/sections/StudioGallery";
import News from "@/components/sections/News";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <Hero />
        <SimpleInspiring />
        <Works />
        <Services />
        <StartSmart />
        <StudioGallery />
        <News />
        <Headline />
      </main>
      <Footer />
    </>
  );
}
