import { BsFacebook, BsInstagram } from "react-icons/bs";
import { FooterGraphic } from "../../subcomponents/FooterGraphic/FooterGraphic";
import styles from "./Footer.module.css";

export const Footer = () => {
    return(
        <>
            <div className={styles.parent}>
                <div className={styles.textSocialsContainer}>
                    <p className={styles.text}>Stay in touch.</p>
                    <div className={styles.socialsContainer}>
                        <a href="https://www.instagram.com/bejastudios/" target="_blank" className={styles.social}><BsInstagram size="35px" color="white" /></a>
                        <a className={styles.social}><BsFacebook size="35px" color="white" /></a>
                    </div>
                </div>
                <div className={styles.footerGraphicsContainer}>
                    {/* <div className={styles.footerGraphic}>
                        <FooterGraphic imgName="" bgColor="#0150E8" />
                    </div> */}
                    {/* <div className={styles.footerGraphic}>
                        <FooterGraphic imgName={process.env.PUBLIC_URL + "/img/beja_logo_icon.webp"} bgColor="white" />
                    </div> */}
                </div>
            </div>
        </>
    )
}