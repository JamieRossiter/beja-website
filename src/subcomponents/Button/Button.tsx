import styles from "./Button.module.css";

export const Button = (props: { text: string, isPrimary?: boolean }) => {
    return(
        <>
            <div className={styles.container} style={{ backgroundColor: props.isPrimary ? "#FFBF4F" : "black"  }}>
                <p className={styles.text}>{props.text}</p>
            </div>
        </>
    )
}
