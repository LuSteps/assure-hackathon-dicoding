import OurServices from "@/app/components/OurService";
import ContactForm from "@/app/components/ContactForm";
import HeroSection from "./components/pages/home/HeroSection";
import AboutSection from "./components/pages/home/AboutSection";
import ChatbotSection from "./components/pages/home/ChatbotSection";
import Footer from "./components/pages/home/Footer";

export default function Home() {
  return (
    <>
      <HeroSection />
      <div id="about-section">
        <AboutSection />
      </div>

      
      <div
        className="w-full py-16"
        style={{
          background: "linear-gradient(to bottom, #FFFFFF 20%, #AAC1B1 80%)",
        }}
      >
        
        <OurServices />

        <div className="mt-16" id="contact-form">
          <ContactForm />
        </div>
      </div>
      
      <ChatbotSection />
      <div id="footer">
        <Footer />
      </div>
    </>
  );
}
