import styles from "./App.module.css";
import "./index.css";

import { NavBar } from "./containers/NavBar/NavBar";
import { Landing } from "./containers/Landing/Landing";
import { Services } from "./containers/Services/Services";
import { Profile } from "./components/Profile/Profile";
import { Packages } from "./containers/Packages/Packages";
import { Contact } from "./containers/Contact/Contact";
import { FAQs } from "./containers/FAQs/FAQs";
import { Footer } from "./containers/Footer/Footer";
import { PortfolioCarousel } from "./containers/PortfolioCarousel/PortfolioCarousel";

function App() {
  return (
    <>
      <div className={styles.navBarContainer}>
        <NavBar />
      </div>
      <div className={styles.landingContainer}>
        <Landing />
      </div>
      <div id="services" className={styles.servicesContainer}>
        <Services />
      </div>
      <div>
        <Profile 
          imgName="./img/belinda.png" 
          header="I'm Belinda" 
          subheader="the designer" 
          color="#FF0064CC"
          skills={["UX Design", "Graphic Comms"]}
          isInverted={false}
        >
          A certified graphic designer with a minor in UI design. Industry marketing experience. I have a passion for aesthetics and functional design. Here to design your dreams - big or small.
        </Profile>
        <Profile 
          imgName="./img/jamie.png" 
          header="And I'm Jamie" 
          subheader="the engineer" 
          color="#0150E8"
          skills={["Web Development", "HTML, CSS, JS"]}
          isInverted={true}
        >
          I have a strong foundation in technical web development stemming from my software engineering qualifications. For me, building digital experiences is a passion, not a job.
        </Profile>
      </div>
      <div id="portfolio-carousel" className={styles.portfolioContainer}>
        <PortfolioCarousel />
      </div>
      <div id="packages" className={styles.packagesContainer}>
        <Packages />
      </div>
      <div id="contact" className={styles.contactContainer}>
        <Contact />
      </div>
      <div className={styles.faqsContainer}>
        <FAQs />
      </div>
      <div className={styles.footerContainer}>
        <Footer />
      </div>
    </>
  );
}

export default App;
