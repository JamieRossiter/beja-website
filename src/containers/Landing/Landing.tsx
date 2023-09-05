import styles from "../Landing/Landing.module.css";
import { Button } from "../../subcomponents/Button/Button";

export const Landing = () => {
    return(
        <>
            <div className={styles.parent}>
                <div className={styles.container}>
                    <img src="./img/beja_logo.png" className={styles.logo} />
                    <p className={styles.text}>Melbourne-based web design and branding duo. SquareSpace experts.</p>
                    <div className={styles.buttonContainer}>
                        <Button text="Enquire Now" />
                    </div>
                </div>
                <div className={styles.container}></div>
            </div>
        </>
    );
}

