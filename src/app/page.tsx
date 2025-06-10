import Navbar from "@/app/components/navbar/Navbar";
import BlurText from "@/app/components/BlurText";

export default function Home() {
  return (
    <>
      <div
        className="relative w-full min-h-screen"
        style={{
          backgroundImage: 'url(/SeaBackground.png)', // Fixed: use url() for background images
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <Navbar />
        <div className="mx-auto h-screen grid grid-cols-1 content-center text-left flex-wrap gap-4 pl-24">
          <p className="md:max-w-3xl max-w-md md:text-xl text-lg font-medium mb-2 text-black">
            We've got you
          </p>
          <BlurText
            text="Assure Helpline"
            delay={150}
            animateBy="words"
            direction="top"
            className="xl:text-7xl md:text-5xl text-3xl font-semibold text-black"
          />
          <p className="md:max-w-3xl max-w-md md:text-xl text-lg font-medium mt-2 text-black">
            Aid, Support , Stability, Urgency, Relief, and Empathy
          </p>
        </div>
      </div>


      {/*About*/}
      <div id="about" className="w-full py-16 bg-white text-black flex flex-row items-center justify-center gap-45">
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam elementum
            dignissim augue sit amet facilisis. Integer euismod interdum eros, ut
            interdum sem. Integer enim nibh, porta vitae ex a, finibus pharetra
            ex. Donec quis tincidunt ligula, in pharetra risus. Vestibulum
            porttitor mi et porta malesuada. Fusce placerat blandit erat, ut
            laoreet felis finibus et. Orci varius natoque penatibus et magnis
            dis parturient montes, nascetur ridiculus mus. Nulla pharetra vehicula
            arcu, lobortis commodo tellus. Duis faucibus facilisis malesuada. Nulla
            bibendum nunc et ipsum scelerisque rutrum.
          </p>
        </div>
      </div>
    </>
  );
}
