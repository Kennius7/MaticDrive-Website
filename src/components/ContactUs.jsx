import { useState, useRef } from "react";
import styles, { layout } from "../style";
import emailjs from "@emailjs/browser";



const ContactUs = () => {

const form =useRef();

const [buttonText, setButtonText] = useState("Send Message");


const handleSubmit = (e) => {
  e.preventDefault();

  emailjs.sendForm('service_eeeosp7', 'template_ltnvx66', form.current, 'h-F7iEPReaPmY032e')
    .then((result) => {
        console.log(result.text, result.status);
        setButtonText("Message Sent");
        setTimeout(() => {
          e.target.reset();
          setButtonText("Send Message")
        }, 10000);
    }, (error) => {
        console.log(error.text, error.status);
        setButtonText("Message Not Sent");
        setTimeout(() => {
          setButtonText("Please Try Again")
        }, 8000);
        setTimeout(() => {
          setButtonText("Send Message")
        }, 14000);
    });
  };



  return (
    <section className={`my-20 ${layout.section}`} id="connect">
      <div className="items-center w-full relative z-[2]">
        <div className={`text-center ${styles.heading2}`}>Get In Touch</div>
        <form ref={form} className="w-[100%] h-[100%]" onSubmit={handleSubmit}>
          <div>
            <div className="my-4 relative z-[2]">
              <input name="firstName" className="w-[100%] h-[40px] rounded-lg pl-4 bg-dimWhite placeholder-gray-500 border-2 border-blue-500 border-solid" type="text" placeholder="First Name" required />
            </div>
            <div className="my-4 relative z-[2]">
              <input name="lastName" className="w-[100%] h-[40px] rounded-lg pl-4 bg-dimWhite placeholder-gray-500 border-2 border-blue-500 border-solid" type="text" placeholder="Last Name" required/>
            </div>
            <div className="my-4 relative z-[2]">
              <input name="email" className="w-[100%] h-[40px] rounded-lg pl-4 bg-dimWhite placeholder-gray-500 border-2 border-blue-500 border-solid" type="email" placeholder="Email Address" required />
            </div>
            <div className="my-4 relative z-[2]">
              <input name="phoneNumber" className="w-[100%] h-[40px] rounded-lg pl-4 bg-dimWhite placeholder-gray-500 border-2 border-blue-500 border-solid" type="tel" placeholder="Phone No." />
            </div>
            <div className="my-4 relative z-[2]">
              <input name="subject" className="w-[100%] h-[40px] rounded-lg pl-4 bg-dimWhite placeholder-gray-500 border-2 border-blue-500 border-solid" type="text" placeholder="Message Subject" />
            </div>
            <div className="my-4 flex flex-col justify-center items-center">
              <textarea name="message" className="w-[100%] h-[100px] rounded-lg pl-4 pt-2 mb-6 bg-dimWhite placeholder-gray-500 border-2 border-blue-500 border-solid z-[2]" placeholder="Message" required ></textarea>
              <button className="w-[80%] h-[50px] bg-black rounded-lg my-4 text-center justify-center items-center text-white font-semibold z-[2]" type="submit"><span>{buttonText}</span></button>
            </div>
          
          </div>
        </form>

        {/* gradient start */}
        <div className="absolute z-[1] w-[20%] h-[20%] right-[50%] bottom-40 blue__gradient" />
        <div className="absolute z-[1] w-[20%] h-[20%] right-[40%] bottom-40 blue__gradient" />
        <div className="absolute z-[1] w-[20%] h-[20%] right-[50%] bottom-40 blue__gradient" />
        <div className="absolute z-[1] w-[20%] h-[20%] right-[40%] bottom-40 blue__gradient" />
        {/* gradient end */}
      </div>
    </section>
  )
}


export default ContactUs;
