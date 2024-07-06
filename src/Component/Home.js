import React from "react";
import DivyaniLalPhoto from "../../src/Assets/image/DivyaniLalLinkedinPhoto.jpeg";

const Home = () => {
  const sectionStyle = {
    textAlign: "center",
    padding: "50px 20px",
    backgroundColor: "#fff" /* White background for the section */,
    color: "#333" /* Dark gray text color */,
    borderRadius: "10px",
    boxShadow: "0 0 20px rgba(0, 0, 0, 0.1)" /* Subtle box shadow */,
    marginBottom: "20px",
  };

  const headingStyle = {
    fontSize: "3rem",
    marginBottom: "20px",
    fontFamily: "Arial, sans-serif",
    color: "#333" /* Dark gray heading color */,
  };

  const paragraphStyle = {
    fontSize: "1.2rem",
    marginBottom: "30px",
  };

  const imageStyle = {
    borderRadius: "50%",
    width: "200px",
    height: "200px",
    objectFit: "cover",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    marginBottom: "20px",
  };

  return (
    <section id="home" style={sectionStyle}>
      <h1 style={headingStyle}>Welcome to Divyani Lal's Portfolio</h1>
      <p style={paragraphStyle}>
        Full-Stack Developer specializing in MERN Stack | React.js | Node.js |
        MongoDB
      </p>
      <img src={DivyaniLalPhoto} alt="Divyani Lal" style={imageStyle} />
    </section>
  );
};

export default Home;
