import s from "./Block.module.scss";

const Block = () => {
    return (
        <div className={s.FilmsName}>
            <span className={s.category}>Action</span>
            <h1 className={s.film}>Avengers: Endgame</h1>
        </div>
    );
}

export default Block;