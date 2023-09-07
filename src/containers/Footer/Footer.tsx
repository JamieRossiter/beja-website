import { FooterGraphic } from "../../subcomponents/FooterGraphic/FooterGraphic";
import styles from "./Footer.module.css";

export const Footer = () => {
    return(
        <>
            <div className={styles.parent}>
                <div className={styles.textSocialsContainer}>
                    <p className={styles.text}>Stay in touch.</p>
                    <div className={styles.socialsContainer}>
                        <a><img className={styles.social} src="./img/linkedin.png" /></a>
                        <a><img className={styles.social} src="./img/facebook.png" /></a>
                        <a><img className={styles.social} src="./img/instagram.png" /></a>
                    </div>
                </div>
                <div className={styles.footerGraphicsContainer}>
                    <div className={styles.footerGraphic}>
                        <FooterGraphic imgName="" bgColor="#0150E8" />
                    </div>
                    <div className={styles.footerGraphic}>
                        <FooterGraphic imgName="./img/beja_logo_icon.png" bgColor="white" />
                    </div>
                </div>
            </div>
        </>
    )
}