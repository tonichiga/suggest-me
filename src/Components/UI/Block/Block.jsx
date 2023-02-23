import s from "./Block.module.scss";

const Block = ({genres,title}) => {
    return <div className={s.title_block}>
        <a>{genres}</a>
        <h1>{title}</h1>
           </div>
}

export default Block;