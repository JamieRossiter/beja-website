import styles from "./Burger.module.css";

export const Burger = (props: { isBurgerOpen: boolean, toggleBurgerMenu: React.MouseEventHandler<HTMLDivElement> | undefined }) => {
    return(
        <>
            <div onClick={props.toggleBurgerMenu} className={ props.isBurgerOpen ? styles.containerClose : styles.containerOpen }>
                <div className={styles.rect} />
                <div className={styles.rect} />
                <div className={styles.rect} />
            </div>
        </>
    )
}