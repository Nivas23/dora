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
import { Fragment, useContext, useEffect ,useState} from "react";

const Index = () => {
  const [value, setValue] = useState(null);
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
        setValue(data);
        console.log(data);
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  }, []);
  const { blog, portfolio_modal } = useContext(DoraContext);
  return (
    <Fragment>
      {blog && <BlogPopup />}
      {portfolio_modal && <PortfolioPopup />}
      <ImageView />
      <VideoPopup />
      {value==null?<PreLoader />:<>
      {/* Preloader End */}
      {/* Header start */}
      <Header />
      {/* Header End */}
      {/* Home Section Start */}
      <Hero data={value.user.about}/>
      {/* Home Section End */}
      {/* Support Section Start */}
      <Support data={value.user.about}/>
      {/* Support Section End */}
      {/* Service Section Start */}
      <Service data={value.user.services}/>
      {/* Service Section End */}
      {/* Experience Section Start */}
      <Experience data={value.user.skills}/>
      {/* Experience Section End */}
      {/* Works Section Start */}
      <Works data={value}/>
      {/* Works Section End */}
      {/* Feedback Section Start */}
      <Feedback data={value.user.testimonials}/>
      {/* Feedback Section End */}
      {/* Blog Section Start */}
      <Blog data={value}/>
      {/* Blog Section End */}
      {/* Contact Section Start */}
      <Contact data={value.user.social_handles}/>
      {/* Contact Section End */}
      {/* Copyright */}
      <Copyright />
      </>}
      {/* Cursor */}
      <Cursor />
    </Fragment>
  );
};
export default Index;
