import styles from "./Tab.module.css";

export const Tab = (props: { text: string }) => {
    return(
        <>
            <div className={styles.container}>
                <p className={styles.text}>{props.text}</p>
            </div>
        </>
    )
}