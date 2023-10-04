import { Button } from "../../subcomponents/Button/Button";
import styles from "./Banner.module.css";

export const Banner = () => {
    return(
        <>
            <div className={styles.container}>
                <div className={styles.textContainer}>
                    <p className={styles.text}>We offer branding and identity too</p>
                </div>
                <div className={styles.buttonContainer}>
                    <Button text="Enquire Now" href="#contact" isPrimary bgColor="white" textColor="#FD3181" />
                </div>
            </div>
        </>
    )
}