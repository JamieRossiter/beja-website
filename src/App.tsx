import styles from "./App.module.css";

import { NavBar } from "./containers/NavBar/NavBar";
import { Landing } from "./containers/Landing/Landing";
import { Services } from "./containers/Services/Services";
import { Profile } from "./components/Profile/Profile";
import { Packages } from "./containers/Packages/Packages";
import { Contact } from "./containers/Contact/Contact";

function App() {
  return (
    <>
      <div className={styles.navBarContainer}>
        <NavBar />
      </div>
      <div className={styles.landingContainer}>
        <Landing />
      </div>
      <div className={styles.servicesContainer}>
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
          skills={["Software Engineering", "Game Development"]}
          isInverted={true}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
        </Profile>
      </div>
      <div className={styles.packagesContainer}>
        <Packages />
      </div>
      <div className={styles.contactContainer}>
        <Contact />
      </div>
    </>
  );
}

export default App;
