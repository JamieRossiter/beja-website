import { Carousel } from "../../components/Carousel/Carousel";
import { PortfolioItem } from "../../components/PortfolioItem/PortfolioItem";
import { Button } from "../../subcomponents/Button/Button";
import { CarouselTabs } from "../../subcomponents/CarouselTabs/CarouselTabs";
import styles from "./PortfolioCarousel.module.css";

export const PortfolioCarousel = (props: { windowWidth: number }) => {

    const portfolioItems = [
        <>
            <PortfolioItem  
                client="Benwerrin Kindergarten"
                project="Full website re-design"
                testimonialName="Toni Lepore"
                testimonialRole="Director, Benwerrin Kindergarten"
                image="/img/benwerrin.webp"
                testimonialText="Jamie and Belinda were responsive, reliable, and flexible to meet our needs with improved design and functionality. The new, up-to-date website they developed significantly increased enrolments, and the kinder continues to grow effortlessly."
            />
        </>,
        <>
            <PortfolioItem  
                client="Benwerrin Kindergarten"
                project="Full website re-design"
                testimonialName="Toni Lepore"
                testimonialRole="Director, Benwerrin Kindergarten"
                image="/img/benwerrin.webp"
                testimonialText="Jamie and Belinda were responsive, reliable, and flexible to meet our needs with improved design and functionality. The new, up-to-date website they developed significantly increased enrolments, and the kinder continues to grow effortlessly."
            />
        </>,
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