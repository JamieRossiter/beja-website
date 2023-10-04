import { Button } from "../../subcomponents/Button/Button";
import { CarouselTabs } from "../../subcomponents/CarouselTabs/CarouselTabs";
import styles from "./PortfolioCarousel.module.css";

export const PortfolioCarousel = () => {
    return(
        <>
            <div className={styles.parent}>
                <div className={styles.imageContainer}>
                    <img src="./img/benwerrin.png" />
                </div>
                <div className={styles.textContainer}>
                    <p className={styles.textClient}>Client: Benwerrin Kindergarten</p>
                    <a className={styles.textProject}>Project: Full website re-design</a>
                </div>
                <div className={styles.tabContainer}>
                    <CarouselTabs tabNo={3} />
                </div>
                <div className={styles.enquireNowContainer}>
                    <Button text="Enquire Now" isPrimary bgColor="#FFBF4F" href="#contact" /> 
                </div>
            </div>
        </>
    )
}