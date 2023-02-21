import styles from "./DetailsTitle.module.scss";

const DetailsTitle = ({ data }) => {
    return <div className={styles.title_block}>
              <a>Action</a>
        <h1>{data.title}</h1>
           </div>
}

export default DetailsTitle;