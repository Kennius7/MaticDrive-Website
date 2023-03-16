import { layout } from "../style";
import { socialMedia } from "../constants";




const Footer = () => (
  <section className={`${layout.section} flex-col justify-center items-center`}>
    <div className="md:mt-40 mt-20 md:pt-16 pt-10 w-full flex justify-between items-center md:flex-row flex-col border-t-[1px] border-t-[#3F3E45]">
     
      <div className="flex flex-row rounded-lg">
        {socialMedia.map((social, index) => (
          <img
            key={social.id}
            src={social.icon}
            alt={social.id}
            className={`w-[35px] h-[35px] object-contain cursor-pointer ${
              index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
            }`}
            onClick={() => window.open(social.link)}
          />
        ))}
      </div>

      <div className="font-poppins font-normal text-[15px] text-white text-center md:mt-0 mt-6">
        Copyright Ⓒ 2023 MaticDrive. All Rights Reserved.
      </div>

    </div>

    
  </section>
);

export default Footer;
