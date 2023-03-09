import { MaticProto } from "../assets";
import styles, { layout } from "../style";



const Features = () => (
  <section id="product" className={`my-20 ${layout.sectionReverse}`}>
    <div className={layout.sectionImgReverse}>
      <img src={MaticProto} alt="billing" className="w-[100%] h-[80%] rounded-lg bg-gradient-to-t relative z-[5]" />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        MATIC<span className="text-gradient">DRIVE</span> AVs <br className="sm:block hidden" /> Features & Technologies.
      </h2>
      <p className={ `${styles.paragraph} max-w-[470px] mt-5` }>
        Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
        aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
        placerat.
      </p>
    </div>
  </section>
);

export default Features;
