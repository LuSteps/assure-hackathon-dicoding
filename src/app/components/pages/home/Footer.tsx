import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#74846A]">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="/" className="flex items-center">
              <img src="./Logo.png" className="h-1/6 md:h-1/2 w-1/6 md:w-1/2 me-3" alt="Logo" />
            </a>
          </div>
        </div>

        <hr className="my-6 sm:mx-auto lg:my-8" />

        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm sm:text-center">
            © {currentYear}{" "}
            <a href="/" className="hover:underline">
              ASSURE Helpline
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
