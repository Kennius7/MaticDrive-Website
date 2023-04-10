import { teamMembers } from "../constants";
import styles from "../style";
import { logo } from "../assets";



// const [currentIndex, setCurrentIndex] = useState(0);


const TeamPlayers = () => {

  return ( 
    <section className={`${styles.paddingY} ${styles.flexCenter} flex-col relative my-4`}>

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

      <div className="w-full">


        <div className="flex flex-wrap justify-center items-center">
          {teamMembers.map((card) => (
            <div className="m-2">
              <div className="flex flex-col justify-center items-center ss:w-[300px] ss:h-[300px] w-[120px] h-[120px] ss:p-2 ss:m-6 p-2 m-2">
                <div className="">
                  <img src={card.img} alt={card.name} className="ss:w-[220px] ss:h-[220px] w-[100px] h-[100px] border-2 border-yellow-300 bg-center bg-cover rounded-[50%]" />
                  <img src={logo} alt="logo" className="ss:-mt-20 ss:mb-4 -mt-10 -ml-3 mb-1 ss:w-[40px] ss:h-[40px] w-[30px] h-[30px] border-2 border-yellow-300 border-opacity-10 bg-center bg-cover rounded-[50%]" />
                </div>
                
                <div className="flex flex-col items-center text-center rounded-[10px] ss:mt-2 sm:mt-8 mt-1 ss:max-w-[400px]">
                  <h4 className="font-poppins ss:font-bold font-semibold ss:text-[16px] sm:text-[20px] ss:w-[400px] w-[150px] text-[12px] ss:leading-[25px] text-white">
                    {card.name}
                  </h4>
                  <p className="font-poppins font-normal ss:text-[12px] sm:text-[14px] text-[10px] ss:leading-[25px] text-white"> 
                    {card.title}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

    </section>
  )
};


export default TeamPlayers;
