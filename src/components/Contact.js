import emailjs from "emailjs-com";
import { useState, useEffect } from "react";

const Contact = (props) => {
  const [mailData, setMailData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { name, email, message } = mailData;
  const [error, setError] = useState(null);
  const onChange = (e) =>
    setMailData({ ...mailData, [e.target.name]: e.target.value });
  const onSubmit = (e) => {
    e.preventDefault();
    if (name.length === 0 || email.length === 0 || message.length === 0) {
      setError(true);
      clearError();
    } else {
      emailjs
        .send(
          "service_seruhwu", // service id
          "template_21aw58z", // template id
          mailData,
          "Q3pccdLZhU-mZT7tQ" // public api
        )
        .then(
          (response) => {
            setError(false);
            clearError();
            setMailData({ name: "", email: "", message: "" });
          },
          (err) => {
            console.log(err.text);
          }
        );
    }
  };
  const clearError = () => {
    setTimeout(() => {
      setError(null);
    }, 2000);
  };

  const [value, setValue] = useState(null);
  useEffect(() => {
    fetch(
      "https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae"
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        // Work with the JSON data here
        setValue(data);
        console.log(data);
      })
      .catch((error) => {
        // Handle any errors that occurred during the fetch
        console.error("Fetch error:", error);
      });
  }, []);

  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <div className="contact-info-cont">
          {/* Contact left */}
          <div className="contact-info">
            <div className="section_title wow fadeInUp">
              <h2>Let's Connect</h2>
            </div>
            <p className="wow fadeInUp">
              Please fill out the form on this section to contact with me. Or
              call between 9:00 a.m. and 8:00 p.m. ET, Monday through Friday
            </p>

            <ul className="contact-social wow fadeInUp">
              {props.data.map((item) => (
                <li>
                  <a href={`${item.url}`}>
                    <i className={`fab fa-${item.platform.toLowerCase()}`} />
                  </a>
                </li>
              ))}
              {/* <li>
                  <a href={`${value.user.social_handles[0].url}`}>
                    <i className="fab fa-linkedin" />
                  </a>
                </li>
                <li>
                  <a href={`${value.user.social_handles[0].url}`}>
                    <i className="fab fa-instagram" />
                  </a>
                </li>
                <li>
                  <a href={`${value.user.social_handles[1].url}`}>
                    <i className="fab fa-twitter" />
                  </a>
                </li>
                <li>
                  <a href={`${value.user.social_handles[1].url}`}>
                    <i className="fab fa-dribbble" />
                  </a>
                </li>
                <li>
                  <a href={`${value.user.social_handles[1].url}`}>
                    <i className="fab fa-facebook-f" />
                  </a>
                </li> */}
            </ul>
          </div>
          {/* Contact right */}
          <form
            className="contact-form wow fadeInUp"
            onSubmit={(e) => onSubmit(e)}
          >
            <h3>Let's message me and mack something together</h3>

            <input
              type="text"
              className="input-control"
              placeholder="Your Name"
              name="name"
              onChange={(e) => onChange(e)}
              value={name}
            />
            <input
              type="text"
              className="input-control"
              placeholder="Your Email"
              name="email"
              onChange={(e) => onChange(e)}
              value={email}
            />
            <textarea
              className="input-control"
              placeholder="Message"
              defaultValue={""}
              name="message"
              onChange={(e) => onChange(e)}
              value={message}
            />
            <div
              className={error ? "empty_notice" : "returnmessage"}
              style={{ display: error == null ? "none" : "block" }}
            >
              <span>
                {error
                  ? "Please Fill Required Fields"
                  : "Your message has been received, We will contact you soon."}
              </span>
            </div>
            <div className="form-btn">
              <button className="btn primary-btn">Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
export default Contact;
