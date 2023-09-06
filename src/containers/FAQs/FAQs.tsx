import { Question } from "../../components/Question/Question";
import { Tab } from "../../subcomponents/Tab/Tab";
import styles from "./FAQs.module.css";

export const FAQs = () => {
    return(
        <>
            <div className={styles.parent}>
                <Tab text="FAQs" />
                <div className={styles.questionContainer}>
                    <Question 
                        question="Why use SquareSpace?" 
                        answer="Build functional websites. However this does take time, effort and graphic experience which you may not have - so leave it to us. (software experience?)" 
                    />
                    <Question 
                        question="How do I maintain my website once you have built it for me?" 
                        answer="Squarespace is user-friendly and easy to navigate. let us handle the technical parts. Once we finish building out your content, we will schedule a handover session to teach you how you can edit and update your new website!" 
                    />
                    <Question 
                        question="I don’t feel comfortable running my own website. Is there a way you can run it for me?" 
                        answer="For sure, we would be more than happy to assist you run your website. We offer a monthly subscription plan where we can implement any changes you require and take care of all the nitty gritty."
                    />
                    <Question 
                        question="My business already has an existing website but I am not happy with it. How can your services help me?" 
                        answer="Give us your existing website and we can transfer over all your content into a new Squarespace website."
                    />
                    <Question 
                        question="I would like a website for my small business but I don’t have a brand identity yet. How can you help me?" 
                        answer="Lucky for you, we’ve got a graphic designer in the team to help you create the branding and identity of your dreams. We’ll create a logo, colour scheme, typography style and package it up into your very own style guide. Just send us a message of what you have in mind and we’ll go from there!"
                    />
                </div>
            </div>
        </>
    )
}

