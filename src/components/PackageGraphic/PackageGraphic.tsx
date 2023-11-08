import styles from "./PackageGraphic.module.css";

export const PackageGraphic = (props: {
    tierNo: number, 
    description: string,
    header: string,  
    inclusions: Array<JSX.Element>,
    cost: number,
    recommendations: string
}) => {

    const formatInclusions = (inclusions: Array<JSX.Element>) => {
        return inclusions.map((inclusion: JSX.Element) => <li>{inclusion}</li>)
    }

    return(
        <>
            <div className={styles.parent}>
                <div className={styles.tierContainer}>
                    <p className={styles.tier}>{`TIER ${props.tierNo}`}</p>
                </div> 
                <div className={styles.headerContainer}>
                    <p className={styles.header}>{props.header}</p>
                </div>
                <div className={styles.descriptionContainer}>
                    <p className={styles.description}>{props.description}</p>
                </div>
                <div className={styles.graphicContainer}>
                    <p className={styles.recommendationsHeader}>RECOMMENDED FOR:</p>
                    <p className={styles.recommendations}>{props.recommendations}</p>
                </div>
                <div className={styles.inclusionListContainer}>
                        <ul className={styles.inclusionList}>
                            {formatInclusions(props.inclusions)}
                        </ul>
                    </div>
                <div className={styles.costContainer}>
                    <p className={styles.costHeader}>STARTING FROM</p>
                    <p className={styles.cost}>${props.cost}<span className={styles.aud}>AUD</span></p>  
                </div>
            </div>
        </>
    )
}