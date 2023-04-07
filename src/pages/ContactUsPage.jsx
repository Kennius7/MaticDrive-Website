import React from 'react'
import styles from "../style";
import { ContactUs } from "../components";



function ContactUsPage() {
  return (
    <div>
        <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
                <ContactUs />
            </div>
        </div>
    </div>
  )
}

export default ContactUsPage