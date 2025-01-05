import { useState } from 'react';
import axios from 'axios';
import LaptopImage from '../images/Other 07reg.png';

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    email: '',
    password: '',
    gender: '',
    birthdate: '',
    major: '',
    interests: []
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox') {
      const interest = value;
      setFormData((prev) => ({
        ...prev,
        interests: checked
          ? [...prev.interests, interest]
          : prev.interests.filter((i) => i !== interest)
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess(false);
  
    try {
      // Construct a new object with only the required fields
      const dataToSend = {
        name: formData.name, // Map `fullname` to `name`
        username: formData.username,
        email: formData.email,
        password: formData.password,
        gender: formData.gender,
        major: formData.major,
      };
  
      // Send the request to the backend
      const response = await axios.post(
        "http://127.0.0.1:5000/register",
        dataToSend,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
  
      console.log(response.data);
      setSuccess(true); // Set success state if registration is successful
    } catch (err) {
      setError(err.response?.data?.error || "Registration failed"); // Handle errors
    }
  };
  


  const interests = [
    'Marketing',
    'Healthcare',
    'Agriculture',
    'Legal Tech',
    'Education',
    'Sports',
    'Art',
    'Food'
  ];

  return (
    <div className="min-h-screen bg-[#e9eefb]">
      <div className="relative min-h-screen flex">
        <div className="absolute top-0 left-0 h-full w-[300px] bg-[#65b5ff] rounded-r-[150px]">
          <div className="absolute top-0 left-0 h-full w-[240px] bg-[#4e9aed] rounded-r-[120px]" />
        </div>

        <div className="container mx-auto flex flex-col lg:flex-row items-start p-5 relative z-10">
          <div className="w-full lg:w-1/2 flex justify-center items-center p-4">
            <img src={LaptopImage} alt="3D Illustration" className="w-[350px] max-w-[90%]" />
          </div>

          <div className="w-full lg:w-1/2 p-4">
            <h2 className="text-xl font-bold mb-6 text-gray-800">Please Fill out form to Register!</h2>

            {error && <div className="mb-4 text-red-500">{error}</div>}
            {success && <div className="mb-4 text-green-500">Registration successful!</div>}

            <form onSubmit={handleSubmit} className="max-w-md">
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Full name:</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-full border border-[#9dd2ff]"
                  placeholder="John Doe"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Username:</label>
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-full border border-[#9dd2ff]"
                  placeholder="Enter your username"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Email:</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-full border border-[#9dd2ff]"
                  placeholder="example@mail.com"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Password:</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-full border border-[#9dd2ff]"
                  placeholder="••••••••"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Gender:</label>
                <div className="flex gap-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="gender"
                      value="homme"
                      checked={formData.gender === 'homme'}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    Homme
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="gender"
                      value="femme"
                      checked={formData.gender === 'femme'}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    Femme
                  </label>
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Date of birth:</label>
                <input
                  type="date"
                  name="birthdate"
                  value={formData.birthdate}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-full border border-[#9dd2ff]"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Major:</label>
                <input
                  type="text"
                  name="major"
                  value={formData.major}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-full border border-[#9dd2ff]"
                  placeholder="Your major"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Areas of interest:</label>
                <div className="grid grid-cols-2 gap-2">
                  {interests.map((interest) => (
                    <label key={interest} className="flex items-center">
                      <input
                        type="checkbox"
                        name="interests"
                        value={interest}
                        checked={formData.interests.includes(interest)}
                        onChange={handleChange}
                        className="mr-2"
                      />
                      {interest}
                    </label>
                  ))}
                </div>
              </div>

              <button
                type="submit"
                className="bg-[#0889fa] hover:bg-[#006ee0] text-white px-6 py-2 rounded-full"
              >
                Register
              </button>

              <div className="mt-4">
                Yes I have an account?{' '}
                <a href="#" className="text-[#006ee0] font-medium">
                  Login
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;