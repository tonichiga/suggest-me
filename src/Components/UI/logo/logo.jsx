import styles from "./Logo.module.scss";

const Logo = () => {
    return <div className={styles.logo_main}><a className={styles.logo_link}></a><div className={styles.triangle_purple}></div><div className={styles.triangle_blue}></div></div>
}

export default Logo;