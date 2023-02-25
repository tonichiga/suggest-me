import style from "./Input.module.scss";

const inputCategory = ["Any", "Action", "Horror", "Drama", "Comedy"];

const Input = ({ onChange, value }) => {
    return (
        <div className={style.input_wrapper}>
            <div className={style.content}>
                {inputCategory.map((element) => {
                    return (
                        <div className={style.input_container} key={element}>
                            <input
                                checked={value === element}
                                onChange={onChange}
                                name="genres"
                                id={element}
                                type="radio"
                            />
                            <label htmlFor={element}>{element}</label>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Input;