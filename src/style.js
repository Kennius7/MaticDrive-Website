const styles = {
  boxWidth: "xl:max-w-[1280px] w-full",

  heading2: "font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full",
  headingPart: "font-poppins font-semibold ss:text-[45px] sm:text-[40px] md:text-[62px] text-[36px] lg:tracking-normal tracking-tighter text-white ss:leading-[60px] leading-[50px] w-full",
  headingFeatures: "font-poppins font-semibold xs:text-[42px] text-[27px] xs:tracking-wide tracking-tighter text-white xs:leading-[45px] leading-[50px] w-full",
  paragraph: "font-poppins font-normal text-white text-[18px] leading-[30.8px]",
  paragraphPartner: "font-poppins font-normal text-white ss:text-[25px] text-[18px] sm:leading-[37px] leading-[30.8px]",
  paragraphFeatures: "font-poppins font-normal text-white ss:text-[18px] text-[15px] ss:leading-[35px] leading-[25px] ss:tracking-wider tracking-normal",

  flexCenter: "flex justify-center items-center",
  flexStart: "flex justify-center items-start",

  navPaddingX: "md:px-16 px-0",
  paddingX: "sm:px-16 px-6",
  paddingY: "sm:py-16 py-6",
  padding: "sm:px-16 px-6 sm:py-12 py-4",
  paddingPart: "sm:px-8 px-6 md:py-12 sm:py-8 py-4",

  marginX: "sm:mx-16 mx-6",
  marginY: "sm:my-16 my-6",
  marginYPartner: "sm:my-60 my-6",
};

export const layout = {
  section: `flex md:flex-row flex-col ${styles.paddingY}`,
  sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,

  sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
  sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,

  sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
};

export default styles;
