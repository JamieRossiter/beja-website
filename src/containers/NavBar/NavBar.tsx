import React from "react";
import styles from "./NavBar.module.css";
import { Burger } from "../../subcomponents/Burger/Burger";

export const NavBar = (props: { scrollPos: number }) => {

    const [isBurgerActivated, setBurgerActivated] = React.useState<boolean>(false);
    const [isBurgerOpen, setBurgerOpen] = React.useState<boolean>(false);

    const handleWindowResize = (): void => {
        if(window.innerWidth <= 1200){
            setBurgerActivated(true);
        } else {
            setBurgerActivated(false);
            setBurgerOpen(false);
        }
    }

    const toggleBurgerMenu = (): void => {
        setBurgerActivated(true);
        setBurgerOpen(!isBurgerOpen);
    }

    const anchorToggleBurgerMenu = (): void => {
        if(isBurgerOpen){
            toggleBurgerMenu();
        }
    }

    // Handle window width
    React.useEffect(() => {
        handleWindowResize();
        window.addEventListener("resize", handleWindowResize);
        return () => {
            window.removeEventListener("resize", handleWindowResize);
        }
    },[])

    return(
        <>
            <div className={styles.parent}>
                <div onClick={() => { document.body.scrollTo(0, 0) }} className={styles.logoContainer}>
                    <img className={props.scrollPos > 300 && !isBurgerOpen ? styles.logoShow : styles.logoHide} src="./img/beja_logo.png" />
                </div>
                <div className={isBurgerOpen || !isBurgerActivated ? styles.containerOpen : styles.containerClose}>
                    <div className={isBurgerOpen ? styles.pagesOpen : styles.pagesClose }>
                        <a onClick={anchorToggleBurgerMenu} href="#faqs">FAQs</a>
                        <a onClick={anchorToggleBurgerMenu} href="#contact" >Contact</a>
                        <a onClick={anchorToggleBurgerMenu} href="#packages" >Pricing</a>
                        <a onClick={anchorToggleBurgerMenu} href="#portfolio-carousel" >Folio</a>
                        <a onClick={anchorToggleBurgerMenu} href="#services" >About</a>
                    </div>
                </div>
                <div className={isBurgerOpen ? styles.burgerContainerOpen : styles.burgerContainerClose}>
                    <Burger isBurgerOpen={isBurgerOpen} toggleBurgerMenu={toggleBurgerMenu} />
                </div>
            </div>
        </>
    )    
}