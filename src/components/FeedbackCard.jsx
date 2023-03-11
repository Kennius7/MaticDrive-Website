import { quotes } from "../assets";


const FeedbackCard = ({ name, title, img }) => (
  <div className="flex justify-center items-center flex-col rounded-[15px] p-3">
    <img src={img} alt={name} className="ss:w-[400px] ss:h-[400px] w-[300px] h-[300px] rounded-[10px]" />
    <div className="flex flex-col ss:w-[400px] w-[300px] items-center rounded-[10px] mt-2">
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
