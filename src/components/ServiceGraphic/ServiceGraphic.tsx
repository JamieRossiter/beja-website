import styles from "./ServiceGraphic.module.css";

export const ServiceGraphic = (props: { heading: string, text: string, color: string, imgName: string }) => {
    return(
        <>
            <div className={styles.parent}>
                <div className={styles.circleContainer}>
                    <div className={styles.circle}>
                        <img className={styles.graphic} src={process.env.PUBLIC_URL + `/img/${props.imgName}.webp`} />
                    </div>
                </div>
                <div className={styles.copyContainer}>
                    <div className={styles.headingContainer}>
                        <p className={styles.heading} style={{ color: props.color }}>{props.heading}</p>
                    </div>
                    <div className={styles.textContainer}>
                        <p className={styles.text} style={{ color: props.color }}>{props.text}</p>
                    </div>
                </div>
            </div>
        </>
    )
}