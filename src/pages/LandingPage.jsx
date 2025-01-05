import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PersonLaptop from '../images/hero-person.png';
import Logo from '../images/logo.png';
import {
  saveUserToLocalStorage,
  deleteUserFromLocalStorage,
  getUserFromLocalStorage,
  doesUserExistInLocalStorage,
  updateUserInLocalStorage,
} from '../utils/localStorageUtils';

const LandingPage = () => {
  const navigate = useNavigate();
  useEffect(()=>{
    if(doesUserExistInLocalStorage()){
      navigate('/road');
    }
  },[])
  

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="bg-[#0b77ed] text-white py-12 px-5">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center">
          <div className="flex-1 min-w-[300px]">
            <div className="flex items-center text-2xl font-bold mb-5">
              <img src={Logo} alt="ProAct Logo" className="h-10 mr-2" />
              <span>ProAct</span>
            </div>
            <h1 className="text-4xl font-semibold mb-5 leading-tight">
              Unlock the power of AI to enhance your entrepreneurial journey.
            </h1>
            <p className="text-lg mb-8">
              Real-world entrepreneurship simulations powered by AI
            </p>
            <div className="space-x-4">
              <button 
                onClick={() => navigate('/login')}
                className="bg-white text-[#0b77ed] px-5 py-2 rounded font-semibold hover:bg-gray-100"
              >
                Login
              </button>
              <button 
                onClick={() => navigate('/register')}
                className="bg-[#0b77ed] text-white px-5 py-2 rounded font-semibold border-2 border-white hover:bg-[#0a6ad6]"
              >
                Register
              </button>
            </div>
          </div>
          <div className="flex-1 min-w-[300px] flex justify-end mt-8 lg:mt-0"
          style={{"width": "30%", "transform": "translateY(21%)"}}>
            <img 
              src={PersonLaptop} 
              alt="Person holding a laptop" 
              className="max-w-[300px] w-full"
            />
          </div>
        </div>
      </header>

      {/* Stats Section */}
      <section className="bg-gray-50 py-8">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-around">
          {[
            { number: "78%", label: "Advancement" },
            { number: "100+", label: "Student" },
            { number: "Live", label: "Interactive Sessions" }
          ].map((stat, index) => (
            <div key={index} className="flex-1 min-w-[200px] text-center m-4">
              <h3 className="text-3xl font-semibold text-[#0b77ed] mb-1">{stat.number}</h3>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 px-5">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-10">
            WHAT WE OFFER<br />ABOUT US
          </h2>
          <div className="flex flex-wrap justify-center gap-8">
            {[
              {
                title: "Real-World Scenario Simulations",
                description: "Our platform offers immersive, interactive environments that simulate entrepreneurial challenges."
              },
              {
                title: "Customized Educational Support",
                description: "We tailor educational content to individual needs, ensuring students receive the guidance necessary."
              },
              {
                title: "Innovative AI-Powered Learning Tools",
                description: "We provide cutting-edge AI solutions designed to revolutionize entrepreneurial education."
              }
            ].map((card, index) => (
              <div key={index} className="flex-1 min-w-[250px] max-w-[300px] p-6 border border-gray-200 rounded-lg">
                <div className="text-4xl text-[#0b77ed] mb-5">⧗</div>
                <h3 className="text-xl font-semibold mb-4">{card.title}</h3>
                <p className="text-gray-600">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0b77ed] text-white py-10 px-5">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center text-2xl font-bold mb-5">
              <img src={Logo} alt="ProAct Logo" className="h-10 mr-2" />
              <span>ProAct</span>
            </div>
            <p className="mb-4">Discover innovative tools and personalized learning experiences designed to revolutionize entrepreneurship education.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Useful Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
              <li><a href="#" className="hover:underline">Terms of use</a></li>
              <li><a href="#" className="hover:underline">Refund Policy</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <p className="mb-2">123 Innovation Street, Casablanca, Morocco</p>
            <p className="mb-2">+1 234 567 8901</p>
            <p>info@proact.com</p>
          </div>
        </div>
        <div className="text-center mt-8 text-sm text-gray-200">
          Copyright 2024 ProAct | Designed by ENSAM Students.
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;