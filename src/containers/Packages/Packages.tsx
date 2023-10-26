import styles from "./Packages.module.css";
import { PackageGraphic } from "../../components/PackageGraphic/PackageGraphic";
import { Banner } from "../../components/Banner/Banner";
import { Carousel } from "../../components/Carousel/Carousel";

export const Packages = (props: { scrollPos: number, windowWidth: number }) => {

    const packages: Array<JSX.Element> = [
        <div className={styles.package}>
            <PackageGraphic 
                description="Ideal for those who want to go digital or refresh their current site."
                tierNo={1}
                header="Beja Basic"
                inclusions={
                    [
                        <p>Up to <span className={styles.bold}>4</span> custom designed pages</p>,
                        <p>Mobile and tablet responsive</p>,
                        <p>Original web concept and ideation</p>,
                        <p>In-house design and development</p>,
                        <p>Domain and hosting</p>,
                        <p>Basic SEO implementation</p>,
                        <p>Social media integration</p>,
                        <p>Site handover session</p>,
                        <p>1 free revision</p>
                    ]
                }
                cost={1999}
                recommendations="Portfolio and personal sites"
            />
        </div>,
        <div className={styles.package}>
            <PackageGraphic 
                tierNo={2}
                description="Websites that need a little extra “oomph” like a booking system, timetable or menu"
                header="Beja Professional"
                inclusions={
                    [
                        <p>Up to <span className={styles.bold}>8</span> custom designed pages</p>,
                        <p>Everything in <span className={styles.emphasis}>Beja Basic</span></p>,
                        <p>Booking system</p>,
                        <p>Design and content session</p>,
                        <p>Custom iconography & infographics</p>,
                        <p>Custom CSS integration</p>,
                        <p>Social media creation</p>,
                        <p>Copywriting</p>,
                        <p>2 free revisions</p>
                    ]
                }
                cost={3999}
                recommendations="Restaurants, beauty, health & home"
            />
        </div>,
        <div className={styles.package}>
            <PackageGraphic 
                tierNo={3}
                description="Websites that need a little extra “oomph” like a booking system, timetable or menu"
                header="Beja E-Commerce"
                inclusions={
                    [
                        <p>Up to <span className={styles.bold}>10</span> custom designed pages</p>,
                        <p>Everything in <span className={styles.emphasis}>Beja Basic + Beja Pro</span></p>,
                        <p>E-commerce integration</p>,
                        <p>PayPal, Stripe & Afterpay integration</p>,
                        <p>Shipping options set up</p>,
                        <p>Gift card set up</p>,
                        <p>First 10 products set up</p>,
                        <p>3 free revisions</p>
                    ]
                }
                cost={4999}
                recommendations="E-commerce, product & education"
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
                <Banner />
            </div>
        </>
    )
}

