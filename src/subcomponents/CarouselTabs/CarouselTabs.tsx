import styles from "./CarouselTabs.module.css";

export const CarouselTabs = (props: { tabNo: number } ) => {
    
    const drawTabs = (tabNo: number) => {
        const tabs = [];
        for(let i = 0; i < tabNo; i++){
            tabs.push(<div className={styles.tabInactive} />);
        }
        return tabs;
    }
    
    return(
        <>
            <div className={styles.container}>
                {drawTabs(props.tabNo)}
            </div>
        </>
    )
}