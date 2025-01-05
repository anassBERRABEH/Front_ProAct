import { useState } from 'react';
import axios from 'axios';
import portfeuille from '../images/Other 03.png';
import { useNavigate } from "react-router-dom"; // Import useNavigate





const LoginPage = () => {
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleRegisterClick = () => {
    navigate("/register");
  };
  
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    setError("");
    setSuccess(false);

    try {
      // Make the login request to your backend
      const response = await axios.post("http://127.0.0.1:5000/login", credentials, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log(response.data); // Handle the successful response
      setSuccess(true); // Indicate success

      if (response.data.valid) {
        navigate("/road"); // Redirect to "/road"
      } else {
        setError("Invalid login credentials.");
      }
    } catch (err) {
      // Set error based on the response from the backend
      setError(err.response?.data?.error || "Login failed. Please try again.");
    }
  };

  return (
    <div className="flex min-h-screen bg-[#E9EEF5]">
      <div className="flex-1 flex items-center justify-center bg-[#E9EEF5]">
        <div className="w-full max-w-sm p-4">
          <h1 className="text-2xl text-gray-800 mb-5">Welcome Back!</h1>
          
          <label className="block mb-1 text-sm text-gray-800">Username:</label>
          <input
            type="text"
            name="username"
            value={credentials.username}
            onChange={handleChange}
            className="w-full h-[35px] mb-4 px-3 border border-gray-300 rounded"
          />

          <label className="block mb-1 text-sm text-gray-800">Password:</label>
          <input
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
            className="w-full h-[35px] mb-4 px-3 border border-gray-300 rounded"
          />

          {error && <p className="text-red-500 mb-4">{error}</p>}

          <button
            onClick={handleSubmit}
            className="w-full h-[40px] bg-[#3AA5DC] text-white rounded hover:bg-[#2990c7]"
          >
            Login
          </button>

          <p className="text-center text-sm mt-4">
      Don't have an account?{' '}
      <a onClick={handleRegisterClick} className="text-[#3AA5DC] hover:underline" style={{ cursor: 'pointer' }}>
        Register
      </a>
    </p>
        </div>
      </div>

      <div className="hidden lg:block lg:flex-1 bg-[#1D9DE3] relative overflow-hidden">
        <img
          src={portfeuille}
          alt="Laptop and Chart"
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px]"
        />
      </div>
    </div>
  );
};

export default LoginPage;
