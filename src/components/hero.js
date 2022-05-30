import React from "react";
import Brain from "../images/brain.jpg";

function Hero() {
 return (
    <div>
    {/* Hero card */}
    <div className="relative mt-10">
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" />
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div className="relative shadow-xl sm:rounded-2xl sm:overflow-hidden">
          <div className="absolute inset-0">
            <img
              className="h-full w-full object-cover"
              src={Brain}
              alt="Brain"
            />
            <div className="absolute inset-0 bg-blue-500 mix-blend-multiply" />
          </div>
          <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
            <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              <span className="block text-white">Cryptococcal Meningitis</span>
              <span className="block text-indigo-200">Repository</span>
            </h1>
            <p className="mt-6 max-w-lg mx-auto text-center text-xl text-white sm:max-w-3xl">
              A central source of information on the epidemiology, diagnosis, and treatment of Cryptococcal meningitis.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
 )
}

export default Hero;