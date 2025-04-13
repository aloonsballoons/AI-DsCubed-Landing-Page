
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import About from "@/components/About";

export default function Page() {
  return (
    <main className="scroll-smooth">
      <Navbar />
      
      <section id="hero">
        <Hero />
      </section>
      
      

      <section id="about">
        <Navbar />
        <About />
      </section>
      
      {/* 

      <section id="doing">
        <doing />
      </section>

      <section id="contact">
        <contact />
      </section> */}
    </main>
  );
}

