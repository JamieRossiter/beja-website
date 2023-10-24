import { Carousel } from "../../components/Carousel/Carousel";
import { Button } from "../../subcomponents/Button/Button";
import { CarouselTabs } from "../../subcomponents/CarouselTabs/CarouselTabs";
import styles from "./PortfolioCarousel.module.css";

export const PortfolioCarousel = (props: { windowWidth: number }) => {

    const portfolioItems = [
        <div>
            <div className={styles.imageContainer}>
                <img src="./img/benwerrin.png" />
            </div>
            <div className={styles.textContainer}>
                <p className={styles.textClient}>Client: Benwerrin Kindergarten</p>
                <a className={styles.textProject}>Project: Full website re-design</a>
            </div>
        </div>,
        <div>
            <div className={styles.imageContainer}>
                <img src="./img/benwerrin.png" />
            </div>
            <div className={styles.textContainer}>
                <p className={styles.textClient}>Client: Benwerrin Kindergarten</p>
                <a className={styles.textProject}>Project: Full website re-design</a>
            </div>
        </div>
    ]

    return(
        <>
            <div className={styles.parent}>
                <Carousel content={portfolioItems} arrows={props.windowWidth < 1200 ? false : true} />
                <div className={styles.enquireNowContainer}>
                    <Button text="Enquire Now" isPrimary bgColor="#FFBF4F" href="#contact" /> 
                </div>
            </div>
        </>
    )
}