import styles from "./CarouselTabs.module.css";

export const CarouselTabs = (props: { color?: string, activeTab: number, tabNo: number } ) => {
    
    const drawTabs = (tabNo: number) => {
        const tabs = [];
        for(let i = 0; i < tabNo; i++){
            tabs.push(<div style={{ backgroundColor: props.color ? props.color : "#0150E8" }}  className={props.activeTab === i ? styles.tabActive : styles.tabInactive} />);
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