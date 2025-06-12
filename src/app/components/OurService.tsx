"use client";

export default function OurServices() {
  return (
    <div className="flex justify-center items-center flex-col space-y-12 w-full py-16 px-8">
      <h2 className="text-4xl font-bold text-black">Our Services</h2>
      <div className="flex flex-wrap justify-center gap-12">
        {/* Service 1 */}
        <div className="flex flex-col items-center max-w-xs text-center">
          <img
            src="/image-2.jpg"
            alt="Service 1"
            className="w-64 h-40 rounded shadow"
          />
          <p className="mt-2 text-lg font-medium text-black">
            Mental Health Support
          </p>
          <p className="mt-1 text-sm text-justify text-gray-700">
            We provide compassionate, judgment-free support for anyone struggling with emotional distress. Our team of trained volunteers offers active listening and evidence-based psychological first aid to help you navigate difficult moments. Whether you're dealing with anxiety, depression, or just need someone to talk to, we're here 24/7.
          </p>
        </div>

        {/* Service 2 */}
        <div className="flex flex-col items-center max-w-xs text-center">
          <img
            src="/image-3.jpg"
            alt="Service 2"
            className="w-64 h-40 rounded shadow"
          />
          <p className="mt-2 text-lg font-medium text-black">
            Emergency Helpline
          </p>
          <p className="mt-1 text-sm text-justify  text-gray-700">
            Immediate support for crisis situations, including suicidal thoughts or emotional emergencies. Our first responders are specially trained in crisis intervention and will stay with you until you feel safe. All conversations are confidential, and we can connect you with local resources if needed. You're not alone - help is just one call or message away.
          </p>
        </div>

        {/* Service 3 */}
        <div className="flex flex-col items-center max-w-xs text-center">
          <img
            src="/image-4.jpg"
            alt="Service 3"
            className="w-64 h-40 rounded shadow"
          />
          <p className="mt-2 text-lg font-medium text-black">
            Counseling & Resources
          </p>
          <p className="mt-1 text-sm text-justify text-gray-700">
            Access to free counseling sessions with licensed professionals and a comprehensive library of self-help tools. We offer guided meditation exercises, coping strategies, and connections to long-term mental health services in your area. Our resources are carefully curated to support your journey toward healing and resilience.
          </p>
        </div>
      </div>
    </div>
  );
}
