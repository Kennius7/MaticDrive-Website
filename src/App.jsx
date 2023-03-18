import styles from "./style";
import { AboutUs, Partnership, Footer, Navbar, TeamPlayers, Hero, Banner, ContactUs, Features } from "./components";
import { useState, useEffect } from "react";



const App = () => {

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])


  return (
    <div className={`bg-primary w-full relative overflow-hidden`}>
      <div className={`bg-primary w-[100%] duration-1000 px-4 ${scrolled ? "flex fixed z-[12] justify-between w-full duration-1000" : ""} ${styles.navPaddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

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
          <AboutUs />
          <Features />
          <TeamPlayers />
          <Partnership />
          <ContactUs />
          <Footer />
        </div>
      </div>
    </div>
  )

};

export default App;
