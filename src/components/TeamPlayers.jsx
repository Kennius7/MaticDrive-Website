import { teamMembers } from "../constants";
import styles from "../style";
import CarouselSlider from "./CarouselSlider";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { EffectCoverflow, Pagination, Navigation, Autoplay } from "swiper";
import { IonIcon } from "@ionic/react";
import { arrowBackOutline, arrowForwardOutline } from "ionicons/icons";



// const [currentIndex, setCurrentIndex] = useState(0);


const TeamPlayers = () => {

  return ( 
    <section id="team" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative my-20`}>

      <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

      <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
        <h2 className={styles.heading2}>
          Meet the <br className="sm:block hidden" /> MATIC<span className="text-gradient">DRIVE</span> Team.
        </h2>
        <div className="w-full md:mt-0 mt-6">
          <p className={`${styles.paragraph} text-left max-w-[500px]`}>
            An agile team experienced with machine learning and neural data AI systems production, development, deployment etc.
          </p>
        </div>
      </div>

      <div className="w-full py-16 px-4">
        {/*
        <CarouselSlider autoSlide={true}>
          {teamMembers.map((card) => (
            <div className="w-full flex flex-col justify-center items-center">
              <img src={card.img} alt={card.name} className="bg-center bg-cover rounded-[10px]" />
              <div className="flex flex-col ss:w-[400px] w-[300px] items-center rounded-[10px] mt-2">
                <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-white">
                  {card.name}
                </h4>
                <p className="font-poppins font-normal text-[16px] leading-[24px] text-white"> 
                  {card.title}
                </p>
              </div>
            </div>
        ))}
        </CarouselSlider>
          */}
        <Swiper
          className="swiper-container"
          effect={ "coverflow" }
          grabCursor={ true }
          centeredSlides={ true }
          loop={ true }
          autoplay={{ delay: 3000 }}
          slidesPerView={ "auto" }
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          pagination={{el: ".swiper-pagination", clickable: true}}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
        >
          {teamMembers.map((card) => (
            <SwiperSlide className="w-full flex flex-col justify-center items-center">
              <img src={card.img} alt={card.name} className="bg-center bg-cover rounded-[10px]" />
              <div className="flex flex-col items-center rounded-[10px] ss:mt-2 sm:mt-8 mt-1">
                <h4 className="font-poppins font-bold ss:text-[20px] sm:text-[26px] text-[14px] ss:leading-[32px] text-white">
                  {card.name}
                </h4>
                <p className="font-poppins font-normal ss:text-[16px] sm:text-[22px] text-[10px] ss:leading-[24px] text-white"> 
                  {card.title}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="swiper-pagination"></div>

       {/*
        <div className="mt-20">
          <div className="slider-controller">
            <div className="swiper-button-prev slider-arrow" />
          </div>
          <div className="slider-controller">
            <div className="swiper-button-next slider-arrow" />
          </div>
        </div>
        */}

      </div>

    </section>
  )
};


export default TeamPlayers;
