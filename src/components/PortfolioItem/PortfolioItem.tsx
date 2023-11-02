import styles from "./PortfolioItem.module.css";

export const PortfolioItem = (props: {client: string, project: string, image: string, testimonialName: string, testimonialText: string}) => {
    return(
        <>
            <div>
                <div className={styles.imageContainer}>
                    <img src={process.env.PUBLIC_URL + props.image} />
                </div>
                <div className={styles.textContainer}>
                    <p className={styles.textClient}>Client: {props.client}</p>
                    <a className={styles.textProject}>Project: {props.project}</a>
                </div>
                <div className={styles.testimonialContainer}>
                    <p className={styles.testimonialText}>"{props.testimonialText}"</p>
                    <p className={styles.testimonialName}>- {props.testimonialName}</p>
                </div>
            </div>
        </>
    )
}