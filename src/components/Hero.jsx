import styles from "../style";
import { MaticVid2 } from "../assets";
import YoutubeEmbed from "./YoutubeEmbed";


const Hero = () => {
  return (
    <section id="highlights" className={`flex md:flex-row flex-col mt-20 ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[60px] text-[32px] text-white ss:leading-[70px] leading-[55px]">
            The Next Generation <br className="xs:block hidden" /> <span className="text-gradient">Driverless Cars</span>
          </h1>
        </div>
        <h1 className="-mt-3 font-poppins font-semibold ss:text-[55px] text-[40px] text-white ss:leading-[100.8px] leading-[75px] w-full">
          For Africa
        </h1>
        <p className={`${styles.paragraph} max-w-[550px] mt-2`}>
          Our team of experts use unique data peculiar to Africa and innovative AI and Sensor technology
          to ensure ease of transport and safety in a vehicle! The next phase in AV technology is evolving 
          and we are ahead of the curve!
        </p>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
      <div className="">
        <YoutubeEmbed embedId="8EFgwcbjtyI" />
      </div>
        
        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[0] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[-1] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[0] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[-1] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>
      
    </section>
  );
};

export default Hero;
