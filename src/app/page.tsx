import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import SimpleInspiring from "@/components/sections/SimpleInspiring";
import Services from "@/components/sections/Services";
import StudioGallery from "@/components/sections/StudioGallery";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <Hero />
        <SimpleInspiring />
        <Services />
        <StudioGallery />
      </main>
      <Footer />
    </>
  );
}
