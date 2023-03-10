import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";



const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row p-4 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card2`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-transparent -mt-3 -ml-3`}>
      <img src={icon} alt="star" className="w-[100%] h-[100%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-1">
      <h4 className="font-poppins font-semibold text-primary text-[18px] leading-[23.4px] mb-1 -pt-1">
        {title}
      </h4>
      <p className="font-poppins font-normal tracking-wide text-primary text-[14px] leading-[20px] newline pr-3">
        {content}
      </p>
    </div>
  </div>
);

const AboutUs = () =>  (
  <section id="aboutUs" className={`my-20 ${layout.section}`}>
    <div className={layout.sectionInfo}>
      <div className={`${styles.heading2} text-[30]`}>
        About MATIC<span className="text-gradient" >DRIVE</span> 
      </div>

      <p className={`${styles.paragraph} max-w-[470px] mt-5 tracking-wider`}>
        At Maticdrive, we believe in providing ease, comfort and integrity of service.
        Alongside, we believe in building infrastructure around transportation in Africa 
        and taking it to the next with our AVs.
      </p>
      <Button styles={`mt-4`} />
    </div>

    <div className={`${layout.sectionImg} flex-col`}>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
   
  </section>
);

export default AboutUs;
