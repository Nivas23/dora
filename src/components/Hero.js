// import { useState, useEffect } from "react";
const Hero = (props) => {
  // const [value, setValue] = useState(null);
  // useEffect(() => {
  //   fetch(
  //     "https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae"
  //   )
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw new Error("Network response was not ok");
  //       }
  //       return response.json();
  //     })
  //     .then((data) => {
  //       // Work with the JSON data here
  //       setValue(data);
  //       console.log(data);
  //     })
  //     .catch((error) => {
  //       // Handle any errors that occurred during the fetch
  //       console.error("Fetch error:", error);
  //     });
  // }, []);
  
console.log(props.data)
  return (
    <section className="hero-section" id="home">
      
      <div className="container">
        <div className="row">
          <div className="hero-text wow fadeInUp">
            <span>Hi, I'm</span>
            <h1>{props.data.name}</h1>
            <h3>{props.data.title}</h3>
            <p>{props.data.subTitle}</p>
            <div className="hero-btn-container">
              <a href="#contact" className="btn primary-btn">
                Download CV
              </a>
              <a href="#contact" className="btn secondary-btn">
                Contact
              </a>
            </div>
          </div>
          <div className="hero-img">
            <img src={props.data.avatar.url} alt="dora_img" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
