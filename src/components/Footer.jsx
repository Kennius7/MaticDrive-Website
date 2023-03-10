import styles from "../style";
import { logo } from "../assets";
import { socialMedia } from "../constants";



const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col justify-center items-center`}>
    <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
      
      <div className="flex-[1] flex flex-col justify-start">
        <img src={logo} alt="Matic-Drive-Logo" className="w-[200px] h-[100px] object-contain"/>
      </div>

      <div className="font-poppins font-normal text-[15px] leading-[27px] text-primary text-center">
        Copyright Ⓒ 2022 MaticDrive. All Rights Reserved.
      </div>
    </div>

    <div className="flex flex-row md:mt-10 mt-6 feature-card py-6 px-10 rounded-lg">
      {socialMedia.map((social, index) => (
        <img
          key={social.id}
          src={social.icon}
          alt={social.id}
          className={`w-[21px] h-[21px] object-contain cursor-pointer ${
            index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
          }`}
          onClick={() => window.open(social.link)}
        />
      ))}
    </div>
  </section>
);

export default Footer;
