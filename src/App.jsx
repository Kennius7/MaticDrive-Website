import styles from "./style";
import { AboutUs, CardDeal, Clients, Partnership, Footer, Navbar, Stats, TeamPlayers, Hero, Banner, ContactUs, Features } from "./components";
import 'react-multi-carousel/lib/styles.css';


const App = () => (
  <div className="bg-primary w-full overflow-hidden absolute z-10">
    <div className={`${styles.navPaddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-indigo-500 ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Banner />
      </div>
    </div>

    <div className={`bg-indigo-500 ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>
    
    <div className={`bg-indigo-500 ${styles.paddingX} ${styles.flexCenter}`}>
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
);

export default App;
