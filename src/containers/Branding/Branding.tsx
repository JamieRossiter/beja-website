import { Carousel } from "../../components/Carousel/Carousel";
import { BrandingService } from "../../subcomponents/BrandingService/BrandingService";
import { Button } from "../../subcomponents/Button/Button";
import styles from "./Branding.module.css";


export const Branding = (props: { windowWidth: number, scrollPos: number }) => {

    const portfolioItems = [
        <div className={styles.brandingServiceContainer}>
            <BrandingService imgName="./img/beja_icon_brand_service" caption="Logo suite & brand identity" />
        </div>,
        <div className={styles.brandingServiceContainer}>
            <BrandingService imgName="./img/style_guide" caption="Brand style guide publication" />
        </div>,
        <div className={styles.brandingServiceContainer}>
            <BrandingService imgName="./img/social_media" caption="Social media templates" />
        </div>,
        <div className={styles.brandingServiceContainer}>
            <BrandingService imgName="./img/business_card" caption="Business card design" />
        </div>
    ]

    return(
        <>
            <div className={props.scrollPos > 3800 ? styles.containerShow : styles.containerHide}>
                <div className={styles.headerContainer}>
                    <h2 className={styles.header}>Need a brand refresh?</h2>
                    <h2 className={styles.subheader}>We offer branding services too.</h2>
                </div>
                <div className={styles.parentContainer}>
                    <div className={styles.servicesContainer}>
                        <div className={styles.servicesSubcontainer}>
                            {portfolioItems[0]}
                            {portfolioItems[1]}
                        </div>
                        <div className={styles.servicesSubcontainer}>
                            {portfolioItems[2]}
                            {portfolioItems[3]}
                        </div>
                    </div>
                </div>
                <div className={styles.carouselContainer}>
                    <Carousel content={portfolioItems} color="#FD3181" />
                </div>
                <div className={styles.enquireNowContainer}>
                    <Button text="Enquire Now" isPrimary bgColor="#FF0082" href="#contact" />
                </div>
            </div>
        </>
    )
}