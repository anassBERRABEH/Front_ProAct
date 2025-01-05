import React, { useEffect, useState } from "react";
import Logo from "../images/logo.png";
import Confused from "../images/confused.png";
import { IoMdExit } from "react-icons/io";
import { useParams } from 'react-router-dom';
import axios from 'axios';


  const ScenarioPage = ({ level }) => {


 let user = {
  id : 1,
  level: 1,
  //to do
 }

  
  let data = level.problem.split("\n");
  const [tip, setTip] = useState(null);
  const [answer, setAnswer] = useState("");
  const [passed, setPassed] = useState(false);

  useEffect(()=>{
    //to do
  }, []);


  const handleChange = (e) => {
    setAnswer(e.target.value);
  };




  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    

    try {
      const dataLevel = {
        level_id: level.id,
        answer: answer
      };
      const response = await axios.post("http://127.0.0.1:5000/submit_level", dataLevel, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      const chat_data = response.data;

      if ( !chat_data.true)
      {
          setTip(chat_data.tip);
      }
      else
      {
        if(user.level <= level.id )
        { 
          const response = await axios.post(`http://127.0.0.1:5000//user/${user.id}/increment-level`, dataLevel, {
            headers: {
              "Content-Type": "application/json",
            },
          });
      }

        setPassed(true);
        setTip("You have sucssefully passed the level, keep grinding");
  
      }

     
    } catch (err) {
      console.log("error");
      
    }
  };
  
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
            {level.title}
            </h2>
            <div className="max-w-3xl mx-auto text-black bg-white rounded-lg p-6 shadow-lg">
                 


            <p className="mb-4">
                <strong>Situation:</strong>
                <br />
                {data[2]}
              </p>
              <p className="mb-4">
                <strong>Challenge:</strong>
                <br />
                {data[5]}
              </p>
              <p className="mb-6">
                <strong>Text Box for Answer:</strong>
                <br />
                {data[8]}
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
              value={answer}
              onChange={handleChange}
            />
            {passed?"": (<button onClick={handleSubmit} className="w-full bg-[#0b77ed] text-white px-8 py-3 rounded-full hover:bg-blue-600">
              Submit
            </button>)}
          </div>
        </div>
      </section>

      {/* Callout Section */}

      {tip?(<div className="max-w-7xl mx-auto px-6 mt-6">
        <div className={`${passed? 'bg-[#847917]' : 'bg-[#fff9c4]'} rounded-lg p-4 flex justify-between items-center`}>
          <span>{tip}</span>
          <button className="text-xl font-bold" onClick={()=>{setTip(null)}}>×</button>
        </div>
      </div>):""}

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
