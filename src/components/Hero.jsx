import styles from "../style";
import { discount, MaticVid2 } from "../assets";


const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col mb-8 ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">Get</span> the best prices for our{" "}
            <span className="text-white">MaticDrive</span> Cars <span className="text-gradient">soon!</span>
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[40px] text-white ss:leading-[100.8px] leading-[75px]">
            The Next Generation <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Driverless Cars</span>{" "}
          </h1>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
          For Africa.
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Our team of experts use unique data peculiar to Africa and innovative AI and Sensor technology
          to ensure ease of transport and safety in a vehicle! The next phase in AV technology is evolving 
          and we are ahead of the curve!
        </p>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <video src={MaticVid2} className="w-full rounded-lg" width="500" height="500" autoPlay muted loop />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[0] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[1] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>
    </section>
  );
};

export default Hero;
