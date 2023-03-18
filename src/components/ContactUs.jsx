import { useState, useRef } from "react";
import styles, { layout } from "../style";
import emailjs from "@emailjs/browser";



const ContactUs = () => {

const form =useRef();

const [buttonText, setButtonText] = useState("Send Message");
const [style, setStyle] = useState("default");
const [errorStyle, setErrorStyle] = useState("error-default");
const sentStyle = "sent";
const rejectStyle = "reject";



const handleSubmit = (e) => {
  e.preventDefault();
  setButtonText("Sending...")

  emailjs.sendForm('service_eeeosp7', 'template_ltnvx66', form.current, 'h-F7iEPReaPmY032e')
    .then((result) => {
        console.log(result.text, result.status);
        setTimeout(() => {
          setStyle("sent")
          setButtonText("Message Sent")
        }, 3000);
        setTimeout(() => {
          e.target.reset();
          setStyle("default")
          setButtonText("Send Message")
        }, 7000);
    }, (error) => {
        console.log(error.text, error.status);
        setTimeout(() => {
          setErrorStyle("reject")
          setButtonText("Message Not Sent");
        }, 3000);
        setTimeout(() => {
          // e.target.reset();
          setButtonText("Please Try Again")
        }, 7000);
        setTimeout(() => {
          setErrorStyle("error-default")
          setButtonText("Send Message")
        }, 10000);
    });
  };



  return (
    <section id="contact" className={`my-20 ${layout.section}`}>
      <div className="items-center w-full">

        <div className="flex flex-col justify-center items-center my-3 pb-4 sm:mb-16">
          <div className={`text-center ${styles.heading2}`}>Get In Touch</div>
          <div className="text-white tracking-tighter">---------------------------------------------------</div>
        </div>

        <div className="flex ss:flex-row-reverse flex-col justify-between">
          <div className="ss:w-[40%] w-[100%]">
            <p className={`${styles.paragraph} text-center ss:text-left ss:max-w-[450px] sm:mt-8 sm:ml-8 lg:mt-12 lg:ml-12 ss:leading-[40px] max-w-[500px] mb-4`}>
              You can reach us at this email address: <a href="mailto:admin@maticdrive.com" target="_blank"><span className="border-b border-transparent text-gradient hover:border-yellow-300">admin@maticdrive.com</span></a> <br /> <br />
              You can also call us, or click <a href="https://wa.me/+2348055549979" target="_blank" ><span className="border-b border-transparent text-gradient hover:border-yellow-300 text-[18px]">HERE</span></a> to chat us on Whatsapp. <br /> <br />
              Alternatively, you can fill this contact form to send us a message! 
            </p>
          </div>

          <div className="bg-white rounded-[8px] py-3 ss:w-[58%] w-[100%]">
            <form ref={form} className="form__content w-[100%] h-[100%]" onSubmit={handleSubmit}>
              
              <div className="form__box">
                <input name="fullName" className="form__input " type="text" placeholder="Full Name" required />
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
                <input name="subject" className="form__input" type="text" placeholder="Subject" />
                <div className="form__shadow"></div>
              </div>
              <div className="form__box h-[100px]">
                <textarea name="message" className="form__messageInput" placeholder="Message" required ></textarea>
                <div className="form__messageShadow"></div>
              </div>
              <div className="form__button">
                <button 
                  className={`form__submit ${style === sentStyle ? "sent" : ""} ${errorStyle === rejectStyle ? "reject" : ""}`} 
                  type="submit">
                  {buttonText}
                </button>
                <div className="form__shadow"></div>
              </div>
        
            </form>
          </div>
        </div>
        

      </div>
    </section>
  )
}


export default ContactUs;
