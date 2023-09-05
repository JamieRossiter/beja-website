import styles from "./PackageGraphic.module.css";

export const PackageGraphic = (props: { 
    children: string,
    header: string,  
    inclusions: Array<string>,
    cost: number
}) => {

    const formatInclusions = (inclusions: Array<string>) => {
        return inclusions.map((inclusion: string) => <li>{inclusion}</li>)
    }

    return(
        <>
            <div className={styles.parent}> 
                <div className={styles.headerContainer}>
                    <p className={styles.header}>{props.header}</p>
                </div>
                <div className={styles.graphicContainer}>
                    <p className={styles.description}>{props.children}</p>
                    <div className={styles.inclusionListContainer}>
                        <p className={styles.inclusionListHeader}>Includes</p>
                        <ul className={styles.inclusionList}>
                            {formatInclusions(props.inclusions)}
                        </ul>
                    </div>
                    <div className={styles.costContainer}>
                        <p className={styles.costHeader}>STARTING FROM</p>
                        <p className={styles.cost}>${props.cost}</p>  
                    </div>
                </div>
            </div>
        </>
    )
}