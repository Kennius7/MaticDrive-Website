import styles from "../style";
import { MaticVid } from "../assets";


const Banner = () => {
  return (
    <div className={`block border border-yellow-600 border-solid justify-center items-center relative`}>
        <video src={MaticVid} className="w-full" width="1000" height="500" autoPlay muted loop />
        <div className="absolute w-full top-1/3">
            <div className="font-poppins font-semibold ss:text-[150px] text-center ss:mr-3 text-[50px] text-white text-opacity-50">MatiCDrive</div>
            <div className="font-poppins ss:text-[30px] font-bold text-center text-[15px] text-white tracking-widest text-gradient">THINK AUTOMATIC . THINK AFRICA</div>
        </div>
        
    </div>
  );
};

export default Banner;
