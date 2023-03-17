import styles from "../style";
import Button from "./Button";
import { partnership } from "../assets";



const Partnership = () => (
  <section id="partners" className={`${styles.flexCenter} ${styles.marginYPartner} ${styles.paddingPart} md:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
    <div className="flex ss:flex-row flex-col items-center">
      <div className="flex flex-col">
        <h2 className={styles.headingPart}>You can <span className="text-gradient">partner</span> <br /> with us!</h2>
        <p className={`${styles.paragraphPartner} ss:max-w-[430px] max-w-[600px] sm:my-4 lg:my-10 my-4`}>
          Develop your AV business model with our agile team, to create efficient AVs that can deliver optimum services anywhere in Africa.
        </p>
        <div className={`${styles.flexCenter} sm:block hidden`}>
          <a href="#contact">
            <Button />
          </a>
        </div>
      </div>
      
      <div className="w-[280px] h-[280px] ss:w-[350px] ss:h-[350px] lg:w-[500px] sm:h-[400px] sm:w-[400px] lg:h-[500px] sm:ml-4 lg:ml-20">
        <img className="rounded-lg w-[100%] h-[100%]" src={partnership} alt="partnership" />
      </div>
      
    </div>

    <div className={`${styles.flexCenter} sm:hidden block mt-4`}>
      <a href="#contact">
        <Button />
      </a>
    </div>

  </section>
);

export default Partnership;
