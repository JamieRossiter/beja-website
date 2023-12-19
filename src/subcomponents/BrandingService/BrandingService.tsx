import styles from "./BrandingService.module.css";

export const BrandingService = (props: { imgName: string, caption: string }) => {
    return(
        <>
            <div className={styles.parentContainer}>
                <div className={styles.imageContainer}>
                    <img src={process.env.PUBLIC_URL + `/${props.imgName}` + ".webp"} />
                </div>
                <p>{props.caption}</p>
            </div>
        </>
    )
}
