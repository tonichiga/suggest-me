import styles from "./Button.module.scss";

const Button = () => {
    return (
        <div className={styles.ToMenu}>
            <div className={styles.All_Buttons}>
                <button >Action_1</button>
                <button>Action_2</button>
            </div>
        </div>

    )
};

export default Button;