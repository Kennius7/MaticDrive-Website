import React from 'react'
import styles from "../style";
import { Hero, Banner, Features, Partnership } from "../components";



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
            <Partnership />
          </div>
        </div>

    </div>
  )
}

export default Homepage