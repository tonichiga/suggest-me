import styles from "./Input.module.scss";

const Input = () => {
    return <div className={styles.input_wrapper}>
        <div className={styles.input_block}>
            <input id="Any" defaultChecked type="radio" name="genre" />
            <label htmlFor="Any" >Any</label>
        </div>
        <div className={styles.input_block}>
            <input id="Action" type="radio" name="genre" />
            <label htmlFor="Action" >Action</label>
        </div>
        <div className={styles.input_block}>

            <input id="Horror" type="radio" name="genre" />
            <label htmlFor="Horror" >Horror</label>
        </div>
        <div className={styles.input_block}>
            <input id="Drama" type="radio" name="genre" />
            <label htmlFor="Drama" >Drama</label>
        </div>
        <div className={styles.input_block}>
            <input id="Comedy" type="radio" name="genre" />
            <label htmlFor="Comedy" >Comedy</label>
        </div>
    </div>
}

export default Input;