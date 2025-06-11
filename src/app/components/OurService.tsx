"use client";

export default function OurServices() {
  return (
    <div className="flex justify-center items-center flex-col space-y-12 w-full py-16 px-8">
      <h2 className="text-4xl font-bold text-black">Our Services</h2>
      <div className="flex flex-wrap justify-center gap-12">
        {/* Service 1 */}
        <div className="flex flex-col items-center max-w-xs text-center">
          <img
            src="/goat.jpeg"
            alt="Service 1"
            className="w-64 h-40 rounded shadow"
          />
          <p className="mt-2 text-lg font-medium text-black">
            Mental Health Support
          </p>
          <p className="mt-1 text-sm text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque nec.
          </p>
        </div>

        {/* Service 2 */}
        <div className="flex flex-col items-center max-w-xs text-center">
          <img
            src="/goat.jpeg"
            alt="Service 2"
            className="w-64 h-40 rounded shadow"
          />
          <p className="mt-2 text-lg font-medium text-black">
            Emergency Helpline
          </p>
          <p className="mt-1 text-sm text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque nec.
          </p>
        </div>

        {/* Service 3 */}
        <div className="flex flex-col items-center max-w-xs text-center">
          <img
            src="/goat.jpeg"
            alt="Service 3"
            className="w-64 h-40 rounded shadow"
          />
          <p className="mt-2 text-lg font-medium text-black">
            Counseling & Resources
          </p>
          <p className="mt-1 text-sm text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque nec.
          </p>
        </div>
      </div>
    </div>
  );
}
