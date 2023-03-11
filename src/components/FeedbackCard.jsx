import { quotes } from "../assets";


const FeedbackCard = ({ name, title, img }) => (
  <div className="flex justify-center flex-col px-6 py-6 rounded-[15px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card2">
    <img src={img} alt={name} className="w-[300px] h-[300px] rounded-[15px]" />
    <div className="flex flex-col w-[100%] feedback-card2">
      <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-primary">
        {name}
      </h4>
      <p className="font-poppins font-normal text-[16px] leading-[24px] text-primary">
        {title}
      </p>
    </div>
  </div>
);


export default FeedbackCard;
