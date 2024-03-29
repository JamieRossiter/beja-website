import React from "react";
import styles from "./App.module.css";
import "./index.css";

import { NavBar } from "./containers/NavBar/NavBar";
import { Landing } from "./containers/Landing/Landing";
import { Services } from "./containers/Services/Services";
import { Profile } from "./components/Profile/Profile";
import { Packages } from "./containers/Packages/Packages";
import { Contact } from "./containers/Contact/Contact";
import { FAQs } from "./containers/FAQs/FAQs";
import { Branding } from "./containers/Branding/Branding";
import { Footer } from "./containers/Footer/Footer";
import { PortfolioCarousel } from "./containers/PortfolioCarousel/PortfolioCarousel";

function App() {

  const [scrollPosition, setScrollPosition] = React.useState<number>(0);
  const [windowWidth, setWindowWidth] = React.useState<number>(window.innerWidth);

  // Handle scroll
  React.useEffect(() => {
    document.body.addEventListener("scroll", handleScroll);
    return () => {
        document.body.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = (): void => {
    setScrollPosition(document.body.scrollTop);
  };

  // Handle window width
  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => {
        window.removeEventListener("resize", handleWindowResize);
    }
  },[])

  const handleWindowResize = (): void => {
    setWindowWidth(window.innerWidth);
  }

  return (
    <>
      <div className={styles.navBarContainer}>
        <NavBar scrollPos={scrollPosition} windowWidth={windowWidth} />
      </div>
      <div className={styles.landingContainer}>
        <Landing />
      </div>
      <div id="services" className={styles.servicesContainer}>
        <Services scrollPos={scrollPosition} />
      </div>
      <div>
        <Profile 
          imgName="img/belinda_headshot" 
          header="I'm Belinda" 
          subheader="the designer" 
          color="#FF0082"
          skills={["UX Design", "Graphic Comms"]}
          isInverted={false}
          scrollPosTarget={800}
          scrollPos={scrollPosition}
        >
          A graduated graphic designer with a minor in UI and UX design. I have industry marketing experience under my belt and a passion for aesthetics and functional design. Here to design your dreams - big or small.
        </Profile>
        <Profile 
          imgName="img/jamie_headshot" 
          header="And I'm Jamie" 
          subheader="the developer" 
          color="#0057F0"
          skills={["Web Development", "HTML, CSS, JS"]}
          isInverted={true}
          scrollPosTarget={1100}
          scrollPos={scrollPosition}
        >
          I have a strong foundation in technical web development stemming from my software engineering qualifications. For me, building digital experiences is a passion, not a job.
        </Profile>
      </div>
      <div id="portfolio-carousel" className={styles.portfolioContainer}>
        <PortfolioCarousel windowWidth={windowWidth} />
      </div>
      <div id="packages" className={styles.packagesContainer}>
        <Packages scrollPos={scrollPosition} windowWidth={windowWidth} />
      </div>
      <div id="branding" className={styles.brandingContainer}>
        <Branding windowWidth={windowWidth} scrollPos={scrollPosition} />
      </div>
      <div id="contact" className={styles.contactContainer}>
        <Contact scrollPos={scrollPosition} />
      </div>
      {/* <div id="faqs" className={styles.faqsContainer}>
        <FAQs scrollPos={scrollPosition} />
      </div> */}
      <div className={styles.footerContainer}>
        <Footer />
      </div>

    </>
  );
}

export default App;
