import Footer from "@/app/components/Footer";
import Hero from "@/app/components/Hero";
import HowItWorks from "@/app/components/HowItWorks";
import ProudlyOpenSource from "@/app/components/ProudlyOpenSource";
import Image from "next/image";
import Header from "./components/Header";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <HowItWorks />
      <ProudlyOpenSource />
      <Footer />
    </main>
  );
}
