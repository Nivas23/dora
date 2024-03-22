const Experience = (props) => {
  return (
    <section className="experience-section" id="about">
      <div className="container">
        {/* Experience Title */}
        <div className="section_title wow fadeInUp center">
          <p>Why Choose Me</p>
          <h2>My Skills Area</h2>
        </div>
        <div className="experience-items wow fadeInUp">
          {props.data.map((skill,index) => {
            return (
              <div className="experience-item" key={index}>
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
