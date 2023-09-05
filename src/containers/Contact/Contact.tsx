import { Button } from "../../subcomponents/Button/Button";
import { Input } from "../../subcomponents/Input/Input";
import styles from "./Contact.module.css";

export const Contact = () => {
    return(
        <>
            <div className={styles.parent}>
                <div className={styles.headerContainer}>
                    <p className={styles.header}>Sounds good?</p>
                    <p className={styles.subheader}>We'd love to hear from you.</p>
                </div>
                <div className={styles.inputContainer}>
                    <div className={styles.nameInputContainer}>
                        <Input placeholder="First name"/>
                        <Input placeholder="Last name" />
                    </div>
                    <div className={styles.emailInputContainer}>
                        <Input placeholder="Email"/>
                    </div>
                    <div className={styles.tellUsInputContainer}>
                        <Input isTextArea={true} placeholder="Tell us about your business and goals here"/>
                    </div>
                </div>
                <div className={styles.buttonContainer}>
                    <Button text="Enquire Now" />
                </div>
            </div>
        </>
    )
}