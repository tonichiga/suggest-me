import styles from "./Input.module.scss";

const Input = () => {
    return <div className={styles.input_block}>
        <input type="button" value="Any" />
        <input type="button" value="Action" />
        <input type="button" value="Horror" />
        <input type="button" value="Drama" />
        <input type="button" value="Comedy" />
           </div>
}

export default Input;