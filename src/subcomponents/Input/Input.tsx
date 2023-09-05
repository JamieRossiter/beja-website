import styles from "./Input.module.css";

export const Input = (props: { isTextArea?: boolean, placeholder: string }) => {
    return(
        <>
            <div className={styles.container}>
                {   
                    props.isTextArea 
                    ? <textarea className={styles.textarea} placeholder={props.placeholder} /> 
                    : <input className={styles.input} type="text" placeholder={props.placeholder} />
                }
            </div>
        </>
    )
}