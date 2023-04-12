import { features } from "../constants";
import styles, { layout } from "../style";



const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-col p-2 rounded-[5px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} bg-transparent`}>
    <div className="flex justify-start items-center -mt-3 w-[100%] h-[50px] bg-transparent">
      <img src={icon} alt="star" className=" w-[50px] h-[50px]" />
      <h4 className="pl-2 font-poppins font-semibold text-white text-center ss:text-[18px] text-[16px]">{title}</h4>
    </div>
    <hr className="w-full border border-white bg-white" />
    <p className="mt-2 mx-4 ss:mx-0 -mx-0 font-poppins font-normal tracking-wide text-white text-[14px] leading-[20px] newline">
      {content}
    </p>
  </div>
);

const AboutUs = () =>  (
  <section className={`my-4 ss:my-20 ${layout.section2}`}>
    <div className={layout.sectionInfo}>
      <div className={`${styles.heading2}`}>
        About MATIC<span className="text-gradient">DRIVE</span> 
      </div>

      <p className={`${styles.paragraph} max-w-[550px] my-5`}>
        At Maticdrive, we believe in providing ease, comfort and integrity of service.
        Alongside, we believe in building infrastructure around transportation in Africa 
        and taking it to the next level with our AVs.
      </p>
      
    </div>

    <div className={`${layout.sectionImg2} flex-col`}>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
   
  </section>
);

export default AboutUs;
