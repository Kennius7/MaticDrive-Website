import { MaticVid1 } from "../assets";


const Banner = () => {
  return (
    <div id="home" className={`block justify-center items-center relative mb-20`}>
        <video src={MaticVid1} className="w-full" width="1000" height="500" autoPlay muted loop playsinline />
        <div className="absolute w-full top-1/3">
            <div className="font-poppins font-semibold md:text-[90px] ss:text-[75px] text-[40px] text-white text-opacity-50 text-center ">MatiCDrive</div>
            <div className="font-poppins font-bold md:text-[50px] ss:text-[30px] text-[16px] text-white ss:tracking-widest text-opacity-80 text-center">THE FUTURE OF RIDERLESS CARS IN AFRICA</div>
        </div>
    </div>
  );
};

export default Banner;
