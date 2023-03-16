import { teamMembers } from "../constants";
import styles from "../style";
import CarouselSlider from "./CarouselSlider";




// const [currentIndex, setCurrentIndex] = useState(0);


const TeamPlayers = () => {

  return ( 
    <section id="team" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative my-20`}>
      <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

      <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
        <h2 className={styles.heading2}>
          Meet the <br className="sm:block hidden" /> MATIC<span className="text-gradient">DRIVE</span> Team.
        </h2>
        <div className="w-full md:mt-0 mt-6">
          <p className={`${styles.paragraph} text-left max-w-[500px]`}>
            An agile team experienced with machine learning and neural data AI systems production, development, deployment etc.
          </p>
        </div>
      </div>

      <div className="max-w-lg w-full h-[700px] m-auto py-16 px-4">
        <CarouselSlider autoSlide={true}>
          {teamMembers.map((card) => (
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
        </CarouselSlider>
      </div>
    </section>
  )
};


export default TeamPlayers;
