// import { useEffect, useState } from "react";
const Experience = (props) => {
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
  return (
    <section className="experience-section" id="about">
      <div className="container">
        {/* Experience Title */}
        <div className="section_title wow fadeInUp center">
          <p>Why Choose Me</p>
          <h2>My Experience Area</h2>
        </div>
        <div className="experience-items wow fadeInUp">
          {props.data.map((skill) => {
            return (
              <div className="experience-item">
                <div className="experience-info">
                  <p>{`${skill.name}`}</p>
                  <p>{`${skill.percentage}%`}</p>
                </div>
                <div
                  className="progress-line"
                  data-percent={`${skill.percentage}%`}
                >
                  <span />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default Experience;
