import s from "./Block.module.scss";

const Block = ({ title, backdrop }) => {
    return (
        <div className={s.container}>
            <p>{title}</p>

            <img src={backdrop} alt="poster" />
        </div>
    );
}

export default Block;