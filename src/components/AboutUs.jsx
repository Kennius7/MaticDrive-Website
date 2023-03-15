import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";



const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-col p-4 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card2`}>
    <div className="flex justify-start items-center -mt-3 w-[100%] h-[50px] bg-transparent">
      <img src={icon} alt="star" className=" w-[50px] h-[50px]" />
      <h4 className="pl-2 font-poppins font-semibold text-primary text-center ss:text-[18px] text-[16px]">{title}</h4>
    </div>
    
    <p className="mt-2 mx-4 font-poppins font-normal tracking-wide text-primary text-[14px] leading-[20px] newline">
      {content}
    </p>
  </div>
);

const AboutUs = () =>  (
  <section id="aboutUs" className={`my-20 ${layout.section}`}>
    <div className={layout.sectionInfo}>
      <div className={`${styles.heading2}`}>
        About MATIC<span className="text-gradient">DRIVE</span> 
      </div>

      <p className={`${styles.paragraph} max-w-[550px] my-5`}>
        At Maticdrive, we believe in providing ease, comfort and integrity of service.
        Alongside, we believe in building infrastructure around transportation in Africa 
        and taking it to the next with our AVs.
      </p>
      <a href="#contact">
        <Button styles={`mt-4`} />
      </a>
      
    </div>

    <div className={`${layout.sectionImg} flex-col`}>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
   
  </section>
);

export default AboutUs;
