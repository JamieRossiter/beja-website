import styles from "./NavBar.module.css";

export const NavBar = () => {
    return(
        <>
            <div className={styles.container}>
                <div className={styles.pages}>
                    <a>Contact</a>
                    <a>Pricing</a>
                    <a>Folio</a>
                    <a>About</a>
                </div>
            </div>
        </>
    )    
}