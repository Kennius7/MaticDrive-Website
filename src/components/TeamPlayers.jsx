import { feedback } from "../constants";
import styles from "../style";
import FeedbackCard from "./FeedbackCard";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, ButtonPlay } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { people01, people02, people03, people04, people05, people06, people07 } from "../assets";






const TeamPlayers = () => (
  <section id="clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative my-20`}>
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

    <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
      <h2 className={styles.heading2}>
        Meet the <br className="sm:block hidden" /> MATIC<span className="text-gradient">DRIVE</span> Team.
      </h2>
      <div className="w-full md:mt-0 mt-6">
        <p className={`${styles.paragraph} text-left max-w-[450px]`}>
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>
    </div>

    <Carousel 
      arrows
      autoPlaySpeed={3000}
      containerClass="container-with-dots w-full"
      dotListClass=""
      draggable
      focusOnSelect={false}
      infinite={true}
      itemClass="carousel-item"
      keyBoardControl
      minimumTouchDrag={80}
      autoPlay={true}
      responsive={{
        desktop: {
          breakpoint: {
            max: 3000,
            min: 1024
          },
          items: 3,
        },
        mobile: {
          breakpoint: {
            max: 464,
            min: 0
          },
          items: 1,
        },
        tablet: {
          breakpoint: {
            max: 1024,
            min: 464
          },
          items: 2,
        }
      }}
      rewind={false}
      rewindWithAnimation={false}
      rtl={false}
      shouldResetAutoplay
      showDots={false}
      sliderClass=""
      slidesToSlide={1}
      swipeable
      className="flex flex-row flex-wrap justify-center w-full feedback-container relative z-[1]">
        
          {feedback.map((card) => <FeedbackCard key={card.id} {...card} />)}
        
    </Carousel>
    
    <CarouselProvider 
      currentSlide={0}
      className="w-full h-[500px] rounded-[10px] bg-gray-300 carousel-size"
      hasMasterSpinner={false}
      interval={5000}
      isPlaying={true}
      playDirection={"forward"}
      infinite={true}
      visibleSlides={3}
      isIntrinsicHeight={false}
      naturalSlideWidth={500}
      naturalSlideHeight={500}
      totalSlides={3}>
      <Slider 
      className="w-full h-[480px] bg-indigo-200" 
      isPlaying={true}
      visibleSlides={3}
      
      infinite={true}>
        <Slide index={0}>
          <div className="flex justify-center items-center flex-col rounded-[15px] p-3">
            <img src={people01} alt="dp1" className="ss:w-[400px] ss:h-[400px] w-[300px] h-[300px] rounded-[10px]" />
            <div className="flex flex-col ss:w-[400px] w-[300px] items-center rounded-[10px] mt-2">
              <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-primary">
                Esther Eruchie
              </h4>
              <p className="font-poppins font-normal text-[16px] leading-[24px] text-primary">
                Founder
              </p>
            </div>
          </div>
        </Slide>
        <Slide index={1}>
          <div className="flex justify-center items-center flex-col rounded-[15px] p-3">
            <img src={people02} alt="dp2" className="ss:w-[400px] ss:h-[400px] w-[300px] h-[300px] rounded-[10px]" />
            <div className="flex flex-col ss:w-[400px] w-[300px] items-center rounded-[10px] mt-2">
              <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-primary">
                Osatohanmwen Ben-Iyare
              </h4>
              <p className="font-poppins font-normal text-[16px] leading-[24px] text-primary">
                Technical Project Manager
              </p>
            </div>
          </div>
        </Slide>
        <Slide index={2}>
          <div className="flex justify-center items-center flex-col rounded-[15px] p-3">
            <img src={people03} alt="dp3" className="ss:w-[400px] ss:h-[400px] w-[300px] h-[300px] rounded-[10px]" />
            <div className="flex flex-col ss:w-[400px] w-[300px] items-center rounded-[10px] mt-2">
              <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-primary">
                Kenny Ogbogu
              </h4>
              <p className="font-poppins font-normal text-[16px] leading-[24px] text-primary">
                Lead Developer
              </p>
            </div>
          </div>
        </Slide>
        <Slide index={3}>
          <div className="flex justify-center items-center flex-col rounded-[15px] p-3">
            <img src={people04} alt="dp4" className="ss:w-[400px] ss:h-[400px] w-[300px] h-[300px] rounded-[10px]" />
            <div className="flex flex-col ss:w-[400px] w-[300px] items-center rounded-[10px] mt-2">
              <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-primary">
                Brian Phiri
              </h4>
              <p className="font-poppins font-normal text-[16px] leading-[24px] text-primary">
                Data Analyst
              </p>
            </div>
          </div>
        </Slide>
        <Slide index={4}>
          <div className="flex justify-center items-center flex-col rounded-[15px] p-3">
            <img src={people05} alt="dp5" className="ss:w-[400px] ss:h-[400px] w-[300px] h-[300px] rounded-[10px]" />
            <div className="flex flex-col ss:w-[400px] w-[300px] items-center rounded-[10px] mt-2">
              <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-primary">
                Daniel Paul
              </h4>
              <p className="font-poppins font-normal text-[16px] leading-[24px] text-primary">
                Product Manager
              </p>
            </div>
          </div>
        </Slide>
        <Slide index={5}>
          <div className="flex justify-center items-center flex-col rounded-[15px] p-3">
            <img src={people06} alt="dp6" className="ss:w-[400px] ss:h-[400px] w-[300px] h-[300px] rounded-[10px]" />
            <div className="flex flex-col ss:w-[400px] w-[300px] items-center rounded-[10px] mt-2">
              <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-primary">
                Judith Ejike
              </h4>
              <p className="font-poppins font-normal text-[16px] leading-[24px] text-primary">
                Content Creator
              </p>
            </div>
          </div>
        </Slide>
        <Slide index={6}>
          <div className="flex justify-center items-center flex-col rounded-[15px] p-3">
            <img src={people07} alt="dp7" className="ss:w-[400px] ss:h-[400px] w-[300px] h-[300px] rounded-[10px]" />
            <div className="flex flex-col ss:w-[400px] w-[300px] items-center rounded-[10px] mt-2">
              <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-primary">
                Abdulmatin Gbolahan Lawal
              </h4>
              <p className="font-poppins font-normal text-[16px] leading-[24px] text-primary">
                UI/UX Designer
              </p>
            </div>
          </div>
        </Slide>
      </Slider>
      <div className="flex flex-row justify-between items-center">
        <ButtonBack className="btn-back">Back</ButtonBack>
          <ButtonPlay>Play</ButtonPlay>
        <ButtonNext className="btn-forward">Next</ButtonNext>
      </div>
      
    </CarouselProvider>

  </section>
);

export default TeamPlayers;
