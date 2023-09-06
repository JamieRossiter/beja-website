import styles from "./Question.module.css";

export const Question = (props: { question: string, answer: string }) => {
    return(
        <>
            <div className={styles.parent}>
                <div className={styles.questionIcon}>
                    <p className={styles.questionSymbol}>Q</p>
                </div>
                <div className={styles.textContainer}>
                    <div className={styles.questionTextContainer}>
                        <p className={styles.questionText}>{props.question}</p>
                    </div>
                    <div className={styles.answerTextContainer}>
                    <p className={styles.answerText}>
                        {props.answer}
                    </p>
                </div>
            </div>
            </div>

        </>
    )
}