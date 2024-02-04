import React from "react";
import styles from "./NavBar.module.css";
import { Burger } from "../../subcomponents/Burger/Burger";

export const NavBar = (props: { scrollPos: number, windowWidth: number }) => {

    const [isBurgerActivated, setBurgerActivated] = React.useState<boolean>(false);
    const [isBurgerOpen, setBurgerOpen] = React.useState<boolean>(false);
    const [currentSection, setCurrentSection] = React.useState<number>(-1);

    // Handle change in window width
    React.useEffect(() => {
        if(props.windowWidth <= 1200){
            setBurgerActivated(true);
        } else {
            setBurgerActivated(false);
            setBurgerOpen(false);
        }
    }, [props.windowWidth])

    // Handle change in scroll position for boldening menu links
    React.useEffect(() => {
        if(props.scrollPos < 300) setCurrentSection(-1);
        else if(props.scrollPos > 300 && props.scrollPos < 2360) setCurrentSection(0);
        else if(props.scrollPos > 2360 && props.scrollPos < 3100) setCurrentSection(1);
        else if(props.scrollPos > 3100 && props.scrollPos < 4100) setCurrentSection(2);
        else if(props.scrollPos > 4000 && props.scrollPos < 4500) setCurrentSection(3);
        // else if(props.scrollPos > 4500 && props.scrollPos < 4900) setCurrentSection(4);
        else if(props.scrollPos > 4500) setCurrentSection(-1);
    }, [props.scrollPos])

    const toggleBurgerMenu = (): void => {
        setBurgerActivated(true);
        setBurgerOpen(!isBurgerOpen);
    }

    const anchorToggleBurgerMenu = (): void => {
        if(isBurgerOpen){
            toggleBurgerMenu();
        }
    }

    const sections = [
        <a style={{fontWeight: currentSection === 0 ? "bold" : "normal"}} onClick={anchorToggleBurgerMenu} href="#services" >About</a>,
        <a style={{fontWeight: currentSection === 1 ? "bold" : "normal"}} onClick={anchorToggleBurgerMenu} href="#portfolio-carousel" >Folio</a>,
        <a style={{fontWeight: currentSection === 2 ? "bold" : "normal"}} onClick={anchorToggleBurgerMenu} href="#packages" >Pricing</a>,
        <a style={{fontWeight: currentSection === 3 ? "bold" : "normal"}} onClick={anchorToggleBurgerMenu} href="#contact" >Contact</a>,
        // <a style={{fontWeight: currentSection === 4 ? "bold" : "normal"}} onClick={anchorToggleBurgerMenu} href="#faqs">FAQs</a>
    ]

    return(
        <>
            <div className={styles.parent}>
                <div onClick={() => { document.body.scrollTo(0, 0) }} className={styles.logoContainer}>
                    <img className={props.scrollPos > 200 && !isBurgerOpen ? styles.logoShow : styles.logoHide} src={process.env.PUBLIC_URL + "/img/beja_logo.jpg"} />
                </div>
                <div className={isBurgerOpen || !isBurgerActivated ? styles.containerOpen : styles.containerClose}>
                    <div className={isBurgerOpen ? styles.pagesOpen : styles.pagesClose }>
                        {sections.reverse()}
                    </div>
                </div>
                <div className={isBurgerOpen ? styles.burgerContainerOpen : styles.burgerContainerClose}>
                    <Burger isBurgerOpen={isBurgerOpen} toggleBurgerMenu={toggleBurgerMenu} />
                </div>
            </div>
        </>
    )    
}