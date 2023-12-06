import { IconContext } from "react-icons/lib";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import styles from "./Button.module.css";
import { ReactElement } from "react";

export const Button = (props: { text: string, isPrimary?: boolean, bgColor?: string, textColor?: string, icon?: string, href?: string }) => {

    const containerStyles: React.CSSProperties = {
        backgroundColor: props.isPrimary ? props.bgColor : "black", 
        border: `${props.isPrimary ? props.bgColor : "black"} solid 3px`
    }

    const textStyles: { marginRight: string, "--hover-color": string | undefined } = {
        marginRight: props.icon ? "0.3em" : "0.0em", 
        "--hover-color": props.isPrimary ? props.bgColor : "black"
    }
    
    const phoneIcon: ReactElement<any, any> = <FaPhone size="1em" />
    const emailIcon: ReactElement<any, any> = <FaEnvelope size="1em"/>;

    return(
        <>
            <a href={props.href} className={styles.container} style={containerStyles}>
                <div hidden={props.icon ? false : true} className={styles.iconContainer}>
                    {props.icon === "email" ? emailIcon : phoneIcon}
                </div>
                <p style={textStyles} className={styles.text}>{props.text}</p>
            </a>
        </>
    )
}
