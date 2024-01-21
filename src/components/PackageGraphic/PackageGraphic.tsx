import styles from "./PackageGraphic.module.css";
import { TiTick } from "react-icons/ti";

export const PackageGraphic = (props: {
    tierNo: number, 
    description: string,
    header: string,  
    inclusions: Array<JSX.Element>,
    cost: number,
    recommendations: string
}) => {

    const formatInclusions = (inclusions: Array<JSX.Element>) => {
        return inclusions.map((inclusion: JSX.Element) => {
            let noTick: boolean = false;
            if(inclusion.props.className){
                noTick = inclusion.props.className.includes("noTick");
            }
            return (
                <li className={styles.listItem}>
                    <TiTick style={{display: noTick ? "none" : "block"}} className={styles.listItemIcon}/>
                    {inclusion}
                </li>
            )
        })
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
                {/* <div className={styles.descriptionContainer}>
                    <p className={styles.description}>{props.description}</p>
                </div> */}
                <div className={styles.graphicContainer}>
                    {/* <p className={styles.recommendationsHeader}>RECOMMENDED FOR:</p> */}
                    <p className={styles.recommendations}>{props.description}</p>
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