import styles from "./Skill.module.css";

export const Skill = (props: { text: string, color: string, isSolid: boolean }) => {
    return(
        <>
            <div className={styles.parent} style={{ 
                backgroundColor: props.isSolid ? props.color : "none",
                borderColor: props.color 
            }}>
                <div className={styles.container}>
                    <p className={styles.text} style={{ 
                        color: props.isSolid ? "white" : props.color 
                    }}>{props.text}</p>
                </div>
            </div>
        </>
    )
}