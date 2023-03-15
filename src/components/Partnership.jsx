import styles from "../style";
import Button from "./Button";

const Partnership = () => (
  <section id="partners" className={`${styles.flexCenter} ${styles.marginYPartner} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
    <div className="flex-1 flex flex-col">
      <h2 className={styles.headingPart}>You can partner <br className="md:hidden block" /> with us!</h2>
      <p className={`${styles.paragraph} lg:max-w-[600px] sm:max-w-[460px] max-w-[600px] mt-5`}>
        Develop your AV business model with our agile team, to create efficient AVs that can deliver optimum services anywhere in Africa.
      </p>
    </div>

    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
    <a href="#contact">
      <Button />
    </a>
      
    </div>
  </section>
);

export default Partnership;
