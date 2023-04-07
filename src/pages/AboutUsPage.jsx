import React from 'react';
import styles from "../style";
import { AboutUs } from "../components";


function AboutUsPage() {
  return (
    <div>
        <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
                <AboutUs />
            </div>
        </div>
    </div>
  )
}

export default AboutUsPage