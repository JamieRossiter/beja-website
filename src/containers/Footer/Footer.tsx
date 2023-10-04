import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";
import { FooterGraphic } from "../../subcomponents/FooterGraphic/FooterGraphic";
import styles from "./Footer.module.css";

export const Footer = () => {
    return(
        <>
            <div className={styles.parent}>
                <div className={styles.textSocialsContainer}>
                    <p className={styles.text}>Stay in touch.</p>
                    <div className={styles.socialsContainer}>
                        <a className={styles.social}><BsLinkedin size="35px" color="black" /></a>
                        <a className={styles.social}><BsFacebook size="35px" color="black" /></a>
                        <a className={styles.social}><BsInstagram size="35px" color="black" /></a>
                    </div>
                </div>
                <div className={styles.footerGraphicsContainer}>
                    <div className={styles.footerGraphic}>
                        <FooterGraphic imgName="" bgColor="#0150E8" />
                    </div>
                    <div className={styles.footerGraphic}>
                        <FooterGraphic imgName="./img/beja_logo_icon.png" bgColor="black" />
                    </div>
                </div>
            </div>
        </>
    )
}