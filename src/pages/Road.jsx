import React from "react";
import Logo from "../images/logo.png"; // Replace with actual path
import DashboardIcon from "../images/logo.png"; // Replace with actual path
import HeroPerson from "../images/hero-person.png"; // Replace with actual path
import PathImage from "../images/road.png";
import { IoMdExit } from "react-icons/io";



const App = () => {
  return (
    <div className="font-sans bg-white text-gray-800">
      {/* HERO SECTION */}
      <header className="bg-[#0b77ed] rounded-b-3xl px-5 py-8 pb-16 relative overflow-hidden">
  <div className="max-w-7xl mx-auto">
    <div className="flex flex-wrap justify-between items-start">
      {/* Logo */}
      <div className="flex items-center mb-5">
        <img src={Logo} alt="ProAct Logo" className="h-10 mr-2" />
        <span className="text-white text-2xl font-bold">ProAct</span>
      </div>

      {/* Dashboard Icon */}
      <button className="ml-auto p-2 rounded-full hover:bg-[#0a6bcc]">
        <IoMdExit className="text-3xl" />
      </button>
    </div>

    {/* Hero Content */}
    <div className="flex flex-wrap justify-between items-center mt-6">
      <div className="text-white md:flex-1 md:max-w-2xl">
        <h1 className="text-4xl font-semibold mb-4">Welcome back, Aymane!</h1>
        <p className="text-lg">
          Ready to continue the journey?<br />
          Exciting challenges await! 😎
        </p>
      </div>

      {/* Hero Image */}
      <div className="md:flex-none md:w-72 mt-8 md:mt-0">
        <img src={HeroPerson} alt="Man with Laptop" className="w-full" />
      </div>
    </div>
  </div>
</header>

      {/* PATH SECTION */}
      {/* PATH SECTION */}
<section className="max-w-7xl mx-auto mt-8 px-4">
  <div className="relative w-full h-auto flex justify-center">
    {/* Background Image */}
    <img
      src={PathImage}
      alt="Curve Path"
      className="w-3/4 h-auto max-w-[600px] mx-auto" // Adjust size here
    />
    {/* Labels */}
    <div className="absolute top-0 left-0 w-full h-full">
      <div
        className="absolute bg-white p-2 text-sm rounded shadow-md z-10"
        style={{ top: "4%", left: "3%" }}
      >
        The Deep Dive, The Big Up
      </div>
      <div
        className="absolute bg-white p-2 text-sm rounded shadow-md z-10"
        style={{ top: "3%", left: "65%" }}
      >
        Every End is a Start
      </div>
      <div
        className="absolute bg-white p-2 text-sm rounded shadow-md z-10"
        style={{ top: "16%", left: "23%" }}
      >
        The Grand Launch: Your Moment to Shine
      </div>
      <div
        className="absolute bg-white p-2 text-sm rounded shadow-md z-10"
        style={{ top: "28%", left: "73%" }}
      >
        Money Monie Moo
      </div>
      <div
        className="absolute bg-white p-2 text-sm rounded shadow-md z-10"
        style={{ top: "38%", left: "48%" }}
      >
        Deliver the Perfect Pitch
      </div>
      <div
        className="absolute bg-white p-2 text-sm rounded shadow-md z-10"
        style={{ top: "48%", left: "12%" }}
      >
        Not Deciding is Still a Decision
      </div>
      <div
        className="absolute bg-white p-2 text-sm rounded shadow-md z-10"
        style={{ top: "58%", left: "70%" }}
      >
        Teamwork Makes the Dream Work
      </div>
      <div
        className="absolute bg-white p-2 text-sm rounded shadow-md z-10"
        style={{ top: "67%", left: "35%" }}
      >
        All About Timing
      </div>
      <div
        className="absolute bg-white p-2 text-sm rounded shadow-md z-10"
        style={{ top: "75%", left: "10%" }}
      >
        Face the Real Challenge
      </div>
      <div
        className="absolute bg-white p-2 text-sm rounded shadow-md z-10"
        style={{ top: "85%", left: "68%" }}
      >
        Your First Day as an Entrepreneur
      </div>
    </div>
  </div>
</section>

      <footer className="bg-[#0b77ed] mt-12 rounded-t-3xl text-white px-6 py-10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 text-center">
          {/* ProAct Info */}
          <div>
            <div className="flex items-center justify-center mb-4">
              <img src={Logo} alt="ProAct Logo" className="h-8 mr-2" />
              <span className="text-xl font-bold">ProAct</span>
            </div>
            <p className="mb-4">
              Discover innovative tools and personalized learning experiences
              designed to revolutionize entrepreneurship education. Together,
              let's build the future of business with the power of AI.
            </p>
            <div className="flex justify-center gap-4">
              <a href="#" className="hover:underline">
                Facebook
              </a>
              <a href="#" className="hover:underline">
                LinkedIn
              </a>
              <a href="#" className="hover:underline">
                Pinterest
              </a>
              <a href="#" className="hover:underline">
                Twitter
              </a>
            </div>
          </div>
          {/* Useful Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Useful Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Terms of use
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Refund Policy
                </a>
              </li>
            </ul>
          </div>
          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <p>123 Innovation Street, Casablanca, Morocco</p>
            <p>+1 234 567 8901</p>
            <p>info@proact.com</p>
          </div>
        </div>
        <div className="text-center text-sm text-gray-200 mt-8">
          Copyright 2024 ProAct | Designed By ENSAM Students.
        </div>
      </footer>

    </div>
  );
};

export default App;
