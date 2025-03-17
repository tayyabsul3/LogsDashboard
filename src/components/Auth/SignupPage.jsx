import React, { useState } from "react";

const SignupPage = () => {
  // State variables to hold form data
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [avatar, setAvatar] = useState(null); // For avatar file selection

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    // Display entered data in an alert
    alert(
      `Username: ${username}\nEmail: ${email}\nPassword: ${password}\nAvatar: ${
        avatar ? avatar.name : "Not selected"
      }`
    );

    // Optional: Clear form fields after submission
    setUsername("");
    setEmail("");
    setPassword("");
    setAvatar(null);
  };

  // Function to handle avatar file selection
  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    setAvatar(file);
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="linear_g_1 text-white shadow-3xl rounded-3xl flex flex-row-reverse w-3/4 max-w-4xl mb-60">
        {/* Left Side Image (Optional) */}
        <div className="w-1/2 h-[30rem]">
          {/* You can add an image or decorative content here */}
          <div className="h-full w-full object-cover rounded-r-2xl bg-gray-800"></div>
        </div>
        {/* Right Side Form */}
        <div className="w-1/2 p-10 flex flex-col gap-5">
          <h2 className="text-3xl text-center font-bold mb-4 tracking-wide">
            Sign Up
          </h2>
          <form
            className="text-white flex flex-col gap-2"
            onSubmit={handleSubmit}
          >
            <div className="mb-4">
              <label htmlFor="username" className="block mb-1">
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="nav_btn_bg_2 outline-transparent border-transparent w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="nav_btn_bg_2 outline-transparent border-transparent w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block mb-1">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="nav_btn_bg_2 outline-transparent border-transparent w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="avatar" className="block mb-1">
                Avatar
              </label>
              <input
                type="file"
                id="avatar"
                name="avatar"
                onChange={handleAvatarChange}
                className="nav_btn_bg_2 outline-transparent border-transparent w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
            <button
              type="submit"
              className="w-fit px-10 bg-blue-800 text-white py-2 rounded-lg hover:bg-blue-700 mt-2"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
