import styles from "./Button.module.css";
import { ReactElement } from "react";

export const Button = (props: { text: string, isPrimary?: boolean, icon?: ReactElement<any, any>, href?: string }) => {
    return(
        <>
            <a href={props.href} className={styles.container} style={{backgroundColor: props.isPrimary ? "#FFBF4F" : "black"}}>
                <div hidden={props.icon ? false : true} className={styles.iconContainer}>
                    {props.icon}
                </div>
                <p style={{marginRight: props.icon ? "0.3em" : "0.0em"}} className={styles.text}>{props.text}</p>
            </a>
        </>
    )
}
