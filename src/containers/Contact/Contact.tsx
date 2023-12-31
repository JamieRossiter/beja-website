import { FaPhone, FaEnvelope } from "react-icons/fa";
import { Button } from "../../subcomponents/Button/Button";
import { Input } from "../../subcomponents/Input/Input";
import styles from "./Contact.module.css";

export const Contact = (props: { scrollPos: number }) => {
    return(
        <>
            <div className={props.scrollPos > 3800 ? styles.parentShow : styles.parentHide }>
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
                        <Button href="mailto:hello@bejastudios.com" text="hello@bejastudios.com" icon="email" />
                    </div>
                    <div className={styles.buttonContainer}>
                        <Button href="tel:+61426678867" text="0426 678 867" icon="phone" />
                    </div>
                </div>
            </div>
        </>
    )
}