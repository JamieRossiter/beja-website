import styles from "./Services.module.css";
import { ServiceGraphic } from "../../components/ServiceGraphic/ServiceGraphic";

export const Services = () => {
    return(
        <>
            <div className={styles.superParent}>
                <div className={styles.parent}>
                    <div className={styles.serviceGraphicContainer}>
                        <ServiceGraphic 
                            heading="We brand" 
                            text="Branding your business is step one to building a successful online identity. We’ll work with you to develop a logo and style guide to kickstart your business venture" 
                            color="#0150E8" 
                            imgName="fingerprint" 
                        />
                    </div>
                    <div className={styles.serviceGraphicContainer}>
                        <ServiceGraphic 
                            heading="We design"
                            text="We work with you to develop a customisable website with imagery and iconography, specific to your business for use across your web and social platforms"
                            color="#FF0064CC" 
                            imgName="fingerprint" 
                        />
                    </div>
                </div>
                <div className={styles.parent}>
                    <div className={styles.serviceGraphicContainer}>
                        <ServiceGraphic 
                            heading="We update"
                            text="Already have an existing website? We’ll update any changes you require, or transfer it over to Squarespace to get your new site up and running"
                            color="#FF4642" 
                            imgName="fingerprint" 
                        />
                    </div>
                    <div className={styles.serviceGraphicContainer}>
                        <ServiceGraphic 
                            heading="We build"
                            text="Customisable websites via Squarespace that are adaptive to mobile and desktop. From colour palettes to features, "
                            color="#FFBF4F"
                            imgName="fingerprint" 
                        />
                    </div>
                </div>
            </div>
        </>
    )
}
