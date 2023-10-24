import { Question } from "../../components/Question/Question";
import { Tab } from "../../subcomponents/Tab/Tab";
import styles from "./FAQs.module.css";

export const FAQs = (props: { scrollPos: number }) => {
    return(
        <>
            <div className={props.scrollPos > 4200 ? styles.parentShow : styles.parentHide }>
                {/* <Tab text="FAQs" /> */}
                <div className={styles.questionContainer}>
                    <Question 
                        question="Why do we use SquareSpace?" 
                        answer="Squarespace is a user-friendly and contemporary website builder that allows.... 
                        However making your website functional and attractive does take time, effort and graphic experience which you may not have - so leave it to us. " 
                    />
                    <Question 
                        question="How do I maintain my website once you have built it for me?" 
                        answer="The Squarespace editor function is easy to navigate which allows you to easily manage your website. Once we finish building out your site, we will schedule a handover session to teach you how you can edit and update whenever you need." 
                    />
                    <Question 
                        question="I don’t feel comfortable running my own website. Is there a way you can run it for me?" 
                        answer="We would be more than happy to assist in running your website. We offer a monthly subscription plan where we can implement any changes you require, as well as update domain subscriptions, etc."
                    />
                    <Question 
                        question="My business already has an existing website but I am looking to update it. How can your services help me?" 
                        answer="Hand over your existing website and resources, and we can transfer over all your content into a brand new Squarespace website."
                    />
                    <Question 
                        question="I would like a website for my small business but I don’t have a brand identity yet. How can you help me?" 
                        answer="Lucky for you, we offer branding and identity services too! We’ve got a graphic designer in the team to package up a branding style guide with a logo, brand colour scheme and typography style. Show us your inspiration and we’ll take it from there!"
                    />
                </div>
            </div>
        </>
    )
}

