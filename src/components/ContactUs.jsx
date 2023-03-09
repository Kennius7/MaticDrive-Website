import { useState } from "react";
import styles, { layout } from "../style";
import { contactImg } from "../assets";


const ContactUs = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  }
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
      setFormDetails({
        ...formDetails,
        [category]: value
      })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(formDetails),
    });
    setButtonText("Send");
    let result = await response.json();
    setFormDetails(formInitialDetails);
    if (result.code === 200) {
      setStatus({ success: true, message: 'Message sent successfully'});
    } else {
      setStatus({ success: false, message: 'Something went wrong, please try again later.'});
    }
  };

  return (
    <section className={`my-20 ${layout.section}`} id="connect">
      <div className="items-center w-full relative z-[2]">
        <div className={`text-center text-white ${styles.heading2}`}>Get In Touch</div>
        <form className="w-[100%] h-[100%]" onSubmit={handleSubmit}>
          <div>
            <div className="my-4 relative z-[2]">
              <input className="w-[100%] h-[40px] rounded-lg pl-4 bg-black" type="text" value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)} />
            </div>
            <div className="my-4 relative z-[2]">
              <input className="w-[100%] h-[40px] rounded-lg pl-4 bg-black" type="text" value={formDetails.lasttName} placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)}/>
            </div>
            <div className="my-4 relative z-[2]">
              <input className="w-[100%] h-[40px] rounded-lg pl-4 bg-black" type="email" value={formDetails.email} placeholder="Email Address" onChange={(e) => onFormUpdate('email', e.target.value)} />
            </div>
            <div className="my-4 relative z-[2]">
              <input className="w-[100%] h-[40px] rounded-lg pl-4 bg-black" type="tel" value={formDetails.phone} placeholder="Phone No." onChange={(e) => onFormUpdate('phone', e.target.value)}/>
            </div>
            <div className="my-4 flex flex-col items-center">
              <textarea className="w-[100%] h-[100px] rounded-lg pl-4 mb-6 bg-black z-[2]" value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
              <div className="w-[80%] h-[50px] pt-2 bg-black rounded-lg my-4 text-center text-white font-semibold z-[2]" type="submit"><span>{buttonText}</span></div>
            </div>
            {status.message && <div>
                                  <p className={status.success === false ? "danger" : "success"}>
                                    {status.message}
                                  </p>
                                </div>}
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
