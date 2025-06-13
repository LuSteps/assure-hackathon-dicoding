import React from "react";
import Navbar from "../../navbar/Navbar";
import BlurText from "../../BlurText";

export default function HeroSection() {
  return (
    <div className="relative w-full min-h-screen bg-[url(/SeaBackground.svg)] bg-cover bg-center">
      <Navbar />

      <div className="mx-auto h-screen grid grid-cols-1 content-center text-left flex-wrap gap-4 px-8 lg:px-24">
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
        <div className="w-fit bg-white/50 rounded-lg">
          <p className="md:max-w-3xl max-w-md md:text-2xl text-lg text-[#5A6353] m-5">
            <span className="font-black">A</span>id,{" "}
            <span className="font-black">S</span>upport,{" "}
            <span className="font-black">S</span>tability,{" "}
            <span className="font-black">U</span>rgency,{" "}
            <span className="font-black">R</span>elief, and{" "}
            <span className="font-black">E</span>mpathy
          </p>
        </div>
      </div>
    </div>
  );
}
