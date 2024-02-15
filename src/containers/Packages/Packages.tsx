import styles from "./Packages.module.css";
import { PackageGraphic } from "../../components/PackageGraphic/PackageGraphic";
import { Banner } from "../../components/Banner/Banner";
import { Carousel } from "../../components/Carousel/Carousel";

export const Packages = (props: { scrollPos: number, windowWidth: number }) => {

    const packages: Array<JSX.Element> = [
        <div className={styles.package}>
            <PackageGraphic 
                description="For a small, simple and impactful website."
                tierNo={1}
                header="Beja Standard"
                inclusions={
                    [
                        <p>Up to <span className={styles.bold}>4</span> custom designed pages</p>,
                        <p>Mobile and tablet responsive</p>,
                        <p className={styles.bold}>Basic integrations</p>,
                        <p className={styles.example + " noTick"}>Google Maps widget</p>,
                        <p className={styles.example + " noTick"}>YouTube, Vimeo, Facebook videos</p>,
                        <p className={styles.example + " noTick"}>Instagram, Facebook, Tiktok posts</p>,
                        <p>Original web concept and ideation</p>,
                        <p>Domain and hosting</p>,
                        <p>Site handover session</p>
                    ]
                }
                cost={1999}
                recommendations="Portfolio and personal sites"
            />
        </div>,
        <div className={styles.package}>
            <PackageGraphic 
                tierNo={2}
                description="For a bigger and more engaging website."
                header="Beja Professional"
                inclusions={
                    [
                        <p><span className={`${styles.emphasis} ${styles.bold}`}>Everything in Beja Standard</span></p>,
                        <p>Up to <span className={styles.bold}>8</span> custom designed pages</p>,
                        <p className={styles.bold}>Pro integrations</p>,
                        <p className={styles.example + " noTick"}>JotForm, Google Forms, custom forms</p>,
                        <p className={styles.example + " noTick"}>OpenTable, Calendly scheduling</p>,
                        <p className={styles.example + " noTick"}>Blog posts with CMS implementation</p>,
                        <p>Custom iconography & infographics</p>,
                        <p>Basic custom CSS integration</p>,
                        <p>Google Business listing</p>,
                    ]
                }
                cost={2999}
                recommendations="Established local businesses"
            />
        </div>,
        <div className={styles.package}>
            <PackageGraphic 
                tierNo={3}
                description="For the biggest, most feature-rich website."
                header="Beja Complete"
                inclusions={
                    [
                        <p><span className={`${styles.emphasis} ${styles.bold}`}>Everything in Beja Std + Beja Pro</span></p>,
                        <p>Up to <span className={styles.bold}>12</span> custom designed pages</p>,
                        <p className={styles.bold}>Advanced integrations</p>,
                        <p className={styles.example + " noTick"}>Ecommerce, shop and product pages</p>,
                        <p className={styles.example + " noTick"}>Advanced SEO implementation</p>,
                        <p className={styles.example + " noTick"}>PayPal, Stripe, Square payment</p>,
                        <p className={styles.example + " noTick"}>Google Analytics, MailChimp marketing</p>,
                        <p>Advanced custom CSS integration</p>,
                        <p>Custom email integration</p>
                    ]
                }
                cost={3999}
                recommendations="Start-up companies"
            />
        </div>
    ]

    return(
        <>
            <div className={props.scrollPos > 2800 ? styles.parentShow : styles.parentHide}>
                <div className={styles.packagesContainer}>
                    <div className={styles.carouselContainer}>
                        <Carousel arrows={props.windowWidth < 650 ? false : true} content={packages} color="#FFFFFF" />
                    </div>
                    <div className={styles.packagesContainerDesktop}>
                        {packages}
                    </div>
                </div>    
                {/* <Banner /> */}
            </div>
        </>
    )
}

