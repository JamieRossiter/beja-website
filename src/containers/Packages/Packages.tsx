import styles from "./Packages.module.css";
import { PackageGraphic } from "../../components/PackageGraphic/PackageGraphic";
import { Banner } from "../../components/Banner/Banner";

export const Packages = (props: { scrollPos: number }) => {
    return(
        <>
            <div className={props.scrollPos > 2800 ? styles.parentShow : styles.parentHide}>
                <div className={styles.packagesContainer}>
                    <div className={styles.package}>
                        <PackageGraphic 
                            header="Basic"
                            inclusions={
                                [
                                    "Up to 3 custom designed pages",
                                    "Iconography & stock imagery",
                                    "Domain & hosting",
                                    "Basic SEO implementation",
                                    "Site handover"
                                ]
                            }
                            cost={1692}
                        >
                            Ideal for small, local businesses who want to go digital or transfer an existing website to SquareSpace
                        </PackageGraphic> 
                    </div>
                    <div className={styles.package}>
                        <PackageGraphic 
                            header="Advanced"
                            inclusions={
                                [
                                    "Up to 6 custom designed pages",
                                    "Iconography & stock imagery",
                                    "Domain & hosting",
                                    "Basic SEO implementation",
                                    "Site handover"
                                ]
                            }
                            cost={3200}
                        >
                            Ideal for medium businesses who require that extra bit of...
                        </PackageGraphic> 
                    </div>
                </div>    
                <Banner />
            </div>
        </>
    )
}

