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
        }, 6000);
    }, (error) => {
        console.log(error.text, error.status);
        setButtonText("Message Not Sent");
        setTimeout(() => {
          e.target.reset();
          setButtonText("Please Try Again")
        }, 6000);
        setTimeout(() => {
          setButtonText("Send Message")
        }, 12000);
    });
  };



  return (
    <section id="contact" className={`my-20 ${layout.section}`}>
      <div className="items-center w-full">
      <div className="flex flex-col justify-center items-center my-6 pb-16">
        <div className={`text-center ${styles.heading2}`}>Get In Touch</div>
        <div className="text-white tracking-tighter">---------------------------------------------------</div>
      </div>
      
        <form ref={form} className="form__content w-[100%] h-[100%]" onSubmit={handleSubmit}>
          
            <div className="form__box">
              <input name="firstName" className="form__input " type="text" placeholder="First Name" required />
              <div className="form__shadow"></div>
            </div>
            <div className="form__box">
              <input name="lastName" className="form__input " type="text" placeholder="Last Name" required/>
              <div className="form__shadow"></div>
            </div>
            <div className="form__box">
              <input name="email" className="form__input " type="email" placeholder="Email Address" required />
              <div className="form__shadow"></div>
            </div>
            <div className="form__box">
              <input name="phoneNumber" className="form__input " type="tel" placeholder="Phone No." />
              <div className="form__shadow"></div>
            </div>
            <div className="form__box">
              <input name="subject" className="form__input " type="text" placeholder="Subject" />
              <div className="form__shadow"></div>
            </div>
            <div className="form__box h-[100px]">
              <textarea name="message" className="form__messageInput" placeholder="Message" required ></textarea>
              <div className="form__messageShadow"></div>
            </div>
            <div className="form__button">
              <button className="form__submit" type="submit">{buttonText}</button>
              <div className="form__shadow"></div>
            </div>
          
        </form>

        {/* gradient start */}
        <div className="absolute z-[0] opacity-10 w-[20%] h-[20%] right-[50%] bottom-40 blue__gradient" />
        <div className="absolute z-[0] opacity-10 w-[20%] h-[20%] right-[40%] bottom-40 blue__gradient" />
        <div className="absolute z-[0] opacity-10 w-[20%] h-[20%] right-[50%] bottom-40 blue__gradient" />
        <div className="absolute z-[0] opacity-10 w-[20%] h-[20%] right-[40%] bottom-40 blue__gradient" />
        {/* gradient end */}
      </div>
    </section>
  )
}


export default ContactUs;
