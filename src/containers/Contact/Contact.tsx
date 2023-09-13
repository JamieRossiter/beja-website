import { FaPhone, FaEnvelope } from "react-icons/fa";
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
                {/* <div className={styles.inputContainer}>
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
                </div> */}
                <div className={styles.buttonParent}>
                    <div className={styles.buttonContainer}>
                        <Button href="mailto:hello@bejastudios.com" text="hello@bejastudios.com" icon={<FaEnvelope size="1em" color="white"/>} />
                    </div>
                    <div className={styles.buttonContainer}>
                        <Button href="tel:+61426678867" text="0426 678 867" icon={<FaPhone size="1em" color="white"/>} />
                    </div>
                </div>
            </div>
        </>
    )
}