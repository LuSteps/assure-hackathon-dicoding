import OurServices from "@/app/components/OurService";
import ContactForm from "@/app/components/ContactForm";
import HeroSection from "./components/pages/home/HeroSection";
import AboutSection from "./components/pages/home/AboutSection";
import ChatbotSection from "./components/pages/home/ChatbotSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      
      <div
        className="w-full py-16"
        style={{
          background: "linear-gradient(to bottom, #FFFFFF 20%, #AAC1B1 80%)",
        }}
      >
        {/* Our Services Section */}
        <OurServices />

        {/* Contact Form Section */}
        <div className="mt-16">
          <ContactForm />
        </div>
      </div>
      
      <ChatbotSection />
    </>
  );
}
