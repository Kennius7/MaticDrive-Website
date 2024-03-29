import { MaticVid1, MaticVid2 } from "../assets";


const Banner = () => {
  return (
    <div className={`justify-center items-center relative mb-6`}>
        <video src={MaticVid1} className="w-full ss:block hidden" width="1000" height="500" autoPlay muted loop playsInline />
        <img src={MaticVid2} className={`ss:hidden block w-[100%] h-[220px]`} alt="Banner Photo" />
        <div className="absolute w-full top-1/3">
            <div className="font-poppins font-semibold md:text-[90px] ss:text-[75px] text-[40px] text-white text-opacity-50 text-center ">
              MatiCDrive
            </div>
            <div className="font-poppins font-bold md:text-[50px] ss:text-[30px] text-[16px] text-white ss:tracking-widest text-opacity-80 text-center">
              THE FUTURE OF AV IN AFRICA
            </div>
        </div>
    </div>
  );
};

export default Banner;
