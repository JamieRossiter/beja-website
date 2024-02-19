import React from "react";
import { CarouselTabs } from "../../subcomponents/CarouselTabs/CarouselTabs";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import styles from "./Carousel.module.css";

export const Carousel = (props: { content: Array<React.ReactElement>, color?: string, arrows?: boolean }) => {
    
    const [swipeDirection, setSwipeDirection] = React.useState<string>("left");
    const [contentIndex, setContentIndex] = React.useState<number>(0);
    const [touchStart, setTouchStart] = React.useState<number>(0);
    const [touchEnd, setTouchEnd] = React.useState<number>(0);

    const minSwipeDistance: number = 50;

    const containerizeContent = (): React.ReactElement[] => {
        return props.content.map((element: React.ReactElement, index: number) => <div key={index} className={swipeDirection === "left" ? styles.contentContainerSlideLeft : styles.contentContainerSlideRight}>{element}</div>)
    } 

    const contentHasColorProps = (): boolean => {
        if(props.color) return false;
        return props.content.every(prop => {
            if(!prop.props.children.props) return false;
            return prop.props.children.props.color;
        });
    }

    const onTouchStart = (e: any): void => {
        setTouchEnd(0)
        setTouchStart(e.targetTouches[0].clientX)
    }
      
    const onTouchMove = (e: any): void => {
        setTouchEnd(e.targetTouches[0].clientX)
    }
      
    const onTouchEnd = (): void => {
        if (!touchStart || !touchEnd) return;

        const distance: number = touchStart - touchEnd
        const isLeftSwipe: boolean = distance > minSwipeDistance
        const isRightSwipe: boolean = distance < -minSwipeDistance
        
        if(isLeftSwipe){
            setSwipeDirection("left");
            navRight();
        }
        else if(isRightSwipe){
            setSwipeDirection("right");
            navLeft();
        }

    }

    const navRight = (): void => {
        if(contentIndex >= props.content.length - 1){
            setContentIndex(0);
            return;
        }
        setContentIndex(contentIndex + 1);
    }

    const navLeft = (): void => {
        if(contentIndex === 0){
            setContentIndex(props.content.length - 1);
            return;
        }
        setContentIndex(contentIndex - 1);
    }

    const navTab = (tab: number): void => {
        setContentIndex(tab);
    }

    return(
        <>
            <div className={styles.contentContainer}>
                <div hidden={!props.arrows} className={styles.leftArrowContainer}>
                    <img onClick={() => {navLeft(); setSwipeDirection("right");}} className={styles.leftArrow} src={process.env.PUBLIC_URL + "/img/chevron_left.png"} />
                </div>
                <div onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd} className={styles.carouselContainer}>
                    {containerizeContent()[contentIndex]}
                </div>
                <div hidden={!props.arrows} className={styles.rightArrowContainer}>
                    <img onClick={() => {navRight(); setSwipeDirection("left");}} className={styles.rightArrow} src={process.env.PUBLIC_URL + "/img/chevron_right.png"} />
                </div>
            </div>
            <div className={styles.tabsContainer}>
                <CarouselTabs navTab={navTab} color={contentHasColorProps() ? props.content[contentIndex].props.children.props.color : props.color} activeTab={contentIndex} tabNo={props.content.length} />
            </div>
        </>
    )
}
