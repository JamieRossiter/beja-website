import styles from "./Packages.module.css";
import { PackageGraphic } from "../../components/PackageGraphic/PackageGraphic";
import { Banner } from "../../components/Banner/Banner";
import { Carousel } from "../../components/Carousel/Carousel";

export const Packages = (props: { scrollPos: number, windowWidth: number }) => {

    const packages: Array<JSX.Element> = [
        <div className={styles.package}>
            <PackageGraphic 
                description="Position your business on the digital map with a simple and modern website."
                tierNo={1}
                header="Beja Standard"
                inclusions={
                    [
                        <p>Up to <span className={styles.bold}>4</span> custom designed pages</p>,
                        <p>Mobile and tablet responsive</p>,
                        <p>Original web concept and ideation</p>,
                        <p>In-house design and development</p>,
                        <p>Domain and hosting</p>,
                        <p>Basic SEO implementation</p>,
                        <p>Social media integration</p>,
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
                description="Establish client confidence with a sleek and professional online presence."
                header="Beja Professional"
                inclusions={
                    [
                        <p>Up to <span className={styles.bold}>8</span> custom designed pages</p>,
                        <p>Everything in <span className={styles.emphasis}>Beja Standard</span></p>,
                        <p>x2 1-hour web design sessions</p>,
                        <p>Custom iconography & infographics</p>,
                        <p>Social media creation and setup</p>,
                        <p>Site handover session</p>,
                        <p>Custom CSS integration</p>,
                        <p>2 free revisions</p>
                    ]
                }
                cost={3999}
                recommendations="Established local businesses"
            />
        </div>,
        <div className={styles.package}>
            <PackageGraphic 
                tierNo={3}
                description="Elevate your business with the ultimate web and branding design package."
                header="Beja Complete"
                inclusions={
                    [
                        <p>Up to <span className={styles.bold}>12</span> custom designed pages</p>,
                        <p>Everything in <span className={styles.emphasis}>Beja Std + Beja Pro</span></p>,
                        <p>x2 1-hour branding design sessions</p>,
                        <p>x2 1-hour web design sessions</p>,
                        <p>Logo design and creation</p>,
                        <p>Colour palette & typography</p>,
                        <p>1-page resolved style guide</p>,
                        <p>Social media post design</p>,
                        <p>Business card design</p>,
                        <p>3 free revisions</p>
                    ]
                }
                cost={4999}
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
                <Banner />
            </div>
        </>
    )
}

