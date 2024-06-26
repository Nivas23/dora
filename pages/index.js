import Blog from "@/src/components/Blog";
import Contact from "@/src/components/Contact";
import Copyright from "@/src/components/Copyright";
import Experience from "@/src/components/Experience";
import Feedback from "@/src/components/Feedback";
import Header from "@/src/components/Header";
import Hero from "@/src/components/Hero";
import BlogPopup from "@/src/components/popup/BlogPopup";
import ImageView from "@/src/components/popup/ImageView";
import PortfolioPopup from "@/src/components/popup/PortfolioPopup";
import VideoPopup from "@/src/components/popup/VideoPopup";
import Service from "@/src/components/Service";
import Support from "@/src/components/Support";
import Works from "@/src/components/Works";
import { DoraContext } from "@/src/Context";
import Cursor from "@/src/layout/Cursor";
import PreLoader from "@/src/layout/PreLoader";
import { dora } from "@/src/utils";
import { Fragment, useContext, useEffect } from "react";

export const getStaticProps = async () => {
  try {
    const res = await fetch(
      "https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae"
    );

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    const val = await res.json();
    console.log(val); // Logging the fetched data
    return {
      props: {
        val,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error.message);
    return {
      props: {
        val: null, // or handle error in another way
      },
    };
  }
};

const Index = ({ val }) => {
  useEffect(() => {
    dora.imgToSvg();
    dora.customMouse();
    dora.smoothScrolling();
    dora.stickyNav();
    dora.activeSkillProgressBar();
    const a = document.querySelectorAll("a");
    for (let i = 0; i < a.length; i++) {
      const element = a[i];
      if (element.getAttribute("href") === "#") {
        element.addEventListener("click", (e) => e.preventDefault());
      }
    }
  }, []);
  const { blog, portfolio_modal } = useContext(DoraContext);
  return (
    <Fragment>
      {blog && <BlogPopup />}
      {portfolio_modal && <PortfolioPopup />}
      <ImageView />
      <VideoPopup />
      {val == null ? (
        <PreLoader />
      ) : (
        <>
          {/* Preloader End */}
          {/* Header start */}
          <Header />
          {/* Header End */}
          {/* Home Section Start */}
          <Hero data={val.user.about} />
          {/* Home Section End */}
          {/* Support Section Start */}
          <Support data={val.user.about} />
          {/* Support Section End */}
          {/* Service Section Start */}
          <Service data={val.user.services} />
          {/* Service Section End */}
          {/* Experience Section Start */}
          <Experience data={val.user.skills} />
          {/* Experience Section End */}
          {/* Works Section Start */}
          <Works data={val} />
          {/* Works Section End */}
          {/* Feedback Section Start */}
          <Feedback data={val.user.testimonials} />
          {/* Feedback Section End */}
          {/* Blog Section Start */}
          <Blog data={val} />
          {/* Blog Section End */}
          {/* Contact Section Start */}
          <Contact data={val.user.social_handles} />
          {/* Contact Section End */}
          {/* Copyright */}
          <Copyright />
        </>
      )}
      {/* Cursor */}
      <Cursor />
    </Fragment>
  );
};
export default Index;
