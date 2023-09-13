import React from "react";
import styles from "./NavBar.module.css";
import { Burger } from "../../subcomponents/Burger/Burger";

export const NavBar = () => {

    const [scrollPosition, setScrollPosition] = React.useState<number>(0);
    const [isBurgerActivated, setBurgerActivated] = React.useState<boolean>(false);
    const [isBurgerOpen, setBurgerOpen] = React.useState<boolean>(false);

    const handleScroll = (): void => {
        setScrollPosition(document.body.scrollTop);
    };

    const handleWindowResize = (): void => {
        if(window.innerWidth <= 835){
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

    // Handle scroll
    React.useEffect(() => {
        document.body.addEventListener("scroll", handleScroll);
        return () => {
            document.body.removeEventListener("scroll", handleScroll);
        };
    }, []);

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
                    <img className={scrollPosition > 78 && !isBurgerOpen ? styles.logoShow : styles.logoHide} src="./img/beja_logo.png" />
                </div>
                <div className={isBurgerOpen || !isBurgerActivated ? styles.containerOpen : styles.containerClose}>
                    <div className={isBurgerOpen ? styles.pagesOpen : styles.pagesClose }>
                        <a onClick={isBurgerOpen ? toggleBurgerMenu : ()=>{}} href="#contact" >Contact</a>
                        <a onClick={isBurgerOpen ? toggleBurgerMenu : ()=>{}} href="#packages" >Pricing</a>
                        <a onClick={isBurgerOpen ? toggleBurgerMenu : ()=>{}} href="#portfolio-carousel" >Folio</a>
                        <a onClick={isBurgerOpen ? toggleBurgerMenu : ()=>{}} href="#services" >About</a>
                    </div>
                </div>
                <div className={isBurgerOpen ? styles.burgerContainerOpen : styles.burgerContainerClose}>
                    <Burger isBurgerOpen={isBurgerOpen} toggleBurgerMenu={toggleBurgerMenu} />
                </div>
            </div>
        </>
    )    
}