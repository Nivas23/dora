import Isotope from "isotope-layout";
import { useCallback, useContext, useEffect, useRef, useState } from "react";
import { DoraContext } from "../Context";
const PortfolioIsotope = () => {
  // Isotope
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");
  useEffect(() => {
    setTimeout(() => {
      isotope.current = new Isotope(".works-row", {
        itemSelector: ".works-col",
        // layoutMode: "fitRows",
        percentPosition: true,
        masonry: {
          columnWidth: ".works-col",
        },
        animationOptions: {
          duration: 750,
          easing: "linear",
          queue: false,
        },
      });
    }, 1000);
    // return () => isotope.current.destroy();
  }, []);
  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);
  const handleFilterKeyChange = useCallback(
    (key) => () => {
      setFilterKey(key);
    },
    []
  );

  const activeBtn = (value) => (value === filterKey ? "active" : "");

  const { portfolio_modal_show } = useContext(DoraContext);

  return (
    <div className="work-isotope-filter">
      {/* work isotope menu */}
      <ul className="works-list-ul wow fadeInUp">
        <li
          className={`c-pointer ${activeBtn("*")}`}
          onClick={handleFilterKeyChange("*")}
        >
          All
        </li>
        <li
          className={`c-pointer ${activeBtn("youtube")}`}
          onClick={handleFilterKeyChange("youtube")}
          data-filter=".youtube"
        >
          Youtube
        </li>
        <li
          className={`c-pointer ${activeBtn("vimeo")}`}
          onClick={handleFilterKeyChange("vimeo")}
          data-filter=".vimeo"
        >
          Vimeo
        </li>
        <li
          className={`c-pointer ${activeBtn("soundcloud")}`}
          onClick={handleFilterKeyChange("soundcloud")}
          data-filter=".soundcloud"
        >
          Soundcloud
        </li>
        <li
          className={`c-pointer ${activeBtn("popup")}`}
          onClick={handleFilterKeyChange("popup")}
          data-filter=".popup"
        >
          Popup
        </li>
        <li
          className={`c-pointer ${activeBtn("details")}`}
          onClick={handleFilterKeyChange("details")}
          data-filter=".details"
        >
          Details
        </li>
      </ul>
      {/* work isotope items */}
      <div className="works-row wow fadeInUp">
        {/* Youtube */}
        <div className="works-col youtube">
          <a href="//www.youtube.com/embed/B-ytMSuwbf8?autoplay=1">
            <img src="/images/works/1.png" alt="dora_img" />
          </a>
        </div>
        <div className="works-col youtube">
          <a href="//www.youtube.com/embed/B-ytMSuwbf8?autoplay=1">
            <img src="/images/works/1.png" alt="dora_img" />
          </a>
        </div>
        {/* Vimeo */}
        <div className="works-col vimeo">
          <a href="//player.vimeo.com/video/132528823?autoplay=1">
            <img src="/images/works/2.png" alt="dora_img" />
          </a>
        </div>
        {/* Details */}
        <div className="works-col details">
          <a
            href="#"
            className="details-item"
            onClick={(e) => {
              e.preventDefault();
              portfolio_modal_show(true);
            }}
          >
            <img src="/images/works/4.png" alt="dora_img" />
          </a>
        </div>
        {/* Popup */}
        <div className="works-col popup">
          <a href="/images/works/5.png">
            <img src="/images/works/5.png" alt="dora_img" />
          </a>
        </div>
        {/* Soundcloud */}
        <div className="works-col soundcloud">
          <a href="https://w.soundcloud.com/player/?visual=true&url=http%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F159967086&show_artwork=true&maxwidth=1020&maxheight=1000&auto_play=1">
            <img src="/images/works/3.png" alt="dora_img" />
          </a>
        </div>
        {/* Popup */}
        <div className="works-col popup">
          <a href="/images/works/6.png">
            <img src="/images/works/6.png" alt="dora_img" />
          </a>
        </div>
      </div>
    </div>
  );
};
export default PortfolioIsotope;
