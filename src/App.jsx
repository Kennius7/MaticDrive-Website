import styles from "./style";
import { ArticlesForm, Article, Register, Footer, Navbar } from "./components";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import AboutUsPage from "./pages/AboutUsPage";
import TeamPage from "./pages/TeamPage";
import ContactUsPage from "./pages/ContactUsPage";
import BlogPage from "./pages/BlogPage";
import SignInPage from "./pages/SignInPage";



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
    <BrowserRouter>
      <div className={`bg-primary w-full relative overflow-hidden`}>

        <div className={`bg-primary w-[100%] duration-1000 px-4 ${scrolled ? "flex fixed z-[12] justify-between w-full duration-1000" : ""} ${styles.navPaddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar />
          </div>
        </div>

        <Routes>
          <Route path="/" element={<Homepage />} exact />
          <Route path="/aboutus" element={<AboutUsPage />} exact />
          <Route path="/team" element={<TeamPage />} exact />
          <Route path="/blog" element={<BlogPage />} exact />
          <Route path="/contactus" element={<ContactUsPage />} exact />
          <Route path="/signup" element={<Register />} exact />
          <Route path="/signin" element={<SignInPage />} exact />
          <Route path="/createarticle" element={<ArticlesForm />} exact />
          <Route path="/article/:id" element={<Article />} exact />
        </Routes>

        <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Footer />
          </div>
        </div>

      </div>
    </BrowserRouter>

    
  )

};

export default App;
