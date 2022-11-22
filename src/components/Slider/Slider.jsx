import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import "./Slider.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function Slider() {
  return (
    <Tabs
      defaultActiveKey="home"
      transition={false}
      id="noanim-tab-example"
      className=" tabs__container"
    >
      <Tab eventKey="home" title="My Wallet">
        <Swiper
          className="mySwiper"
          loopFillGroupWithBlank={true}
          navigation={true}
          slidesPerView={2}
          spaceBetween={15}
          slidesPerGroup={1}
          loop={true}
        >
          <SwiperSlide>
            <div className="slider__container">
              <div className="slider__color"></div>
              <div className="slider__mcion">
                <p>@Meta Wallet</p>
                <h3>90,500 MCOIN</h3>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </Tab>
      <Tab eventKey="profile" title="Report">
        <h1>tab2</h1>
      </Tab>
      <Tab eventKey="contact" title="Setting">
        <h1>tab3</h1>
      </Tab>
    </Tabs>
  );
}

export default Slider;
