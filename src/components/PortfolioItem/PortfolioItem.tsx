import styles from "./PortfolioItem.module.css";

export const PortfolioItem = (props: {client: string, project: string, image: string, testimonialName: string, testimonialRole: string, testimonialText: string, url: string}) => {
    return(
        <>
            <div>
                <div className={styles.imageContainer}>
                    <a target="_blank" href={props.url}>
                        <img src={process.env.PUBLIC_URL + props.image + ".jpg"} />
                    </a>
                </div>
                <div className={styles.textContainer}>
                    <p className={styles.textClient}>Client: {props.client}</p>
                    <a className={styles.textProject} target="_blank" href={props.url}>Project: {props.project}</a>
                </div>
                <div className={styles.testimonialContainer}>
                    <p className={styles.testimonialText}>"{props.testimonialText}"</p>
                    <p className={styles.testimonialName}>{props.testimonialName}</p>
                    <p className={styles.testimonialRole}>{props.testimonialRole}</p>
                </div>
            </div>
        </>
    )
}