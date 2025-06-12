import React from "react";

export default function AboutSection() {
  return (
    <div
      id="about"
      className="w-full py-16 bg-white text-black grid grid-cols-1 lg:grid-cols-2 gap-12 px-16"
    >
      <div className="flex-shrink-0 mx-auto">
        <img
          src="/image-1.jpg"
          alt="About section image"
          className="w-md lg:w-xl object-contain rounded-xl shadow"
        />
      </div>
      <div className="flex flex-col items-start mx-auto">
        <span className="text-2xl mb-2">Your Pain is Valid. <b className="text-[#74846A]">Your Hope Matters.</b></span>
        <p className="text-sm lg:text-lg bg-gray-100 rounded-lg p-4 max-w-lg shadow text-justify">
          Every struggle deserves to be heard—no pain is too small, no burden too heavy to share. Backed by evidence-based practices and a network of trained volunteers, we offer a judgment-free space where healing begins with a single conversation.
          <br /><br />
          Our platform provides immediate support through AI-assisted counseling and psychological first aid resources. If you're passionate about mental health advocacy, join our volunteer community to help create life-changing connections.
        </p>
      </div>
    </div>
  );
}
