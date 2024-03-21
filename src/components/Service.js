import { Swiper, SwiperSlide } from "swiper/react";
import { doraSlider } from "../sliderProps";
// import { useEffect, useState } from "react";
const Service = (props) => {
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
  console.log(props)
  const serviceData = [
    {
      id: 1,
      icon: "images/icons/app-desgin.svg", //"images/icons/ui-ux.svg",
      title:`${props.data[0].name}`,//"UI/UX Solutions",
      des: `${props.data[0].desc}`,
    },
    {
      id: 2,
      icon: "images/icons/web-desgin.svg",
      title:`${props.data[1].name}`,
      des: `${props.data[1].desc}`,
    },
    {
      id: 3,
      icon: "images/icons/ui-ux.svg",//"images/icons/digital-marketing.svg",
      title:`${props.data[2].name}`,//"Digital Marketing",
      des: `${props.data[2].desc}`,
    },
    {
      id: 4,
      icon: "images/icons/digital-marketing.svg",//"images/icons/app-desgin.svg",
      title:`${props.data[3].name}`,
      des: `${props.data[3].desc}`,
    },
    {
      id: 2,
      icon: "images/icons/digital-marketing.svg",
      title: `${props.data[4].name}`,
      des: `${props.data[4].desc}`,
    },
    {
      id: 3,
      icon: "images/icons/web-desgin.svg",
      title:`${props.data[5].name}`,
      des: `${props.data[5].desc}`,
    },
  ];

  return (
    <section className="service-section" id="services">
      <div className="container">
        <div className="row align-items-center">
          <div className="service-title-container">
            {/* Service Title */}
            <div className="section_title wow fadeInUp">
              <p>Services</p>
              <h2>I Provide Wide Range Of Digital Services</h2>
            </div>
            {/* Arrow icon */}
            <div className="service-btn-container wow fadeInUp">
              <a href="#" className="slider-arrow service-swiper-button-left">
                <img
                  className="svg"
                  src="images/icons/arrow-left.svg"
                  alt="service left btn"
                />
              </a>
              <a
                href="#"
                className="slider-arrow active service-swiper-button-right"
              >
                <img
                  className="svg"
                  src="images/icons/arrow-right.svg"
                  alt="service left btn"
                />
              </a>
            </div>
          </div>
          <Swiper
            {...doraSlider.serviceSlider}
            className="swiper services-cont wow fadeInUp"
          >
            {" "}
            {serviceData.map((service, i) => (
              <SwiperSlide className="swiper-slide" key={i}>
                <div className="service-item">
                  <span
                    className={`service-item-logo service-item-logo-cont-${service.id}`}
                  >
                    <img src={service.icon} alt="service" />
                  </span>
                  <h4>{service.title}</h4>
                  <p>
                  {service.des}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};
export default Service;
