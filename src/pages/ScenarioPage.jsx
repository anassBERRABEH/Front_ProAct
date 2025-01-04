import React from "react";
import Logo from "../images/logo.png";
import Confused from "../images/confused.png";
import { IoMdExit } from "react-icons/io";

const ScenarioPage = () => {
  return (
    <div className="min-h-screen bg-[#E9EEF5]">
      {/* Header Section */}
      <header className="bg-[#0b77ed] text-white rounded-b-3xl px-6 py-10 relative">
        <div className="max-w-7xl mx-auto">
          {/* Logo Section */}
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center">
              <img src={Logo} alt="ProAct Logo" className="h-10 mr-2" />
              <span className="text-2xl font-bold">ProAct</span>
            </div>
            <button className="p-2 rounded-full hover:bg-[#0a6bcc]">
              <IoMdExit className="text-3xl" />
            </button>
          </div>

          {/* Main Content */}
          <div className="text-center">
            <h2 className="text-3xl font-semibold mb-6">
              Not Deciding is Still a Decision
            </h2>
            <div className="max-w-3xl mx-auto text-black bg-white rounded-lg p-6 shadow-lg">
              <p className="mb-4">
                <strong>Situation:</strong>
                <br />
                You’ve just launched your startup and things are going well.
                However, to scale up quickly, you need more funding. An investor
                has approached you with an offer. They propose a large sum of
                money, but they want a significant share of your company in
                return. You’ve heard stories of entrepreneurs who regretted
                giving up too much control, but the investment could propel your
                startup to the next level.
              </p>
              <p className="mb-4">
                <strong>Challenge:</strong>
                <br />
                You can either accept the offer and give away a portion of your
                business, or delay the decision in hopes of finding a better
                offer. But delaying means you risk losing the investor's
                interest, and your startup might not grow as fast without the
                funding.
              </p>
              <p className="mb-6">
                <strong>Text Box for Answer:</strong>
                <br />
                What would you do in this situation? Would you take the
                investment and give away part of your company, or would you wait
                for a better opportunity? How do you evaluate the long-term
                impact of waiting versus acting quickly?
              </p>
            </div>

            {/* Illustration */}
            <div className="mt-8 flex justify-center">
              <img
                src={Confused}
                alt="Man standing at signpost"
                className="w-60 md:w-80 lg:w-96 mx-auto"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Answer Section */}
      <section className="max-w-7xl mx-auto px-6 mt-16">
        <div className="bg-white rounded-lg p-6 shadow-lg">
          <div className="max-w-3xl mx-auto">
            <textarea
              className="w-full h-32 border border-gray-300 rounded-lg p-4 mb-4"
              placeholder="Write your answer here ....."
            />
            <button className="w-full bg-[#0b77ed] text-white px-8 py-3 rounded-full hover:bg-blue-600">
              Submit
            </button>
          </div>
        </div>
      </section>

      {/* Callout Section */}
      <div className="max-w-7xl mx-auto px-6 mt-6">
        <div className="bg-[#fff9c4] rounded-lg p-4 flex justify-between items-center">
          <span>Callout text</span>
          <button className="text-xl font-bold">×</button>
        </div>
      </div>

      {/* Footer Section */}
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

export default ScenarioPage;
