import styles from "../Landing/Landing.module.css";
import { Button } from "../../subcomponents/Button/Button";

export const Landing = () => {
    return(
        <>
            <div className={styles.parent}>
                <div className={styles.container}>
                    <img src={process.env.PUBLIC_URL + "/img/beja_logo_icon.jpg"} className={styles.logoMobile} />
                    <img src={process.env.PUBLIC_URL + "/img/beja_logo.jpg"} className={styles.logo} />
                    <img src={process.env.PUBLIC_URL + "/img/beja_logo_text_large.jpg"} className={styles.logoTextMobile} />
                    <div className={styles.textButtonContainer}>
                        <p className={styles.text}><span className={styles.waveHand}>👋</span> We’re a Melbourne-based web design duo, committed to developing sleek and user-friendly websites tailored to your business.</p>
                        <div className={styles.buttonContainer}>
                            <Button text="Enquire Now" href="#contact" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

