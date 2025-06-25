import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { IoSearchSharp } from "react-icons/io5";
import { MdKeyboardVoice, MdTune } from "react-icons/md";
import Logoswiper from "../../assets/icons/swiper_logo.svg";

import "swiper/css";
import "swiper/css/pagination";

export default function Hero() {
  const [focused, setFocused] = useState(false);
  const [inputText, setInputText] = useState("");
  const navigate = useNavigate();

  const images = [
    "https://media-cdn.tripadvisor.com/media/photo-s/07/4c/22/8e/intro-jazz-bistro-cafe.jpg",
    "https://images.squarespace-cdn.com/content/v1/5d671be8209fb10001b81097/1697126498027-ATMPACKWAYZ9GRPDHC0U/comfort-kitchen-boston-dining-web.jpg?format=2500w",
    "https://phm.org.uk/wp-content/uploads/2021/07/Open-Kitchen-Cafe-Bar-at-Peoples-History-Museum-1-scaled-e1626451902342-960x535.jpg",
    "https://info.ehl.edu/hubfs/Blog-EHL-Insights/Blog-Header-EHL-Insights/ghost-kitchen.jpg",
  ];

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && inputText.trim() !== "") {
      navigate(`/search?query=${encodeURIComponent(inputText.trim())}`);
    }
  };

  return (
    <section className="hero">
      <div className="container">
        <div className="hero_wrapper">
          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            spaceBetween={10}
            slidesPerView={1}
          >
            {images.map((url, index) => (
              <SwiperSlide key={index}>
                <div className="slide-content">
                  <img src={url} alt={`Slide ${index + 1}`} />
                  <img src={Logoswiper} alt="logo" className="logo-center" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="search">
          <div className="search_wrapper">
            <div className="search-bar">
              {inputText ? (
                <span className="spinner" />
              ) : (
                <IoSearchSharp className="icon left" />
              )}
              <input
                type="text"
                placeholder={focused ? "" : "Поиск..."}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                onChange={(e) => setInputText(e.target.value)}
                onKeyDown={handleKeyDown}
              />
              <MdKeyboardVoice
                className={`icon right ${focused ? "voice-focus" : ""}`}
              />
            </div>
            <button>
              <MdTune className="icon_filter" />
            </button>
          </div>

          <div className="filter_buttons">
            <button className="filter_btn">Горячее</button>
            <button className="filter_btn">Бар</button>
            <button className="filter_btn">Завтраки</button>
            <button className="filter_btn">Холодное</button>
          </div>
        </div>
      </div>
    </section>
  );
}
