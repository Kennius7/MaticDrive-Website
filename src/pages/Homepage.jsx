import React from 'react'
import styles from "../style";
import { Hero, Banner, Features, Partnership } from "../components";
import { microsoftBanner } from "../assets";



function Homepage() {
  return (
    <div>

        <div className={`bg-primary ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <Banner />
          </div>
        </div>

        <div className={`bg-primary ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <Hero />
          </div>
        </div>

        <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Features />
          </div>
        </div>

        <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth} flex justify-center items-center`}>
            <img src={microsoftBanner} className="w-[320px] xs:w-[500px] ss:w-[900px]" />
          </div>
        </div>

        <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Partnership />
          </div>
        </div>

    </div>
  )
}

export default Homepage