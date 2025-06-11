import React from "react";

export default function AboutSection() {
  return (
    <div
      id="about"
      className="w-full py-16 bg-white text-black grid grid-cols-1 lg:grid-cols-2 gap-12 px-16"
    >
      <div className="flex-shrink-0 mx-auto">
        <img
          src="/goat.jpeg"
          alt="About section image"
          className="w-md lg:w-xl object-contain rounded-xl shadow"
        />
      </div>
      <div className="flex flex-col items-start mx-auto">
        <h2 className="text-4xl font-bold mb-2">Life's Fun, not nuF!</h2>
        <p className="text-sm lg:text-lg bg-gray-100 rounded-lg p-4 max-w-lg shadow text-justify">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam elementum
          dignissim augue sit amet facilisis. Integer euismod interdum eros, ut
          interdum sem. Integer enim nibh, porta vitae ex a, finibus pharetra
          ex. Donec quis tincidunt ligula, in pharetra risus. Vestibulum
          porttitor mi et porta malesuada. Fusce placerat blandit erat, ut
          laoreet felis finibus et. Orci varius natoque penatibus et magnis dis
          parturient montes, nascetur ridiculus mus. Nulla pharetra vehicula
          arcu, lobortis commodo tellus. Duis faucibus facilisis malesuada.
          Nulla bibendum nunc et ipsum scelerisque rutrum.
        </p>
      </div>
    </div>
  );
}
