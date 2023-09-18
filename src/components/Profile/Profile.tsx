import React from "react";
import { Skill } from "../../subcomponents/Skill/Skill";
import styles from "./Profile.module.css";

export const Profile = (props: 
    { 
        children: string,
        imgName: string, 
        header: string, 
        subheader: string,
        skills: Array<string>,
        color: string,
        isInverted: boolean,
        scrollPosTarget: number,
        scrollPos: number
    } ) => {

    // Render the profile's skill string props as Skill components
    const renderSkills = (skills: Array<string>) => {
        return skills.map((skill: string, index: number) => 
            <div className={styles.skill}>
                <Skill text={skill} color={props.color} isSolid={index > 0 ? true : false} />
            </div>      
        )
    }

    return(
        <>
            <div className={props.scrollPos > props.scrollPosTarget ? styles.superParentShow : styles.superParentHide}>
                <div className={props.isInverted ? styles.parentInverted : styles.parent}>
                    <div className={styles.profileImgContainer}>
                        <img className={styles.profileImg} src={props.imgName} />
                    </div>
                    <div className={styles.copyContainer}>
                        <div className={styles.headerContainer}>
                            <p className={styles.header}>{props.header} <span className={styles.subheader}>({props.subheader})</span></p>
                        </div>
                        <div className={styles.textContainer}>
                            <p className={styles.text}>{props.children}</p>
                        </div>
                        <div className={styles.skillsContainer}>
                            {renderSkills(props.skills)}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

