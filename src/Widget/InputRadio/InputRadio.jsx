import s from "../InputRadio/InputRadio.module.scss";

const InputRadio = () => {
    return (
        <div className={s.input}>
            <div className={s.content}>
                <div className={s.input_container}>
                    <input type="radio" name="category" id="any" defaultChecked />
                    <label htmlFor="any">Any</label>
                </div>
                <div className={s.input_container}>
                    <input type="radio" name="category" id="action" />
                    <label htmlFor="action">Action</label>
                </div>
                <div className={s.input_container}>
                    <input type="radio" name="category" id="horror" />
                    <label htmlFor="horror">Horror</label>
                </div>
                <div className={s.input_container}>
                    <input type="radio" name="category" id="drama" />
                    <label htmlFor="drama">Drama</label>
                </div>
                <div className={s.input_container}>
                    <input type="radio" name="category" id="comedy" />
                    <label htmlFor="comedy">Comedy</label>
                </div>
            </div>
        </div>
    )
}
 
export default InputRadio;