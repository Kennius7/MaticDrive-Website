import { featureSlide } from "../constants";
import styles, { layout } from "../style";
import FeatureCarouselSlider from "./FeatureCarouselSlider";



const Features = () => (
  <section id="features" className={`my-20 ${layout.sectionReverse}`}>
    <div className={layout.sectionImgReverse}>
      <div className="max-w-lg w-full h-[700px] m-auto py-16 px-4">
        <FeatureCarouselSlider autoSlide={true}>
          {featureSlide.map((card) => (
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
        </FeatureCarouselSlider>
      </div>

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={`${layout.sectionInfo} -mt-4`}>
      <h2 className={`${styles.headingFeatures}`}>
        MATIC<span className="text-gradient">DRIVE</span> AVs <br /> Features & Technologies
      </h2>
      <p className={ `${styles.paragraphFeatures} max-w-[600px] mt-5` }>
      Our autonomous driving control systems are usually divided into three main parts: 
      environmental perception, decision planning and control part. <br /> First, environmental perception 
      collects information around the car through a variety of sensors, including LIDAR, camera, 
      active RADAR, millimeter-wave RADAR, integrated navigation, and so on. <br />
      We have an intelligent control algorithm that calculates the commands and routes according to 
      the driver’s intentions, speed, external environment, etc.
      </p>
    </div>
  </section>
);

export default Features;
