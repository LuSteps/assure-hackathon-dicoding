import BlurText from "@/app/components/BlurText";
import Navbar from "./components/navbar/Navbar";
import { Cabin } from "next/font/google";
// import { cabinFont } from "@/fonts/fonts";
// import RotatingText from "./components/RotatingText";
import OurServices from "@/app/components/OurService";
import ContactForm from "@/app/components/ContactForm";

export default function Home() {
  return (
    <>
      <div
        className="relative w-full min-h-screen"
        style={{
          backgroundImage: "url(/SeaBackground.svg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Navbar />
        
        <div className="mx-auto h-screen grid grid-cols-1 content-center text-left flex-wrap gap-4 pl-24">
          <div>
            <p
              className={`md:max-w-3xl max-w-md md:text-xl text-lg mb-2 uppercase text-[#5A6353]`}
            >
              We've got you
            </p>

            <BlurText
              text="ASSURE Helpline"
              delay={150}
              animateBy="words"
              direction="top"
              className="xl:text-7xl md:text-5xl text-3xl font-bold text-black"
            />
          </div>

          {/* <RotatingText
            texts={[
              "Aid",
              "Support",
              "Stability",
              "Urgency",
              "Relief",
              "Empathy",
            ]}
            mainClassName="px-2 sm:px-2 md:px-3 bg-[#74846A] text-white overflow-hidden text-2xl font-semibold py-0.5 sm:py-1 md:py-2 justify-center rounded-lg w-fit transition"
            staggerFrom={"last"}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-120%" }}
            staggerDuration={0.025}
            splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            rotationInterval={4000}
          /> */}
        </div>
      </div>

      {/*About*/}
      <div
        id="about"
        className="w-full py-16 bg-white text-black flex flex-row items-center justify-center gap-45"
      >
        <div className="flex-shrink-0 p-10">
          <img
            src="/goat.jpeg"
            alt="About section image"
            className="w-128 h-64 object-contain rounded-xl shadow"
          />
        </div>
        <div className="flex flex-col items-start pr-24">
          <h2 className="text-4xl font-bold mb-2">Life's Fun, not nuF!</h2>
          <p className="text-lg bg-gray-100 rounded-lg p-4 max-w-md shadow text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
            elementum dignissim augue sit amet facilisis. Integer euismod
            interdum eros, ut interdum sem. Integer enim nibh, porta vitae ex a,
            finibus pharetra ex. Donec quis tincidunt ligula, in pharetra risus.
            Vestibulum porttitor mi et porta malesuada. Fusce placerat blandit
            erat, ut laoreet felis finibus et. Orci varius natoque penatibus et
            magnis dis parturient montes, nascetur ridiculus mus. Nulla pharetra
            vehicula arcu, lobortis commodo tellus. Duis faucibus facilisis
            malesuada. Nulla bibendum nunc et ipsum scelerisque rutrum.
          </p>
        </div>
      </div>

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

    </>
  );
}
