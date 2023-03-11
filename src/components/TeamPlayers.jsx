import { feedback } from "../constants";
import styles from "../style";
import FeedbackCard from "./FeedbackCard";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


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
      additionalTransfrom={0}
      arrows
      autoPlaySpeed={3000}
      centerMode={false}
      containerClass="container-with-dots"
      dotListClass=""
      draggable
      focusOnSelect={false}
      infinite
      itemClass=""
      keyBoardControl
      minimumTouchDrag={80}
      pauseOnHover
      renderArrowsWhenDisabled={false}
      renderButtonGroupOutside={false}
      renderDotsOutside={false}
      responsive={{
        desktop: {
          breakpoint: {
            max: 3000,
            min: 1024
          },
          items: 4,
          partialVisibilityGutter: 40
        },
        mobile: {
          breakpoint: {
            max: 464,
            min: 0
          },
          items: 1,
          partialVisibilityGutter: 20
        },
        tablet: {
          breakpoint: {
            max: 1024,
            min: 464
          },
          items: 2,
          partialVisibilityGutter: 30
        }
      }}
      rewind={false}
      rewindWithAnimation={false}
      rtl={false}
      shouldResetAutoplay
      showDots={true}
      sliderClass=""
      slidesToSlide={1}
      swipeable 
      autoPlay
      className="flex flex-row flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
        
          {feedback.map((card) => <FeedbackCard key={card.id} {...card} />)}
        
    </Carousel>
  </section>
);

export default TeamPlayers;
