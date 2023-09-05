import styles from "./Button.module.css";

export const Button = (props: { text: string }) => {
    return(
        <>
            <div className={styles.container}>
                <p className={styles.text}>{props.text}</p>
            </div>
        </>
    )
}
