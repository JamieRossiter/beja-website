import styles from "./FooterGraphic.module.css";

export const FooterGraphic = (props: {bgColor: string, imgName: string}) => {

    return(
        <>
            <div className={styles.container} style={{ backgroundColor: props.bgColor }}>
                <div className={styles.imageContainer}>
                    <img className={styles.image} src={props.imgName} />
                </div>
            </div>
        </>
    )

}