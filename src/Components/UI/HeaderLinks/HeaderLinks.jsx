import styles from "./HeaderLinks.module.scss";

const HeaderLinks = () => {
    return <div className={styles.link_block}>
                <a>Movies</a>
                <a>TV Shows</a>
                <a>Suggest me &rarr;</a>
           </div>
}

export default HeaderLinks;