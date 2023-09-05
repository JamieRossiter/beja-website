import { Button } from "../../subcomponents/Button/Button";
import styles from "./Banner.module.css";

export const Banner = () => {
    return(
        <>
            <div className={styles.container}>
                <p className={styles.text}>We offer branding and identity too</p>
                <div className={styles.buttonContainer}>
                    <Button text="Enquire Now" />
                </div>
            </div>
        </>
    )
}