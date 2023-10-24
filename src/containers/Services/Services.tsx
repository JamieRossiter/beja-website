import React from "react";
import styles from "./Services.module.css";
import { ServiceGraphic } from "../../components/ServiceGraphic/ServiceGraphic";
import { Carousel } from "../../components/Carousel/Carousel";

export const Services = (props: { scrollPos: number }) => {

    const serviceGraphicContainer = [
        <div className={styles.serviceGraphicContainer}>
            <ServiceGraphic 
                heading="We brand" 
                text="Branding your business is step one to building a successful online identity. We work with you to develop a logo and style guide to kickstart your venture" 
                color="#0150E8" 
                imgName="brand" 
            />
        </div>,
        <div className={styles.serviceGraphicContainer}>
            <ServiceGraphic 
                heading="We design"
                text="We design to align with your brand, incorporating thoughtful iconography, typography and imagery. We focus on originality, and don’t rely on templates."
                color="#FF0064CC" 
                imgName="design" 
            />
        </div>,
        <div className={styles.serviceGraphicContainer}>
            <ServiceGraphic 
                heading="We convert"
                text="Need to elevate your brand and better engage your audience? We can give your old website a fresh new look by converting it into a modern SquareSpace site."
                color="#FF4642" 
                imgName="convert" 
            />
        </div>,
        <div className={styles.serviceGraphicContainer}>
            <ServiceGraphic 
                heading="We build"
                text="We develop a functional and user-friendly website that you can easily edit and manage once our work is complete."
                color="#FFBF4F"
                imgName="build" 
            />
        </div>
    ]

    return(
        <>
            <div className={props.scrollPos > 50 ? styles.superParentShow : styles.superParentHide}>
                <div className={styles.parent}>
                    { serviceGraphicContainer[0] }
                    { serviceGraphicContainer[1] }
                </div>
                <div className={styles.parent}>
                    { serviceGraphicContainer[2] }
                    { serviceGraphicContainer[3] }
                </div>
                <div className={styles.mobileParent}>
                    <Carousel arrows={false} content={serviceGraphicContainer} />
                </div>
            </div>
        </>
    )
}
